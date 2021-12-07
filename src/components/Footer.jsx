import React from 'react';
import { useTranslation } from 'react-i18next';

import i18n from 'i18next';
import logo from '../img/vayla_alla_fi_sv_rgb.png';
import logo_en from '../img/vaylavirasto-logo_en_rgb.png';


const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className='footer' id='footer'>
      <div className='container'>
        <div className='row footer-row'>
          <div className='col-lg-6'>
            <div className='logo'>
            <img
                src={i18n.language === 'en' ? logo_en : logo}
                alt={t('ftia_full')}
              />
            </div>
            <div className='content'>
              <p>{t('footer_paragraph')}</p>
            </div>

            <div className='social-media-links'>
              <a
                className='footer__description__item footer_description__social__item yja-external-link'
                href='https://www.facebook.com/vaylafi/'
                title='Facebook'
                target='_blank'
                rel='noreferrer'
                aria-label={`Facebook, ${t('external_link')}`}
              >
                {' '}
                <span className='fa-stack fa-2x'>
                  {' '}
                  <i className='fas fa-circle fa-stack-2x'></i>{' '}
                  <i className='fab fa-facebook-square fa-stack-1x fa-inverse'></i>{' '}
                </span>{' '}
                <span className='external-link-notification sr-only'>
                  {t('external_link')}
                </span>
              </a>
              <a
                className='footer__description__item footer_description__social__item yja-external-link'
                href='https://twitter.com/vaylafi'
                title='Twitter'
                target='_blank'
                rel='noreferrer'
                aria-label={`Twitter, ${t('external_link')}`}
              >
                {' '}
                <span className='fa-stack fa-2x'>
                  {' '}
                  <i className='fas fa-circle fa-stack-2x'></i>{' '}
                  <i className='fab fab fa-twitter fa-stack-1x fa-inverse'></i>{' '}
                </span>{' '}
                <span className='external-link-notification sr-only'>
                  {t('external_link')}
                </span>
              </a>
              <a
                className='footer__description__item footer_description__social__item yja-external-link'
                href='https://instagram.com/vaylafi'
                title='Instagram'
                target='_blank'
                rel='noreferrer'
                aria-label={`Instagram, ${t('external_link')}`}
              >
                {' '}
                <span className='fa-stack fa-2x'>
                  {' '}
                  <i className='fas fa-circle fa-stack-2x'></i>{' '}
                  <i className='fab fab fa-instagram fa-stack-1x fa-inverse'></i>{' '}
                </span>{' '}
                <span className='external-link-notification sr-only'>
                  {t('external_link')}
                </span>
              </a>
              <a
                className='footer__description__item footer_description__social__item yja-external-link'
                href='https://www.linkedin.com/company/vaylafi'
                title='LinkedIn'
                target='_blank'
                rel='noreferrer'
                aria-label={`LinkedIn, ${t('external_link')}`}
              >
                {' '}
                <span className='fa-stack fa-2x'>
                  {' '}
                  <i className='fas fa-circle fa-stack-2x'></i>{' '}
                  <i className='fab fab fa-linkedin fa-stack-1x fa-inverse'></i>{' '}
                </span>{' '}
                <span className='external-link-notification sr-only'>
                  {t('external_link')}
                </span>
              </a>
              <a
                className='footer__description__item footer_description__social__item yja-external-link'
                href='http://flickr.com/vaylafi'
                title='Flickr'
                target='_blank'
                rel='noreferrer'
                aria-label={`Flickr, ${t('external_link')}`}
              >
                {' '}
                <span className='fa-stack fa-2x'>
                  {' '}
                  <i className='fas fa-circle fa-stack-2x'></i>{' '}
                  <i className='fab fab fa-flickr fa-stack-1x fa-inverse'></i>{' '}
                </span>{' '}
                <span className='external-link-notification sr-only'>
                  {t('external_link')}
                </span>
              </a>
              <a
                className='footer__description__item footer_description__social__item yja-external-link'
                href='https://www.youtube.com/c/vaylafi'
                title='YouTube'
                target='_blank'
                rel='noreferrer'
                aria-label={`YouTube, ${t('external_link')}`}
              >
                {' '}
                <span className='fa-stack fa-2x'>
                  {' '}
                  <i className='fas fa-circle fa-stack-2x'></i>{' '}
                  <i className='fab fab fa-youtube fa-stack-1x fa-inverse'></i>{' '}
                </span>{' '}
                <span className='external-link-notification sr-only'>
                  {t('external_link')}
                </span>
              </a>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='content right'>
              <p tabIndex={-1}>
                <strong>{t('contact_info')}</strong>
                <br />
                {t('telephone_switch')} 0295 34 3000
                <br />
                {t('fax')} 0295 34 3700
                <br />
                {t('pasila_customer_service')} 0295 34 3003
                <br />
                {t('kirjaamo_email')}
              </p>
              <p tabIndex={-1}>
                <strong>{t('postal_address')}</strong>
                <br />
                {t('ftia_full')}
                <br />
                {t('ftia_po_box')}
                <br />
                {t('ftia_zip_country')}
              </p>

              <div className='footer__contact__links'>
                <a
                  className='footer__contact__links__item'
                  href={t('accessibility_url')}
                >
                  {' '}
                  {t('accessibility')}{' '}
                </a>{' '}
                <br />
                <a
                  className='footer__contact__links__item'
                  href='https://vayla.fi/tietoa-meista/yhteystiedot/tietoa-sivustosta'
                >
                  {' '}
                  {t('about_the_site')}{' '}
                </a>{' '}
                <br />
                <a
                  className='footer__contact__links__item'
                  href='https://vayla.fi/tietoa-meista/yhteystiedot/tietosuoja'
                >
                  {' '}
                  {t('data_protection')}{' '}
                </a>{' '}
                <br />
                <a
                  className='footer__contact__links__item'
                  href='https://vayla.fi/tietoa-meista/medialle/sosiaalinen-media'
                >
                  {' '}
                  {t('social_media')}{' '}
                </a>{' '}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
