import { Wapper } from './Wapper';
import { Title } from './Title';
import { CardsList } from './CardsList';

type Props = {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
};

function CardsWapper({ children, title }: Props) {
  return (
    <Wapper>
      {title && <Title>{title}</Title>}
      <CardsList>
        {children}
      </CardsList>
    </Wapper>
  );
}

export default CardsWapper;
