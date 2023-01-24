import { getIdToken } from "../service/AuthService";
import { config } from "../App";
import { useEffect, useState } from "react";
import { axiosAuth } from "../service/AxiosAuth";
import { HttpStatusCode } from "axios";

export const useFolderApiData = (folder, t) => {
  const [ idToken ] = useState(getIdToken())
  const [ rowData, setRowData ] = useState(null);
  const [ fetchError, setFetchError ] = useState(false);

  useEffect(() => {

    axiosAuth.get(`${ config.apiUrl }${ folder || config.defaultFolder }/`,)
      .then(res => {
        if (res.status !== HttpStatusCode.Ok) {
          throw Error(res.statusText);
        }
        return res.data;
      })
      .then(jsonRes => {
        if (jsonRes.aineisto) {
          setRowData(jsonRes.aineisto);
        } else {
          throw Error('Malformed response');
        }
      })
      .catch(error => {
        console.log(error);
        setFetchError(true);
        setRowData([]);
      });
  }, [ folder, t, idToken ]);

  return {
    rowData,
    fetchError,
    idToken
  }
};