import styled from "styled-components";

export const Conteiner = styled.section`
  width: 100%;
  position: relative;
`;
export const Imagem = styled.div`
  position: absolute;

  .img {
    border: 0.2rem solid #f8f8f8f8;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;
    :hover {
      transform: scale(1.1);
      z-index: 55;
    }
  }
`;
