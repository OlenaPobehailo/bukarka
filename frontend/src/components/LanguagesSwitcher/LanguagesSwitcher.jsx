import { Button, Separator, StyledSwitcher } from "./LanguagesSwitcher,styled";

const LanguagesSwitcher = () => {
  return (
    <StyledSwitcher>
      <Button
      // disabled={i18n.language === LOCALS.UK}
      // onClick={() => changeLanguage(LOCALS.UK)}
      >
        UA
      </Button>
      <Separator>|</Separator>
      <button
        disabled={true}
        // disabled={i18n.language === LOCALS.EN}
        // onClick={() => i18n.changeLanguage(LOCALS.EN)}
      >
        EN
      </button>
    </StyledSwitcher>
  );
};

export default LanguagesSwitcher;
