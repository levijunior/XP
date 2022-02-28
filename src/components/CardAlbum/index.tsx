import { styled } from '$themes';

const CardWapper = styled('div', {
  padding: '$3',
  margin: '$2',
  width: 180,
  height: 280,
  backgroundColor: 'rgba(255, 255, 255, .05)',
  borderRadius: 5,
  transition: 'background-color .3s ease',
  cursor: 'pointer',
  boxSizing: 'border-box',

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
        color: '#FAFAFA'
      },
      artist: {
        color: '#999'
      },
    },
  },
  defaultVariants: {
    color: 'album',
  },
});

function Card() {
  return (
    <CardWapper>
      <CardImg>
        <img src="https://picsum.photos/200" alt='Album Cover Image'  />
      </CardImg>
      <Title>
        Nome do Álbum
      </Title>
      <Title color="artist">
        Nome do Artista
      </Title>
    </CardWapper>
  );
}

export default Card;
