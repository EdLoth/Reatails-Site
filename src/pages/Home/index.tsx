import CartFloatingButton from '../../components/ButtonFloating'
import { CategoryRow } from './components/CategoryRow'
import { OurProducts } from './components/OurCoffees'
import {HomeContainer } from './styles'

export function HomePage() {
  return (
    <HomeContainer>
      <CategoryRow />
      <OurProducts />
      <CartFloatingButton />
    </HomeContainer>
  )
}
