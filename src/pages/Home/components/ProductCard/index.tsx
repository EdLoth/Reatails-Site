import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/Typography'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'
import { Product } from '../../../../contexts/CartContext'


interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { addProductToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((oldQuantity) => oldQuantity + 1)
  }

  function handleDecrease() {
    setQuantity((oldQuantity) => oldQuantity - 1)
  }

  function handleAddToCart() {
    const productToAdd = {
      ...product,
      quantity,
    }

    addProductToCart(productToAdd)
  }

  const formattedPrice = formatMoney(product.price)

  return (
    <CoffeeCardContainer>
      <img src={`${product.image}`} alt="" />

      <Name>{product.name}</Name>
      <Description>{product.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            quantity={1}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
