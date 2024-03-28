import { useEffect, useState } from "react";
import { Label, SubTitle, Wrapper } from "../OrderCommonStyled";
import {
  AddressInput,
  CityInput,
  FreeInfo,
  Option,
  Options,
  RadioButton,
  RadioInput,
  RadioWrapper,
} from "./Delivery.styled";
import getNovaPoshtaCities from "helpers/getNovaPoshtaCities";

const Delivery: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedRadio, setSelectedRadio] = useState("");

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await getNovaPoshtaCities();
        console.log(cities);
        setOptions(cities);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    };

    fetchCities();
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
  
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowOptions(e.target.value.trim() !== "")
    setShowOptions(true);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".Options")) {
      setShowOptions(false); // При кліку поза елементом Options підказки зникають
    }
  };
  

  const handleOptionClick = (value: string) => {
    setInputValue(value);
    setShowOptions(false);
  };

  const handleOptionChange = (value: string) => {
    setSelectedRadio(value);
  };

  return (
    <Wrapper>
      <SubTitle>Доставка</SubTitle>
      <FreeInfo>Безкоштовно при замовленні на суму від 500 грн.</FreeInfo>
      <Label>Місто*</Label>
      <CityInput
        type="text"
        placeholder="Введіть назву населеного пункту"
        value={inputValue}
        onChange={handleInputChange}
      />
      {showOptions && (
        <Options>
          {options
            .filter((option) =>
              option.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            .slice(0, 3)
            .map((option) => (
              <Option key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </Option>
            ))}
        </Options>
      )}

      <RadioWrapper>
        <Label>Оберіть спосіб доставки*</Label>
        <RadioButton>
          <RadioInput
            type="radio"
            value="option1"
            checked={selectedRadio === "option1"}
            onChange={() => handleOptionChange("option1")}
          />
          <span>Самовивіз з відділення Укрпошти</span>
        </RadioButton>
        <RadioButton>
          <RadioInput
            type="radio"
            value="option2"
            checked={selectedRadio === "option2"}
            onChange={() => handleOptionChange("option2")}
          />
          <span>Самовивіз з відділення Нової Пошти</span>
        </RadioButton>
        <RadioButton>
          <RadioInput
            type="radio"
            value="option3"
            checked={selectedRadio === "option3"}
            onChange={() => handleOptionChange("option3")}
          />
          <span>Самовивіз з поштомату Нової Пошти</span>
        </RadioButton>
        <RadioButton>
          <RadioInput
            type="radio"
            value="option4"
            checked={selectedRadio === "option4"}
            onChange={() => handleOptionChange("option4")}
          />
          <span>Доставка кур’єром Нової Пошти</span>
        </RadioButton>
      </RadioWrapper>

      <Label>Введіть адресу доставки*</Label>
      <AddressInput
        type="text"
        placeholder="Наприклад, бульвар Т.Шевченко, буд. 20, кв. 15"
      />
    </Wrapper>
  );
};

export default Delivery;
