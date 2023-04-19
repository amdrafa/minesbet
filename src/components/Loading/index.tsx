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
      <img src={"/logo-gwinz-01.png"} width={300} height={150} alt="Logo mines bet" />
      {/* <LoadingComponent color="#f7b229" size={80} /> */}
    </Container>
  );
}
