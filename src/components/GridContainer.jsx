import React, { useEffect } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useLocation } from 'react-router';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import logo from '../img/vayla_sivussa_fi_sv_rgb.png';
import logo_en from '../img/logo_en.png';
import Grid from './Grid';
import { useTitle } from "../hooks/useTitle";
import { useFolderApiData } from "../hooks/useFolderApiData";

const GridContainer = () => {
  let { folder } = useParams();

  const ref = React.useRef(null);
  const { pathname } = useLocation();
  const { heading } = useTitle(folder)

  useEffect(() => {
    ref.current?.focus();
  }, [ pathname ]);

  const { t } = useTranslation();
  const { rowData, fetchError, idToken } = useFolderApiData(folder, t);

  return (
    <>
      <div id='top' className='accessibility-shortcuts' ref={ ref } tabIndex={ -1 }>
        <a href='#content' className='sr-only sr-only-focusable'>
          { t('go_to_content') }
        </a>
        <a href='#result' className='sr-only sr-only-focusable'>
          { t('go_to_search_result') }
        </a>
        <a href='#footer' className='sr-only sr-only-focusable'>
          { t('go_to_footer') }
        </a>
      </div>
      <div className='page-wrapper'>
        <div className='header' tabIndex={ -1 }>
          <div className='logo'>
            <a href='https://vayla.fi' id='page-top'>
              <img
                src={ i18n.language === 'en' ? logo_en : logo }
                alt='Väylävirasto'
              />
            </a>
          </div>
          <div className='logout'>
            <button
              className='lang-btn'
              onClick={ () => i18n.changeLanguage('fi') }
            >
              Suomi
            </button>
            <button
              className='lang-btn'
              onClick={ () => i18n.changeLanguage('sv') }
            >
              Svenska
            </button>
            <button
              className='lang-btn'
              onClick={ () => i18n.changeLanguage('en') }
            >
              English
            </button>
          </div>
        </div>

        <div className='content-area'>
          <h1 id='content'>{ heading }</h1>

          <p tabIndex='-1'>
            { t('about_open_contact_text') }:{ ' ' }
            <a
              tabIndex='0'
              href={ `mailto:${ t('about_open_contact_email') }` }
              rel='noreferrer'
            >
              { t('about_open_contact_email') }
            </a>
          </p>
        </div>
      </div>
      <Grid rowData={ rowData } fetchError={ fetchError } idToken={ idToken }/>
    </>
  );
};

export default withRouter(GridContainer);
