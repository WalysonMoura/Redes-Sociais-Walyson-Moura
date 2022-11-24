import styled from "styled-components";

export const Botao = styled.button`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 0.9em 1.6em;
  border: none;
  outline: none;
  color: #fff;
  font-family: inherit;
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 12px;
  box-shadow: 7px 7px 14px #0f1226, -7px -7px 14px #151a34;

  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #12162d;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  ::before {
    content: "";
    background: linear-gradient(
      45deg,
      hsl(180, 100%, 60%),
      #002bff,
      hsl(180, 100%, 60%),
      #002bff,
      hsl(180, 100%, 60%),
      #002bff,
      hsl(180, 100%, 60%),
      #002bff
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 600%;
    z-index: -1;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    filter: blur(8px);
    animation: glowing 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
    opacity: 0;
  }

  @keyframes glowing {
    0% {
      background-position: 0 0;
    }

    50% {
      background-position: 400% 0;
    }

    100% {
      background-position: 0 0;
    }
  }

  :hover::before {
    opacity: 1;
  }

  :active:after {
    background: transparent;
  }

  :active {
    color: #000;
    font-weight: bold;
  }
  :hover {
    transform: translateY(-0.25rem);
    transition: 0.3s;
    color: hsl(180, 100%, 60%);
  }
`;
