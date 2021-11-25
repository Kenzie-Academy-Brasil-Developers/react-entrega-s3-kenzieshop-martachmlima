import { Header } from "./style";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router";

const PageHeader = () => {
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  const changePage = () => {
    history.push("/cart");
  };

  return (
    <Header>
      <h2>Kenzie Shop</h2>
      <span onClick={() => changePage()}>
        {cart.length > 0 && <p>{cart.length}</p>}
        <FiShoppingCart />
        {"  "} Carrinho
      </span>
    </Header>
  );
};

export default PageHeader;
