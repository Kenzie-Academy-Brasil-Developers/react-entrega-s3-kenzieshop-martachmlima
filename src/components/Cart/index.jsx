import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { useHistory } from "react-router";
import { FiArrowLeftCircle } from "react-icons/fi";
import { CartContainer, MainPage, ProductsContainer } from "./style";
const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const history = useHistory();

  const changePage = () => {
    history.push("/");
  };

  const totalPrice = cart.reduce(function (acumulador, valorAtual) {
    return acumulador + valorAtual.price;
  }, 0);

  return (
    <MainPage>
      <section>
        <FiArrowLeftCircle onClick={() => changePage()} />
        <p>voltar</p>
      </section>
      <ProductsContainer>
        {cart.map((product) => (
          <ProductCard key={product.id} product={product} isRemovable />
        ))}
      </ProductsContainer>
      <CartContainer>
        <p>Resumo do pedido</p>
        {cart.length === 0 ? (
          <span>Carrinho vazio</span>
        ) : (
          <>
            <span>{cart.length} produtos</span>
            <span>
              Total: R{`$ `}
              {totalPrice}{" "}
            </span>
          </>
        )}
        <button>Finalizar pedido</button>
      </CartContainer>
    </MainPage>
  );
};

export default Cart;
