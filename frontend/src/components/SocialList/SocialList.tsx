import {
  InstagramIcon,
  TelegramIcon,
  ViberIcon,
  WhatsappIcon,
} from "assets/icons";
import { StyledList } from "./SocialList.styled";

const SocialList: React.FC = () => {
  return (
    <StyledList>
      <li>
        <InstagramIcon />
      </li>
      <li>
        <ViberIcon />
      </li>
      <li>
        <WhatsappIcon />
      </li>
      <li>
        <TelegramIcon />
      </li>
    </StyledList>
  );
};

export default SocialList;
