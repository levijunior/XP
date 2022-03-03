import { styled } from '$themes';
import * as LabelPrimitive from '@radix-ui/react-label';

export const Label = styled(LabelPrimitive.Root, {
  fontSize: 12,
  fontWeight: 500,
  color: '#FAFAFA',
  userSelect: 'none',
});
