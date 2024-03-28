const axios = require("axios");

const getNovaPoshtaCities = async () => {
  try {
    const apiKey = "your_api_key"; // Замініть на свій API ключ
    const apiEndpoint = "https://api.novaposhta.ua/v2.0/json/";
    const requestData = {
      apiKey: process.env.NOVAPOSHTA_API_KEY,
      modelName: "Address",
      calledMethod: "getCities",
      methodProperties: {},
    };

    const response = await axios.post(apiEndpoint, requestData);
    const cities = response.data.data;

    const cityDescriptions = cities.map((city) => city.Description);

    return cityDescriptions;
  } catch (error) {
    console.error("Помилка отримання переліку міст з API Нової пошти:", error);
    throw new Error("Помилка отримання переліку міст з API Нової пошти");
  }
};

module.exports = { getNovaPoshtaCities };
