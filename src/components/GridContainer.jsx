import React, { useEffect, useState } from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { useLocation } from 'react-router';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import logo from '../img/vayla_sivussa_fi_sv_rgb.png';
import logo_en from '../img/logo_en.png';
import Grid from './Grid';
import { config } from '../App';

const GridContainer = () => {
  let { folder } = useParams();
  const [rowData, setRowData] = useState(null);
  const [fetchError, setFetchError] = useState(false);
  const [heading, setHeading] = useState('');
  const ref = React.useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    ref.current?.focus();
  }, [pathname]);

  const { t } = useTranslation();

  useEffect(() => {
    //var title = folder ? `${folder} - ${t('heading')}` : `${t('heading')}`;
    var title = `${folder ?? t('heading')}`;
    if(title === 'palju') {
      title = `${t('heading')}`;
    }
    title = title.replace('palju','');

    document.title = title;
    setHeading(title);

    fetch(`${config.apiUrl}${folder || config.defaultFolder}/`, {
      credentials: 'include'
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
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
  }, [folder, t]);

  return (
    <>
      <div id='top' className='accessibility-shortcuts' ref={ref} tabIndex={-1}>
        <a href='#content' className='sr-only sr-only-focusable'>
          {t('go_to_content')}
        </a>
        <a href='#result' className='sr-only sr-only-focusable'>
          {t('go_to_search_result')}
        </a>
        <a href='#footer' className='sr-only sr-only-focusable'>
          {t('go_to_footer')}
        </a>
      </div>
      <div className='page-wrapper'>
        <div className='header' tabIndex={-1}>
          <div className='logo'>
            <a href='https://vayla.fi' id='page-top'>
              <img
                src={i18n.language === 'en' ? logo_en : logo}
                alt='Väylävirasto'
              />
            </a>
          </div>
          <div className='logout'>
            <button
              className='lang-btn'
              onClick={() => i18n.changeLanguage('fi')}
            >
              Suomi
            </button>
            <button
              className='lang-btn'
              onClick={() => i18n.changeLanguage('sv')}
            >
              Svenska
            </button>
            <button
              className='lang-btn'
              onClick={() => i18n.changeLanguage('en')}
            >
              English
            </button>
          </div>
        </div>

        <div className='content-area'>
          <h1 id='content'>{heading}</h1>
        </div>
      </div>
      <Grid rowData={rowData} fetchError={fetchError} />
    </>
  );
};

export default withRouter(GridContainer);
