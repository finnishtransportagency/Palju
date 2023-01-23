import { getIdToken } from "../service/AuthService";
import { config } from "../App";
import { useEffect, useState } from "react";

export const useFolderApiData = (folder, t) => {
  const [ idToken ] = useState(getIdToken())
  const [ rowData, setRowData ] = useState(null);
  const [ fetchError, setFetchError ] = useState(false);

  useEffect(() => {

    fetch(`${ config.apiUrl }${ folder || config.defaultFolder }/`, {
      headers: {
        Authorization: 'Bearer ' + idToken
      }
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
  }, [ folder, t, idToken ]);

  return {
    rowData,
    fetchError,
    idToken
  }
};