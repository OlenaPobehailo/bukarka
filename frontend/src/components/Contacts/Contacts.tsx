import {
  ContactList,
  ListItem,
  StyledEmailIcon,
  StyledPhoneIcon,
} from "./Contacts.styled";
import SocialList from "components/SocialList/SocialList";

const Contacts: React.FC = () => {
  return (
    <ContactList>
      <ListItem>
        <StyledPhoneIcon />
        <span>+38 096 123 45 67</span>
      </ListItem>
      <ListItem>
        <StyledEmailIcon />
        <span>bukarka.info@gmail.com</span>
      </ListItem>

      <ListItem>
        <SocialList />
      </ListItem>
    </ContactList>
  );
};

export default Contacts;
