import React from 'react';
import { CardsContainer, PageWapper, SearchBar } from '$components';

export default React.memo(() => (
  <PageWapper>
    <SearchBar />
    <CardsContainer title="Álbuns buscados recentemente">
      Cards
    </CardsContainer>
    <p>bottom</p>
  </PageWapper>
));
