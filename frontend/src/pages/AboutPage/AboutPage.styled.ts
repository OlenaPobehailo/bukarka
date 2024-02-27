import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 120px;

  padding: 32px 136px 104px 32px;
`;

export const Aside = styled.aside`
  flex-basis: 25%;
`;

export const Label = styled.p`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 192px;
  height: 32px;
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

export const AboutStore = styled.div`
  margin-top: 60px;
  flex-basis: 65%;
`;

export const Title = styled.h1`
  font-family: "Montserrat-Alternates-Semibold";
  font-weight: 600;
  font-size: 40px;
  text-align: left;
  line-height: 0.8;

  color: var(--bukarka-blue);
`;

export const SubTitle = styled.h2`
  margin-bottom: 32px;

  font-family: "Montserrat-Alternates-Regular";
  font-size: 16px;
  line-height: 1.5;
  color: var(--bukarka-black);
`;

export const Description = styled.div`
  font-size: 14px;
  line-height: 1.43;
  color: var(--bukarka-black);

  & p {
    margin-bottom: 24px;
  }

  & p:last-child {
    margin-bottom: 32px;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: #000;

  & span {
    vertical-align: middle;
  }
`;
