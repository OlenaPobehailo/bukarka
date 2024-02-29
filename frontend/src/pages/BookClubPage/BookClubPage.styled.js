import styled from "styled-components";

export const Label = styled.h1`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  min-width: 192px;
  width: fit-content;
  height: 32px;
  margin-top: 32px;

  margin-bottom: 72px;
  padding: 4px 16px;

  background-color: var(--bukarka-yellow);

  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background: var(--bukarka-blue);
  }
`;

export const Image = styled.img`
  width: 296px;
  height: 419px;
`;

export const AboutBookClub = styled.div`
  margin-top: 64px;
  padding-left: 120px;
  padding-right: 136px;

  /* flex-grow: 1; */
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: var(--bukarka-blue);
`;

export const SubTitle = styled.h3`
  margin-bottom: 16px;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-black);
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;

  color: var(--bukarka-black);
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 104px 0;
`;
