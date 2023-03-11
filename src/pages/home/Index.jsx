import { useGlobalContext } from "../../components/context";
import SingleCart from "../../components/singleCart/SingleCart";
import Modal from "../../components/modal/Modal";

// module css
import classes from "./styles.module.css";

export default function Home() {
  const { cart, isModalOpen } = useGlobalContext();
  return (
    <main>
      {isModalOpen && <Modal />}
      <h1 className="main-title">
        Our <span>Products</span>
      </h1>
      <section className={classes["section-center"]}>
        {cart.map((item) => {
          return <SingleCart {...item} key={item.id} />;
        })}
      </section>
    </main>
  );
}
