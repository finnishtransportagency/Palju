import React from 'react';
import { Link, useParams, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { config } from '../App';
import { getParentPath } from '../helpers';

const Cell = props => {
  const [indexHTML, setIndexHTML] = React.useState(null);
  const { t } = useTranslation();

  if (indexHTML !== null && indexHTML.includes(props.value + 'index.htm')) {
    return (
      <a href={indexHTML} target='_blank' rel='noreferrer'>
        <i
          className='fas fa-file ava-list-icon mr-2'
          role='img'
          aria-label={t('file')}
        />
        {props.value.replace('palju','')}
      </a>
    );
  }

  return <ClickableCellRenderer {...props} />;
};

const ClickableCellRenderer = props => {
  const { folder } = useParams();
  // get Signed URL and retrieve asset from S3
  // response should have Content-Disposition header set to attachment
  const fetchFile = () => {
    fetch(`${config.apiUrl}${props.value || config.defaultFolder}`, {
      headers: {
        Authorization: 'Bearer ' + props.idToken
      }
    })
      .then(res => res.json())
      .then(({ signedUrl }) => {
        if (!signedUrl) {
          throw Error('Signed URL missing from response');
        }


        window.location.assign(signedUrl);
      })
      .catch(console.error);
  };

  const GetIcon = () => {
    const { t } = useTranslation();
    if (props.value === 'BackToParent') {
      return (
        <i
          className='fas fa-arrow-left palju-list-icon'
          aria-label={t('go_back')}
        />
      );
    } else if (props.data.onkohakemisto) {
      return (
        <i
          className='fas fa-folder-open palju-list-icon'
          aria-label={t('folder')}
        />
      );
    }
    return <i className='fas fa-file palju-list-icon' aria-label={t('file')} />;
  };

  const GetLink = () => {
    const { t } = useTranslation();
    const parentPath = getParentPath(folder);
    if (props.value === 'BackToParent') {
      return (
        <Link to={parentPath || config.basePath || '/'} title='Takaisin'>
          {GetIcon()}
          {t('go_back')}
        </Link>
      );
    }

    if (props.data.onkohakemisto) {
      return (
        <Link to={`/${props.value}`} title={props.value}>
          {GetIcon()}
          {props.value.replace('palju','')}
        </Link>
      );
    }
    return (
      <span
        className='palju-file-link'
        role='link'
        tabIndex='0'
        onClick={fetchFile}
        title={props.value}
      >
        {GetIcon()}
        {props.value.replace('palju','').replace('index.html','')}
      </span>
    );
  };

  return <div className='data-wrapper'>{GetLink()}</div>;
};

export default withRouter(Cell);
