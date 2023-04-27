import { act, render, waitFor, screen } from '@testing-library/react';
import App from './App';
import './i18n';
import i18n from "./i18n";

jest.mock('./hooks/useFolderApiData', () => {
  return {
    // Mocked response when using hook
    useFolderApiData: () => {
      return {
        rowData: [],
        fetchError: false,
        idToken: ''
      }
    }
  }
})


describe('App renders correctly', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders learn react link', async () => {

    let linkElement;

    /* fire events that update state */
    const renderedApp = await render(<App/>);
    linkElement = await renderedApp.container.querySelector('#content');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement.innerHTML).toContain("Väylävirasto - Palvelualusta julkaisuille");
  });

  test('renders contact information on fi language', async () => {
    let linkElement;

    act(() => {
      /* fire events that update state */
      render(<App/>);
      linkElement = screen.getByText(/Yhteystiedot/i);

    });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent(/servicedesk@ambientia.fi/i);
  });

  test('renders contact information on sv language', async () => {
    act(() => {
      i18n.changeLanguage('sv')
      render(<App/>);
      const linkElement = screen.getByText(/Kontaktinformation/i);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent(/servicedesk@ambientia.fi/i);
    });
  });


  test('renders contact information on en language', async () => {
    act(() => {
      /* fire events that update state */
      i18n.changeLanguage('en')
      render(<App/>);
      const linkElement = screen.getAllByText(/Contact information/i)[0];
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveTextContent(/servicedesk@ambientia.fi/i);
    });

  });
})


