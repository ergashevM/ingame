import CartItemsTable from "@/components/CartItemsTable";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const CartPage = () => {
  return (
    <div>
      <Navigation />
      <CartItemsTable />
      <Footer />
    </div>
  );
};

export default CartPage;
