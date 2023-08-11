import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fi: {
    translation: {
      heading: 'Väylävirasto - Palvelualusta julkaisuille',
      about_open_contact_text: 'Yhteystiedot ',
      about_open_contact_email: 'servicedesk@ambientia.fi',
      loading_content: 'Ladataan sisältöä...',
      showing: 'Näytetään',
      name: 'Nimi',
      last_modified: 'Viimeksi muokattu',
      size: 'Koko',
      download_header: 'Lataa',
      download_file: 'Lataa',
      show_more: 'Näytä lisää',
      homepage: 'Etusivu',
      contact_info: 'Asiointi',
      telephone_switch: 'Vaihde',
      fax: 'Faksi',
      pasila_customer_service: 'Pasilan aulapalvelu',
      kirjaamo_email: 'kirjaamo@vayla.fi',
      postal_address: 'Postiosoite',
      ftia_full: 'Väylävirasto',
      ftia_po_box: 'PL 33',
      ftia_zip_country: '00521 HELSINKI',
      accessibility: 'Saavutettavuus',
      accessibility_url: 'http://vayla.fi/tietoa-meista/yhteystiedot/saavutettavuus/saavutettavuusseloste-ava-palju',
      about_the_site: 'Tietoa sivustosta',
      data_protection: 'Tietosuoja',
      social_media: 'Sosiaalinen media',
      external_link: 'Tämä on ulkoinen linkki',
      footer_paragraph:
        'Väylävirasto vastaa valtion tieverkon, rautateiden ja vesiväylien kehittämisestä sekä kunnossapidosta. Näin edistämme yhteiskunnan hyvinvointia ja elinkeinoelämän kilpailukykyä.',
      go_to_content: 'Siirry sisältöön',
      go_to_search_result: 'Siirry hakutulokseen',
      go_to_footer: 'Siirry footeriin',
      go_to_header: 'Siirry headeriin',
      folder: 'Hakemisto',
      file: 'Tiedosto',
      go_back: 'Palaa takaisin'
    }
  },
  en: {
    translation: {
      heading: 'Finnish Transport Infrastructure Agency -  Service platform for publications',
      about_open_contact_text: 'Contact information ',
      about_open_contact_email: 'servicedesk@ambientia.fi',
      loading_content: 'Loading content...',
      showing: 'Showing',
      name: 'Name',
      last_modified: 'Last modified',
      size: 'Size',
      download_header: 'Download',
      download_file: 'Download',
      show_more: 'Show more',
      homepage: 'Home',
      contact_info: 'Contact Information',
      telephone_switch: 'Telephone switchboard',
      fax: 'Fax',
      pasila_customer_service: 'Customer service in Pasila',
      kirjaamo_email: 'ftia@ftia.fi',
      postal_address: 'Postal address',
      ftia_full: 'Finnish Transport Infrastructure Agency',
      ftia_po_box: 'P.O. Box 33',
      ftia_zip_country: '00521 HELSINKI',
      accessibility: 'Accessibility',
      accessibility_url: 'http://vayla.fi/en/about/contact-information/accessibility/accessibility-statement-ava-palju',
      about_the_site: 'About the site',
      data_protection: 'Data protection',
      social_media: 'Social media',
      external_link: 'This is an external link',
      footer_paragraph:
        'The Finnish Transport Infrastructure Agency is responsible for developing and maintaining the state-owned road network, the railways and the waterways. Through our tasks, which include maintaining the level of service of transport, we promote wellbeing in society and competitiveness of Finnish industry.',
      go_to_content: 'Go to content',
      go_to_search_result: 'Go to search result',
      go_to_footer: 'Go to footer',
      go_to_header: 'Go to header',
      folder: 'Folder',
      file: 'File',
      go_back: 'Go back'
    }
  },
  sv: {
    translation: {
      heading: 'Trafikledsverket – Tjänsteplattform för publikationer',
      about_open_contact_text: 'Kontaktinformation ',
      about_open_contact_email: 'servicedesk@ambientia.fi',
      loading_content: 'Innehållet laddas',
      showing: 'Som visar',
      name: 'Namn',
      last_modified: 'Senast ändrad',
      size: 'Storlek',
      download_header: 'Ladda ner',
      download_file: 'Ladda ner',
      show_more: 'Visa mer',
      homepage: 'Hem',
      contact_info: 'Kontaktuppgifter',
      telephone_switch: 'Telefonväxel',
      fax: 'Fax',
      pasila_customer_service: 'Kundservice i Böle',
      kirjaamo_email: 'trafikledsverket@trafikledsverket.fi',
      postal_address: 'Postadress',
      ftia_full: 'Trafikledsverket',
      ftia_po_box: 'PB 33',
      ftia_zip_country: '00521 HELSINGFORS',
      accessibility: 'Tillgänglighet',
      accessibility_url: 'http://vayla.fi/sv/trafikledsverket/kontaktuppgifter/tillganglighet/tillganglighetsutlatande-ava-palju',
      about_the_site: 'Om webbplatsen',
      data_protection: 'Dataskyddspolicy',
      social_media: 'Sociala medier',
      external_link: 'Detta är en extern webbadress',
      footer_paragraph:
        'Trafikledsverket ansvarar för att utveckla och underhålla det statliga vägnätet, järnvägarna och farlederna. Därigenom främjar vi vårt samhälles välmående och näringslivets konkurrenskraft.',
      go_to_content: 'Gå till innehåll',
      go_to_search_result: 'Gå till sökresultatet',
      go_to_footer: 'Gå till sidfoten',
      go_to_header: 'Gå till header',
      folder: 'Mapp',
      file: 'Fil',
      go_back: 'Gå tillbaka'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'fi', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  debug: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
