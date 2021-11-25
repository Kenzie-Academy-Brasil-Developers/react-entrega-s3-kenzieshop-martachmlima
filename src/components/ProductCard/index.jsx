import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";
import { removeFromCart } from "../../store/modules/cart/actions";
import { Card } from "./style";

const ProductCard = ({ product, isRemovable = false }) => {
  const { id, name, author, price, img } = product;

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    toast.success("Produto adicionado ao carrinho!");
  };

  const handleRemove = () => {
    dispatch(removeFromCart(id));
    toast.success("Produto removido do carrinho!");
  };

  return (
    <Card>
      <img src={img} alt={name} />
      <p>{name}</p>
      <span>{author}</span>
      <span>
        R{`$ `}
        {price}
      </span>
      {isRemovable ? (
        <button onClick={() => handleRemove()}>remover</button>
      ) : (
        <button onClick={() => handleAdd()}>adicionar ao carrinho</button>
      )}
    </Card>
  );
};

export default ProductCard;
