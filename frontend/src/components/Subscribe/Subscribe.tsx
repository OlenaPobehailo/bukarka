import {
  Button,
  Form,
  Input,
  Title,
  Wrapper,
} from "./Subscribe.styled";

const Subscribe: React.FC = () => {
  return (
    // <FormWrapper>
      <Form>
        <Title>Хочеш знати про акції та нові надходження?</Title>
        <Wrapper>
          <Input placeholder="Email адреса" />
          <Button type="submit">Підписатися</Button>
        </Wrapper>
      </Form>
    // </FormWrapper>
  );
};

export default Subscribe;
