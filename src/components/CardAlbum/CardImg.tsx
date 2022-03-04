import { styled } from '$themes';

export const CardImg = styled('div', {
  display: 'block',
  overflow: 'hidden',
  background: '$light2',
  aspectRatio: 1,
  borderRadius: 5,

  img: {
    objectFit: 'cover',
    width: '100%',
    objectPosition: 'center',
  },
});
