import { config } from './App';

export const getParentPath = pathParams => {
  let backUrl = null;
  if (typeof pathParams === 'string') {
    const paths = pathParams.split(/\//g);
    if (paths.length > 1) {
      backUrl = `${config.basePath}/${paths
        .slice(0, paths.length - 1)
        .join('/')}`;
    } else {
      backUrl = config.basePath;
    }
  }
  return backUrl;
};

export const getBtnNextAriaLabel = (pageSize, totalRows) => {
  return pageSize.current !== null || totalRows.current !== null
    ? 'Näkyvillä: ' +
        pageSize.current.textContent +
        '/' +
        totalRows.current.textContent +
        '. Näytä lisää.'
    : 'Näytä lisää.';
};
