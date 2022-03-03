import { styled } from '$themes';
import InputText from '../InputText';
import { Label } from './Label';

interface Props {
  handleSearch: (query: string) => void;
  readOnly?: boolean;
}

const Wapper = styled('div', {
  marginBottom: '$6',
});

function SearchBar({ handleSearch, readOnly }: Props) {
  return (
    <Wapper>
      <Label>
        Busque por artistas, álbum ou músicas
      </Label>
      <InputText
        placeholder="Comece a escrever ..."
        aria-placeholder="Digite sua busca"
        onChange={(e) => handleSearch(e.target.value)}
        readOnly={readOnly}
        autoFocus
      />
    </Wapper>
  );
}

export default SearchBar;
