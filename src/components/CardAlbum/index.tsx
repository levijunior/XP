import { styled } from '$themes';

const CardWapper = styled('div', {
  padding: '$3',
  margin: '$2',
  width: 180,
  minHeight: 300,
  backgroundColor: 'rgba(255, 255, 255, .05)',
  borderRadius: 5,
  transition: 'background-color .3s ease',
  cursor: 'pointer',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 0,

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, .1)',
  },
});

const CardImg = styled('div', {
  display: 'block',
  overflow: 'hidden',
  background: '#666',
  aspectRatio: 1,
  borderRadius: 5,

  img: {
    objectFit: 'cover',
    width: '100%',
    objectPosition: 'center',
  },
});

const Title = styled('p', {
  fontSize: '12px',
  variants: {
    color: {
      album: {
        color: '#FAFAFA',
      },
      artist: {
        color: '#999',
      },
    },
  },
  defaultVariants: {
    color: 'album',
  },
  marginBottom: 0,
});

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
