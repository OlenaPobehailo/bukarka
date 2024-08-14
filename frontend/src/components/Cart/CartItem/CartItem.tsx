import FavoriteButton from "components/FavoriteButton/FavoriteButton";
import { images } from "assets/images/";
import {
  deleteItem,
  fetchOrderById,
  updateItemQuantity,
} from "appRedux/orders/operations";
import { useAppDispatch } from "appRedux/hooks";
import { useOrderContext } from "components/Order/OrderContext";
import { truncateString } from "utils/truncateString";
import {
  Title,
  Author,
  BookInfo,
  ButtonWrapper,
  ChangeButton,
  DeleteButton,
  Description,
  FavoriteButtonWrapper,
  ImageWrapper,
  ItemPrice,
  Price,
  PriceBlock,
  Quantity,
  StyledCartItem,
  TotalPrice,
} from "./CartItem.styled";

type CartItemProps = {
  item: {
    _id: string;
    quantity: number;
    orderId: string;

    product: {
      _id: string;
      title: string;
      author: string;
      price: number;
      image: string | null;
    };
  };

  onDelete: () => void;
};

const CartItem: React.FC<CartItemProps> = ({ item, onDelete }) => {
  const { _id, quantity } = item;
  const { title, author, price, image } = item.product;
  const { imagePlaceholder } = images;
  const bookId = item.product._id;

  const dispatch = useAppDispatch();
  const { orderId, isBookAdded, markBookAsAdded } = useOrderContext();

  const handleDelete = async (id: string) => {
    if (orderId) {
      await dispatch(deleteItem(id));
      await dispatch(fetchOrderById(orderId));
      onDelete();
    }
  };

  const handleDecreaseQuantity = async () => {
    if (quantity > 1 && orderId) {
      await dispatch(
        updateItemQuantity({
          orderId: item.orderId,
          orderItemId: _id,
          quantity: quantity - 1,
        })
      );
      await dispatch(fetchOrderById(orderId));
    }
  };

  const handleIncreaseQuantity = async () => {
    if (orderId) {
      await dispatch(
        updateItemQuantity({
          orderId: item.orderId,
          orderItemId: _id,
          quantity: quantity + 1,
        })
      );
      await dispatch(fetchOrderById(orderId));
    }
  };

  return (
    <StyledCartItem>
      <BookInfo>
        <ImageWrapper id={_id}>
          <img src={image || imagePlaceholder} alt="" />
        </ImageWrapper>
        <Description>
          <Title>{truncateString(title, 36)}</Title>
          <Author>{truncateString(author, 36)}</Author>
          <FavoriteButtonWrapper>
            <FavoriteButton itemId={bookId} />
            <p>До обраного</p>
          </FavoriteButtonWrapper>
        </Description>
      </BookInfo>
      <PriceBlock>
        <ItemPrice>
          <Price>{price} грн</Price>
          <Quantity>
            <ChangeButton onClick={handleDecreaseQuantity}>-</ChangeButton>
            <input type="text" defaultValue={quantity} />
            <ChangeButton onClick={handleIncreaseQuantity}>+</ChangeButton>
          </Quantity>
          <TotalPrice>{price * quantity} грн</TotalPrice>
        </ItemPrice>
        <ButtonWrapper>
          <DeleteButton onClick={() => handleDelete(_id)}>
            Видалити
          </DeleteButton>
        </ButtonWrapper>
      </PriceBlock>
    </StyledCartItem>
  );
};

export default CartItem;
