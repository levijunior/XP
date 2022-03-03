import React from 'react';
import { SearchBar, CardsContainer } from '$containers';
import { PageWapper } from '$components';

export default React.memo(() => (
  <PageWapper>
    <SearchBar />
    <CardsContainer />
    <p>Player</p>
  </PageWapper>
));
