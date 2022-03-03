import { styled } from '$themes';
import * as LabelPrimitive from '@radix-ui/react-label';
import InputText from '../InputText';

interface Props {
  handleSearch: (query: string) => void;
  disabled?: boolean;
}

const Wapper = styled('div', {
  marginBottom: '$6',
});

const Label = styled(LabelPrimitive.Root, {
  fontSize: 12,
  fontWeight: 500,
  color: '#FAFAFA',
  userSelect: 'none',
});

function SearchBar({ handleSearch, disabled }: Props) {
  return (
    <Wapper>
      <Label>
        Busque por artistas, álbum ou músicas
      </Label>
      <InputText
        placeholder="Comece a escrever ..."
        aria-placeholder="Digite sua busca"
        onChange={(e) => handleSearch(e.target.value)}
        autoFocus={!disabled}
        readOnly={disabled}
      />
    </Wapper>
  );
}

export default SearchBar;
