import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";

const StyledHomeSection = styled.section`
  /* font-family: var(--font-anta); */
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

function HomeContent() {
  return (
    <StyledHomeSection>
      <Heading as="h2">
        Тебя интересует робототехника?
        <br />
        Хочешь создавать роботов, которые двигаются, чувствуют и думают?
      </Heading>
      <p>
        Замечательно! Тогда наша образовательная онлайн-платформа для вас! Мы не
        предлагаем погружаться в теорию или изучать алгоритмы. Вместо этого мы
        начнем с практики. Практика — это весело, и в конце концов вам есть что
        показать! Таким образом, занимаясь крутыми проектами, вы как побочный
        продукт получите знания! Давай начнем учебное путешествие!
      </p>
      <Button size="large">Каталог курсов</Button>
    </StyledHomeSection>
  );
}

export default HomeContent;
