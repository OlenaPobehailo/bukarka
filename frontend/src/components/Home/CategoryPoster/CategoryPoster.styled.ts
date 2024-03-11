import styled from "styled-components";

export const StyledPoster = styled.div`
  display: flex;
  justify-content: center;
  width: 192px;
  height: 376px;
  background-color: #ffdc00;
  a {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    display: block;
    height: 100%;
    padding: 0 24px;
    font-size: 40px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0.05em;
    text-align: center;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    background-color: #ff8a10;
    color: #1e1e1e;
  }
`;
