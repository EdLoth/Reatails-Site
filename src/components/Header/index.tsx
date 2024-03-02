import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'
import DropdownMenuDemo from './PreviewCart'

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <h1>Vogar</h1>
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <DropdownMenuDemo/>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}