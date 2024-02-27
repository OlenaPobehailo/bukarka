import {
  EmailIcon,
  PhoneIcon,
} from "assets/icons";
import { ContactList, ListItem } from "./Contacts.styled";
import SocialList from "components/SocialList/SocialList";

const Contacts: React.FC = () => {
  return (
    <ContactList>
      <ListItem>
        <PhoneIcon />
        <a href="tel:+380961234567">+38 096 123 45 67</a>
      </ListItem>
      <ListItem>
        <EmailIcon />
        <a href="mailto:">bukarka.info@gmail.com</a>
      </ListItem>

      <ListItem>
        <SocialList />
      </ListItem>
    </ContactList>
  );
};

export default Contacts;
