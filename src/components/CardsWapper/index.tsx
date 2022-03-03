import { styled } from '$themes';

type Props = {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
};

const Wapper = styled('div', {
  position: 'relative',
  flexGrow: 1,
  overflowX: 'hidden',
  overflowY: 'auto',
  // TODO: styles for scrollbar
});

const Title = styled('h3', {
  fontSize: '14px',
  fontWeight: 500,
  color: '#999',
  marginBottom: '$4',
});

const CardsList = styled('div', {
  margin: '0 -$2',
  display: 'flex',
  flexFlow: 'wrap',
});

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
