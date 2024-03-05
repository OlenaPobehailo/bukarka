import { Link } from "react-router-dom";
import styled from "styled-components";

const HEADER_HEIGHT = "108px";
const FOOTER_HEIGHT = "288px";

export const Main = styled.main`
  display: flex;
  gap: 120px;
  width: 100%;

  height: calc(100vh - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT});
  padding: 83px 136px 0 32px;
`;

export const NotFoundInfo = styled.div`
  width: 536px;
`;
export const Title = styled.main`
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.33;
  color: var(--bukarka-blue);
`;

export const Text = styled.p`
  margin-bottom: 32px;

  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-black);
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 16px;
  min-width: 192px;

  background: var(--bukarka-yellow);
  color: var(--bukarka-black);

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  &:not(:last-child) {
    margin-right: 13px;
  }
`;

export const Image = styled.img`
  width: 400px;
  height: 234px;
`;
