import { getIdToken } from "./AuthService";
import jwt_decode from "jwt-decode";
import axios, { HttpStatusCode } from "axios";
import axiosRetry from "axios-retry";
// Exported axios instance with user and content type headers
export const axiosAuth = axios.create()

const onRetry = (retryCount, error, requestConfig) => {
  console.log(`Retry count: ${ retryCount } error: ${ JSON.stringify(error) } request config: ${ JSON.stringify(requestConfig) }`)
};

// Custom retry delay, retry amount and onRetry console.log for errors.
axiosRetry(axiosAuth, {
  retries: process.env.REACT_APP_AXIOS_RETRY_COUNT || 1,
  retryDelay: (retryCount) => {
    return retryCount * 1000;
  },
  onRetry
});

//we intercept every requests
axiosAuth.interceptors.request.use(function (config) {
  //anything you want to attach to the requests such as token
  // Set default headers to application/json
  config.headers.Accept = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  const apiToken = getIdToken();

  let decoded = {};
  try {
    decoded = jwt_decode(apiToken);
  } catch (e) {
    console.log(e)
  }

  if (decoded.hasOwnProperty('exp') && decoded.exp * 1000 < Date.now()) {

    if (window.confirm('Token is expired, do you allow refreshing it?')) {
      // Save it!
      const logoutUrl = `${ window.location.protocol }//${ window.location.host }/signout`
      axios.get(logoutUrl).then(r => {
          console.log(r)
          window.location.assign("/")
        }
      ).catch(reason => {
        console.log(reason)
        window.location.assign("/")
      })

    } else {
      // Do nothing!
      console.log('Preventing cookie deletion');
    }
  }

  if (apiToken) {
    config.headers['Authorization'] = "Bearer " + apiToken;
  }

  return config;
}, error => {
  // Global error logging handler
  // TODO add notification support
  console.log(error)
  return Promise.reject(error)
})

// Add a response interceptor
axiosAuth.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log(error)
  if (error?.response?.status === HttpStatusCode.Unauthorized) {
    console.log(error?.response?.status)
  }

  return Promise.reject(error);
});