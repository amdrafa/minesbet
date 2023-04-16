/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

import { HashLoader as LoadingComponent } from "react-spinners";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export function Loading() {
  return (
    <Container>
      <img src={"/minesbetlogo.png"} width={450} height={250} alt="Logo mines lucrativo" />
      <LoadingComponent color="#a8f45b" size={80} />
    </Container>
  );
}
