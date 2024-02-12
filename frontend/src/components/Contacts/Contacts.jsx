import {
  EmailIcon,
  InstagramIcon,
  PhoneIcon,
  TelegramIcon,
  ViberIcon,
  WhatsappIcon,
} from "assets/icons";
import { ContactList, ListItem } from "./Contacts.styled";

const Contacts = () => {
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
        <InstagramIcon />
        <ViberIcon />
        <WhatsappIcon />
        <TelegramIcon />
      </ListItem>
    </ContactList>
  );
};

export default Contacts;
