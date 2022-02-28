import { styled } from '$themes';

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '$4 0',
  fontSize: 18,
  color: 'white',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
  borderBottom: '2px solid #999',

  '&:focus': {
    borderColor: '#FAFAFA',
  },
});

export default Input;
