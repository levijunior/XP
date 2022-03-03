import React, { useState, useEffect } from 'react';
import { SearchBar } from '$components';
import { useAppContext } from '$context';
import { SEARCH } from '$constants/actions';

import { getSearchResults } from '$api';

export default React.memo(() => {
  const { state, dispatch } = useAppContext();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [disableSearch, setDisableSearch] = useState<boolean>();

  useEffect(() => {
    if (searchQuery) {
      getSearchResults(state.token.access_token, searchQuery)
        .then(async (res) => {
          if (res?.data) {
            await dispatch({
              type: SEARCH,
              search: { ...state.search, items: res.data.albums?.items, query: searchQuery },
            });
          }
        });
    } else {
      setDisableSearch(true);
      setTimeout(() => {
        dispatch({
          type: SEARCH,
          search: null,
        });
        setDisableSearch(false);
      }, 500);
    }
  }, [searchQuery]);

  return (
    <SearchBar handleSearch={setSearchQuery} readOnly={disableSearch} />
  );
});
