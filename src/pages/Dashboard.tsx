import React from 'react';
import {
  CardsContainer, PageWapper, SearchBar, CardAlbum,
} from '$components';

export default React.memo(() => (
  <PageWapper>
    <SearchBar />
    <CardsContainer title="Álbuns buscados recentemente">
      <CardAlbum />
    </CardsContainer>
    <p>bottom</p>
  </PageWapper>
));
