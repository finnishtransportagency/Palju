import React, { useRef, useState, useCallback, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import ClickableCellRenderer from './ClickableCellRenderer';
import ClickableCellRendererSize from './ClickableCellRendererSize';
import ClickableCellRendererModified from './ClickableCellRendererModified';
import { AG_GRID_LOCALE_FI } from '../locale.fi.js';
import { useParams, withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getParentPath, getBtnNextAriaLabel } from '../helpers';
import { config } from '../App';
import Breadcrumb from './Breadcrumb';

const CustomLoadingOverlay = () => {
  const { t } = useTranslation();
  return (
    <div aria-live='polite' aria-busy='true'>
      {t('loading_content')}
    </div>
  );
};

const Grid = ({ rowData, fetchError, history, location }) => {
  const [gridApi, setGridApi] = useState(null);
  const [pageCounter, setPageCounter] = useState(1);
  const [pageTotalCount, setpageTotalCount] = useState(null);
  const showMoreBtn = useRef(null);
  const pageSize = useRef(null);
  const totalRows = useRef(null);
  const { folder } = useParams();
  const { t } = useTranslation();

  const localeTextFunc = (key, defaultValue) => {
    return AG_GRID_LOCALE_FI[key] || defaultValue;
  };

  const onGridReady = p => {
    if (p.api) {
      setGridApi(p.api);
    }
  };

  const onRowDataChanged = () => {
    if (gridApi && rowData) {
      gridApi.setPinnedTopRowData(
        getParentPath(folder) !== null ? [{ tiedosto: 'BackToParent', size: 'BackToParent', lastmodified: 'BackToParent'}] : []
      );
      updateResultsElement(
        gridApi.getDisplayedRowCount(),
        gridApi.paginationGetPageSize(),
        rowData.length
      );
      setShowMoreBtnVisibility(1, gridApi.paginationGetTotalPages());
    }
  };

  const setShowMoreBtnVisibility = (pageCount, pagesTotalCount) => {
    const btn = showMoreBtn.current;
    if (pageCount < pagesTotalCount) {
      btn.style.visibility = 'visible';
      return true;
    } else {
      btn.style.visibility = 'hidden';
      return false;
    }
  };

  const updateResultsElement = useCallback(
    (visibleRows, rowsPerPg, total, pagingDisabled = false) => {
      if (gridApi) {
        pageSize.current.textContent =
          visibleRows > rowsPerPg && !pagingDisabled ? rowsPerPg : visibleRows;
        totalRows.current.textContent = total;
      }
    },
    [gridApi]
  );

  const refreshGridData = useCallback(() => {
    const tempData = gridApi.gridOptionsWrapper.gridOptions.rowData;
    gridApi.gridOptionsWrapper.gridOptions.api.setRowData([]);
    gridApi.gridOptionsWrapper.gridOptions.api.setRowData(tempData);
  }, [gridApi]);

  const setAgBodyViewportHeight = resetHeight => {
    const elem = document.getElementsByClassName('ag-body-viewport')[0];
    if (resetHeight) {
      elem.style.height = 0;
    }
    elem.style.height = elem.scrollHeight + 'px';
  };

  const onBtnNextClickHandler = () => {
    // Show loading overlay
    gridApi.showLoadingOverlay();
    // Page counter
    let pageCounterValue = pageCounter + 1;
    setPageCounter(pageCounterValue);
    // Total number of pages
    let pageTotalCountValue = pageTotalCount;
    if (pageTotalCountValue === null) {
      pageTotalCountValue = gridApi.paginationGetTotalPages(); // start value
      setpageTotalCount(pageTotalCountValue);
    }

    // Current number of rows
    const currentTotalRows = pageCounterValue * config.paginationPageSize;
    gridApi.paginationSetPageSize(currentTotalRows);

    setShowMoreBtnVisibility(pageCounterValue, pageTotalCountValue);

    // Empty gridData to maintain order in mobile layout after button click
    refreshGridData();

    // Set grid viewport height
    setTimeout(() => {
      setAgBodyViewportHeight(false);
    }, 100);

    // Hide loading overlay
    gridApi.hideOverlay();
  };

  const getNoRowsOverlay = () => {
    return fetchError
      ? `<a style="pointer-events: auto !important;" href=${
          config.basePath || '/'
        }>${localeTextFunc('errorFetching')}</a>`
      : `<span>${localeTextFunc('noRowsToShow')}</span>`;
  };

  return (
    <div className='page-wrapper'>
      <Breadcrumb />
      <div className='header-cell right'>
        <div className='results-count active-outline'>
          {t('showing')}: <span ref={pageSize}></span> /{' '}
          <span ref={totalRows}></span>
        </div>
      </div>
      <div
        className='ag-theme-alpine'
        style={{ height: 'auto', width: '100%' }}
        id='result'
      >
        <AgGridReact
          rowData={rowData}
          onRowDataChanged={onRowDataChanged}
          onGridReady={onGridReady}
          suppressColumnVirtualisation={true}
          domLayout='autoHeight'
          pagination={true}
          paginationPageSize={config.paginationPageSize}
          suppressPaginationPanel={true}
          localeTextFunc={localeTextFunc}
          enableSorting={true}
          frameworkComponents={{
            clickableCellRenderer: ClickableCellRenderer,
            clickableCellRendererModified: ClickableCellRendererModified,
            clickableCellRendererSize: ClickableCellRendererSize,   
            customLoadingOverlay: CustomLoadingOverlay
          }}
          loadingOverlayComponent={'customLoadingOverlay'}
          overlayNoRowsTemplate={getNoRowsOverlay()}
        >
          <AgGridColumn
            flex={1000}
            minWidth={100}
            suppressMovable={true}
            hide={false}
            lockVisible={true}
            lockPinned={true}
            headerName={t('name')}
            field='tiedosto'
            cellRenderer='clickableCellRenderer'
            sortable={true}
          />
          <AgGridColumn
            flex={300}
            minWidth={100}
            suppressMovable={false}
            hide={false}
            lockVisible={false}
            lockPinned={false}
            headerName={t('last_modified')}
            field='lastmodified'
            cellRenderer='clickableCellRendererModified'
            sortable={true}
          />         
          <AgGridColumn            
            flex={200}
            minWidth={100}
            suppressMovable={false}
            hide={false}
            lockVisible={false}
            lockPinned={false}
            headerName={t('size')}
            field='size'
            cellRenderer='clickableCellRendererSize'
            sortable={true}       
          />
        </AgGridReact>
        <button
          aria-label={getBtnNextAriaLabel(pageSize, totalRows)}
          style={{ visibility: 'hidden' }}
          className='btn-show-more input'
          ref={showMoreBtn}
          onClick={onBtnNextClickHandler}
        >
          {t('show_more')}
        </button>
      </div>
      <div id="license-rules">
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
          <img src="https://licensebuttons.net/l/by/4.0/88x31.png" alt="Creative Commons License"/>
        </a>
        <span class="license-rules">
        {t('license_prefix')} <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">{t('license_postfix')}</a>
        </span>
      </div>
    </div>
  );
};

export default withRouter(Grid);
