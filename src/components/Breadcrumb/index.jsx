import * as React from 'react';
import { Link } from 'react-router-dom';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { useTranslation } from 'react-i18next';

const BreadcrumbItem = ({ match, breadcrumb }) => {
  const { t } = useTranslation();
  var title =
    match.url === '/' ? t('homepage') : breadcrumb.props.children.toLowerCase();
  
    title = title.replace('palju','');

  return <Link to={match.url}>{title}</Link>;
};

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <ul className='breadcrumb'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <li key={match.url}>
          <BreadcrumbItem match={match} breadcrumb={breadcrumb} />
        </li>
      ))}
    </ul>
  );
};

export default withBreadcrumbs()(Breadcrumbs);
