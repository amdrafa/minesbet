import styled, { css } from "styled-components";

type Props = {
  buttonType: "PRIMARY" | "SECONDARY";
};

export const ButtonContainer = styled.button<Props>`
  ${({ buttonType }) => css`
    background: ${buttonType === "PRIMARY"
      ? "linear-gradient(270deg, #c78b1c -3.07%, #f7af29 100%);"
      : "linear-gradient(90deg, #3a0464 0%, #450674 100%)"
    };
  `};

  

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  color: white;

  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-size: 1.125rem;

  max-width: 365px;
  width: 100%;
  height: 65px;

  transition: all 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;
