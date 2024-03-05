import styled from "styled-components";
import { EmailIcon, PhoneIcon } from "assets/icons";

export const ContactList = styled.ul`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 16px;
`;

export const StyledEmailIcon = styled(EmailIcon)`
  width: 24px;
  height: 20px;
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  width: 26px;
  height: 26px;
`;
