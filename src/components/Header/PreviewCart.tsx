import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import './styles.css';
import { NavLink } from 'react-router-dom';
import { HeaderButton } from './styles';
import { useCart } from '../../contexts/CartContext';
import { ShoppingCart } from 'phosphor-react';
import { formatMoney } from '../../utils/formatMoney';

const DELIVERY_PRICE = 3.5

const DropdownMenuDemo = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatMoney(cartItemsTotal)
  
  return (
    <DropdownMenu.Root modal={false} open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenu.Trigger asChild>
        <NavLink to="/cart" onMouseEnter={() => setIsMenuOpen(true)} >
          <HeaderButton variant="yellow">
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </NavLink>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5} onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}>
          {cartItems.map((product) => (
            <>
              <DropdownMenu.Item className="DropdownMenuItem">
                {product.name}<div className="RightSlot">R$ {product.price}</div>
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="DropdownMenuSeparator" />
            </>
          ))}
          <DropdownMenu.Item className="DropdownMenuItem">
           Total<div className="RightSlot">R$ {formattedItemsTotal}</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">

            <NavLink to='/cart'>
              Ver carrinho completo
            </NavLink>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DropdownMenuDemo;