import { useContext } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import styles from './Modal.module.css';
import MealsContext from '../../store/meals-context';

const Backdrop = (props) => {
  return <div className={styles.backdrop}></div>;
};

// const Backdrop = () => {
//   const { setShowModal } = useContext(MealsContext);
//   return (
//     <div
//       className={styles.backdrop}
//       onClick={() => {
//         setShowModal(false);
//       }}
//     ></div>
//   );
// };

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

// const Overlay = () => {
//   const ctx = useContext(MealsContext);
//   const cart = ctx.meals.filter((item) => item.amount > 0);

//   return (
//     <Card className={styles.overlay}>
//       <ul className={cart.length > 2 && styles.active}>
//         {cart.map((item) => (
//           <li key={item.id}>
//             <div className={styles.display}>
//               <div className={styles.title}>{item.title}</div>
//               <div className={styles.numbers}>
//                 <div className={styles.price}>${item.price}</div>
//                 <div className={styles.amount}>x{item.amount}</div>
//               </div>
//             </div>
//             <div className={styles.buttons}>
//               <button>-</button>
//               <button>+</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className={styles.total}>
//         <p>Total Amount</p>
//         <p>${10.05}</p>
//       </div>
//       <div className={styles.btns}>
//         <button
//           onClick={() => {
//             ctx.setShowModal(false);
//           }}
//         >
//           Close
//         </button>
//         <button>Order</button>
//       </div>
//     </Card>
//   );
// };

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
