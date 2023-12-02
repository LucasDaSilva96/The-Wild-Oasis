import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 2.9rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 1.9rem;
    `}

     ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1rem;
    `}
`;

export default Heading;
