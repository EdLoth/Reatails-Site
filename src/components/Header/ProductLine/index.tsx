
import { NavLink } from 'react-router-dom'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'
import { ProductItem, useCart } from '../../../contexts/CartContext'
import { formatMoney } from '../../../utils/formatMoney'
import { RegularText } from '../../Typography'
import { QuantityInput } from '../../QuantityInput'
import { Trash } from 'phosphor-react'

interface LineProduct {
  product: ProductItem
}

export function LineProduct({ product }: LineProduct) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  const productTotal = product.price * product.quantity

  const formattedPrice = formatMoney(productTotal)

  function handleIncrease() {
    changeCartItemQuantity(product.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(product.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(product.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={product.image} alt="" />
        <div>
          <RegularText color="subtitle">{product.name}</RegularText>

          <ActionsContainer>
            <QuantityInput
              size="small"
            
              quantity={product.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  )
}
