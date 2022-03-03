import { CardWapper } from './CardWapper';
import { CardImg } from './CardImg';
import { Title } from './Title';

function Card({ album, artist, image }: {album: string, artist: string, image: string}) {
  return (
    <CardWapper>
      <CardImg>
        <img src={image} alt="Album Cover" />
      </CardImg>
      <Title>
        {album}
      </Title>
      <Title color="artist">
        {artist}
      </Title>
    </CardWapper>
  );
}

export default Card;
