import { styled } from '$themes';

export const Title = styled('p', {
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
