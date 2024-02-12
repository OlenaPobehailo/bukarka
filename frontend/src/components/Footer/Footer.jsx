import { Link } from "react-router-dom";
import {
  ListItem,
  StyledFooter,
  StyledList,
  StyledLogoUkr,
  StyledNav,
  Wrapper,
} from "./Footer.styled";
import Contacts from "components/Contacts";

const Footer = () => {
  return (
    <StyledFooter>
      <Wrapper>
        <Link to="/">
          <StyledLogoUkr />
        </Link>
        <StyledNav>
          <StyledNav>
            <StyledList>
              <ListItem>
                <Link to="/about">Про магазин</Link>
              </ListItem>
              <ListItem>
                <Link to="/delivery">Доставка і оплата</Link>
              </ListItem>
              <ListItem>
                <Link to="/contacts">Контакти і зворотний зв’язок</Link>
              </ListItem>
            </StyledList>
            <StyledList>
              <ListItem>
                <Link to="/catalog">Каталог</Link>
              </ListItem>
              <ListItem>
                <Link to="/club">Book Club</Link>
              </ListItem>
              <ListItem>
                <Link to="/privacy">Політика конфіденційності</Link>
              </ListItem>
            </StyledList>
          </StyledNav>
        </StyledNav>

        <Contacts />
      </Wrapper>
    </StyledFooter>
  );
};

export default Footer;
