import styled from 'styled-components';
import { MdOutlineSupportAgent } from "react-icons/md";
import { useCart } from '../hooks/useCart';
import { Link } from 'react-router-dom'; // Importe o Link do React Router DOM

const CartFloating = styled(Link)` // Substitua o styled.button por styled(Link)
  border: none;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #8047f8;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none; // Adicione esta linha para manter a estilização do Link
`;

const CartQuantity = styled.span`
  position: absolute;
  top: -3px; /* -3px para posicionar acima da linha do botão */
  right: -3px; /* -3px para posicionar à direita da linha do botão */
  background-color: red;
  color: white;
  font-size: 12px;
  border-radius: 50%;
  padding: 4px;
  min-width: 20px;
  text-align: center;
`;
export default function CartFloatingButton({ ...props }) {
  const alert = 0;
  return (
    <CartFloating {...props} to="/cart"> 
      {alert >= 1 && <CartQuantity>{alert}</CartQuantity>}
      <MdOutlineSupportAgent size={36}/>
    </CartFloating>
  )
};
