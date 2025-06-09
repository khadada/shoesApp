import "./Products.css";
import Card from "../components/Card";
const Products = ({ result }) => {
  return (
    <section className="card-container">
      {/* 
  ||----------------------------------------------------------------------||
  ||                            card                                      ||
  ||----------------------------------------------------------------------|| 
  */}
      {result.map((item) => item)}
    </section>
  );
};

export default Products;
