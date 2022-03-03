import { useState, useRef } from 'react';
import { styled } from '$themes';
import InputText from '../InputText';
import { Label } from './Label';
import { ClearButton } from './ClearButton';

interface Props {
  handleSearch: (query: string) => void;
  readOnly?: boolean;
}

const Wapper = styled('div', {
  position: 'relative',
  marginBottom: '$6',
});

function SearchBar({ handleSearch, readOnly }: Props) {
  const [inputValue, setInputValue] = useState('');

  const inputRef = useRef(null);

  const handleChange = (e: { target: { value: string; } }) => {
    const { value } = e.target;
    handleSearch(value);
    setInputValue(value);
  };

  const handleClear = () => {
    handleSearch('');
    setInputValue('');
    inputRef.current.focus();
  };

  return (
    <Wapper>
      <Label>
        Busque por artistas, álbum ou músicas
      </Label>
      <InputText
        value={inputValue}
        placeholder="Comece a escrever ..."
        aria-placeholder="Digite sua busca"
        onChange={handleChange}
        readOnly={readOnly}
        ref={inputRef}
        autoFocus
      />
      <ClearButton handleClear={handleClear} />
    </Wapper>
  );
}

export default SearchBar;
