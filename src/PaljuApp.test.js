import { act, render, waitFor } from '@testing-library/react';
import App from './App';
import './i18n';
import axios from 'axios'
import axiosRetry from "axios-retry";
import { axiosAuth } from "./service/AxiosAuth";
// jest.mock('axios', () => ({
//   __esModule: true,
//   get: jest.fn(),
//   default: {
//     create: jest.fn()
//   },
// }));
//
// jest.mock('axios-retry', () => ({
//   __esModule: true,
//   get: jest.fn(),
//   default: {
//     create: jest.fn()
//   },
// }));


describe('App renders correctly', () => {
  afterEach(() => {
    jest.mock('./service/AxiosAuth')
    jest.clearAllMocks()
  })

  test('renders learn react link', async () => {


    let linkElement;
    const renderedApp = await render(<App/>);
    linkElement = renderedApp.container.querySelector('#content');

    console.log(renderedApp.container.innerHTML)
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.innerHTML).toContain("Väylävirasto - Palvelualusta julkaisuille");

  });

})


// test('renders contact information on fi language', async () => {
//   let linkElement;
//
//   act(() => {
//     /* fire events that update state */
//     render(<App/>);
//     linkElement = screen.getByText(/Yhteystiedot/i);
//
//   });
//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement).toHaveTextContent(/sd@ambientia.fi/i);
// });
//
// test('renders contact information on sv language', async () => {
//   act(() => {
//     i18n.changeLanguage('sv')
//     render(<App/>);
//     const linkElement = screen.getByText(/Kontaktinformation/i);
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent(/sd@ambientia.fi/i);
//   });
// });
//
//
// test('renders contact information on en language', async () => {
//   act(() => {
//     /* fire events that update state */
//     i18n.changeLanguage('en')
//     render(<App/>);
//     const linkElement = screen.getAllByText(/Contact information/i)[0];
//     expect(linkElement).toBeInTheDocument();
//     expect(linkElement).toHaveTextContent(/sd@ambientia.fi/i);
//   });
//
// });