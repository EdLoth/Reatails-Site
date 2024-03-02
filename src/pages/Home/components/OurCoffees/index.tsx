import { TitleText } from '../../../../components/Typography'
import { products } from '../../../../data/products'
import { ProductCard } from '../ProductCard'
import { ProductList, OurProductsContainer } from './styles'

export function OurProducts() {
  return (
    <OurProductsContainer className="container">
      <TitleText size="l" color="subtitle">
        Categorias
      </TitleText>

      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductList>
    </OurProductsContainer>
  )
}
