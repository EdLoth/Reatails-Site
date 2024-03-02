import styled from "styled-components";

export const Container = styled.div`
  padding-top: 8rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
`

export const CategoryRowContent = styled.div`
  padding-top: 3.5rem;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const CategoryCard = styled.div`
  flex: 0 0 20%; /* Mostrar 5 itens por linha */
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .icon-container {
    /* Estilos para o contêiner do ícone */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 100px;
    height: 100px;
    border: 6px #F3F2F2 solid;
    overflow: hidden; /* Garante que a borda gire dentro do contêiner */
    transition: border-color 0.3s, transform 0.3s; /* Transição suave de cor e rotação */
  }

  & .icon-container:hover {
    border: 6px #333 dotted;
    border-color: #8047f8; /* Cor da borda quando hover */
    transform: rotate(360deg); /* Gira a borda quando hover */
  }

  & svg {
    /* Estilos para o ícone */
    background-color: transparent;
    padding: 25px;
    width: 100%;
    height: 100%;
  }

  & svg:hover {
    /* Estilos para o ícone */
    background-color: #333;
    padding: 25px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    flex: 0 0 33.33%; /* Mostrar 3 itens por linha em telas menores */
  }
`;




export const ButtonCarosel = styled.button`
background-color: #f5f5f5;
border: none;
border-radius: 50%;
cursor: pointer;
width: 40px;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
margin: 0 10px;
transition: background-color 0.3s;

&:hover {
  background-color: #8047f8;
}

&:hover svg {
  color: #f5f5f5;
}

svg {
  color: #333;
  transition: color 0.3s;
}
`;