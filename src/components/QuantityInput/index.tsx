import { QuantityInputContainer, IconWrapper } from './styles'
import { Minus, Plus } from 'phosphor-react'

interface QuantityInputProps {
  size?: 'medium' | 'small'
  quantity: number
}

export function QuantityInput({
  quantity,
  size = 'medium',
}: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <input hidden type="number" readOnly value={quantity} />
    </QuantityInputContainer>
  )
}
