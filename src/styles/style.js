import styled from "styled-components";
import { Colors } from "../styles/colors";

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;
  display: grid;
  gap: 2.5rem;
  padding: 3rem 0;
`;

export const Imagem = styled.section`
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export const Principal = styled.section`
  @font-face {
    font-family: Kusanagi;
    src: url(/Fonts/Kusanagi.otf);
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    font-family: Kusanagi;
    color: ${Colors.azul1};
  }
  h3 {
    margin-bottom: 1.5rem;
  }
`;

export const Links = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.5rem;

  @media (max-width: 768px) {
    padding: 0 2rem;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

export const wg = styled.section``;
export const Ecommerce = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  h2 {
    font-size: 1.4rem;
    font-family: Kusanagi;
    color: ${Colors.azul1};
    text-align: center;
    letter-spacing: 0.1rem;
    word-spacing: 0.5rem;
    line-height: 2rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6rem;

  }
  section,
  section div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    div {
      margin-bottom: 1rem;
      h3 {
        font-size: 1.8rem;
        strong{
          color: ${Colors.azul1};
        }
      }
      h4 {
        font-size: 1.3rem;
      }
      gap: 1.5rem;
    }
  }
 
`;
