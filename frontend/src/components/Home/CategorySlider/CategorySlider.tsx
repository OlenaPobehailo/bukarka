import CategoryPoster from "../CategoryPoster/CategoryPoster";
import SimpleSlider from "../../Slider/SimpleSlider";
import { StyledCategorySlider } from "./CategorySlider.styled";
import { useEffect, useState } from "react";
import { instance } from "../../../utils/fetchInstance";

interface IProps {
  _id: string;
  title: string;
  author: string;
  image: string | null;
  price: number;
  rating: number;
}

const CategorySlider = () => {
  const [booksNew, setBooksNew] = useState<IProps[]>([]);
  const [booksBestsellers, setBooksBestsellers] = useState<IProps[]>([]);
  const [booksPromotions, setBooksPromotions] = useState<IProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/api/books/new`);
        const books = await response.data;
        setBooksNew(books.data);
      } catch (error) {
        console.error("Помилка при виконанні запиту:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/api/books/bestsellers`);
        const books = await response.data;
        setBooksBestsellers(books.data);
      } catch (error) {
        console.error("Помилка при виконанні запиту:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get(`/api/books/promotions`);
        const books = await response.data;
        setBooksPromotions(books.data);
      } catch (error) {
        console.error("Помилка при виконанні запиту:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <StyledCategorySlider>
        <CategoryPoster title={"НОВИНКИ"} />
        <SimpleSlider data={booksNew} />
      </StyledCategorySlider>
      <StyledCategorySlider>
        <CategoryPoster title={"БЕСТСЕЛЕРИ"} />
        <SimpleSlider data={booksBestsellers} />
      </StyledCategorySlider>
      <StyledCategorySlider>
        <CategoryPoster title={"АКЦІЇ"} />
        <SimpleSlider data={booksPromotions} />
      </StyledCategorySlider>
    </>
  );
};

export default CategorySlider;
