import React from 'react';
import { CardsWapper, CardAlbum } from '$components';
import { useAppContext } from '$context';

export default function CardsContainer() {
  const { state } = useAppContext();

  if (!state.search?.items?.length) { // TODO: map of albums saved on localstorage
    return (
      <CardsWapper title="Álbuns buscados recentemente">
        {/* <CardAlbum
          album="name"
          artist="artist"
          image=""
        /> */}
      </CardsWapper>
    );
  }

  return (
    <CardsWapper title={`Resultados buscados para "${state.search.query}"`}>
      {state.search.items.map((item: {
        artists: { name: string; }[];
        uri: React.Key;
        name: string;
        images: { url: string; }[];
      }) => {
        const artistis = item.artists.map((artist) => (
          artist.name
        ));
        return (
          <CardAlbum
            key={item.uri}
            album={item.name}
            artist={artistis.join().replace(',', ', ')}
            image={item.images[1]?.url}
          />
        );
      })}
    </CardsWapper>
  );
}
