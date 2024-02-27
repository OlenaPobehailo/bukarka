import { Button, Form, Input, Title, Wrapper } from "./Subscribe.styled";

const Subscribe = () => {
  return (
    <Form>
      <Title>Хочеш знати про акції та нові надходження?</Title>
      <Wrapper>
        <Input placeholder="Email адреса"/>
        <Button type="submit">Підписатися</Button>
      </Wrapper>
    </Form>
  );
};

export default Subscribe;
