

import { useState } from "react";
import { TitleText } from "../../../../components/Typography";
import categorias from "../../../../data/categorys";
import { ButtonCarosel, CarouselContainer, CategoryCard, CategoryRowContent, Container } from './styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categoriesPerPage = 5;
const totalCategories = categorias.length;
const totalPages = Math.ceil(totalCategories / categoriesPerPage);

export function CategoryRow() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage === totalPages ? 1 : currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage === 1 ? totalPages : currentPage - 1);
  };

  const startIdx = (currentPage - 1) * categoriesPerPage;
  let endIdx = startIdx + categoriesPerPage;
  if (endIdx > totalCategories) {
    endIdx = totalCategories;
  }

  const visibleCategories = categorias.slice(startIdx, endIdx);

  return (
    <Container className="container">
      <TitleText size="l" color="subtitle">
        Departamentos
      </TitleText>
      <CategoryRowContent>

        <ButtonCarosel onClick={handlePrevPage}>
          <FaChevronLeft />
        </ButtonCarosel>
        <CarouselContainer>
          {visibleCategories.map((category) => (
            <CategoryCard key={category.id}>
              <div className="icon-container">
                <category.icon color="#8047f8" />
              </div>
              <span>{category.title}</span>
            </CategoryCard>
          ))}
        </CarouselContainer>
        <ButtonCarosel onClick={handleNextPage}>
          <FaChevronRight />
        </ButtonCarosel>
      </CategoryRowContent>
    </Container>

  )
}
