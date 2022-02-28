import { blackA, slate } from '@radix-ui/colors';
import { styled } from '$theme';

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',

  variants: {
    variant: {
      primary: {
        backgroundColor: 'white',
        color: '#333',
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: slate.slate3 },
        '&:focus': { boxShadow: '0 0 0 2px black' },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export default Button;
