import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1024px;
  padding: 32px 89px;
`;

export const StyledCatalog = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: start;
  align-content: space-around;
  height: 85vh;
  /* overflow: auto; */
`;

export const Item = styled.li`
  /* flex: 0 0 calc(33.33% - 20px);  */
  width: 200px;
  margin-bottom: 8px;
`;

export const Title = styled.h1`
  position: relative;

  display: inline-block;
  width: 208px;
  padding: 0 16px;
  margin-bottom: 16px;
  text-align: left;

  background-color: var(--bukarka-orange);
  color: var(--bukarka-black);

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
`;

export const Subtitle = styled(Title)`
  background-color: var(--bukarka-yellow);
  margin-bottom: 8px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background-color: var(--bukarka-orange);
  }
`;
export const StyledBlock = styled.div`
  margin-left: 16px;
`;

export const SmallSubTitle = styled.h3`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 14px;

  line-height: 1.43;
  color: var(--bukarka-black);
`;

export const StyledItem = styled.li`
  font-weight: 400;
  font-size: 14px;
  margin-left: 16px;

  line-height: 1.43;
  color: var(--bukarka-black);
`;
