import { styled } from '$themes';

export const Title = styled('p', {
  fontSize: '$2',
  variants: {
    color: {
      album: {
        color: '$light1',
      },
      artist: {
        color: '$light3',
      },
    },
  },
  defaultVariants: {
    color: 'album',
  },
  marginBottom: 0,
});
