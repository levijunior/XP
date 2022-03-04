import { styled } from '$themes';

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '$4 0',
  fontSize: '$6',
  color: 'white',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  borderBottom: '2px solid $light3',

  '&:focus': {
    borderColor: '$light1',
  },
});

export default Input;
