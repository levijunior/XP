import { styled } from '$themes';

export const CardWapper = styled('div', {
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
