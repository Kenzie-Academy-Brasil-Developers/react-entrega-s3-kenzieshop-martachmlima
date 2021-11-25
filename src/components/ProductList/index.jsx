import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";
import { Container } from "./style";
const ProductList = () => {
  const products = useSelector((store) => store.products);

  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default ProductList;
