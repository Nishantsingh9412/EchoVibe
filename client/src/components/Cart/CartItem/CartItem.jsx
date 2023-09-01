import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp"
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";
const CartItem = () => {
    const {cartItems,handleCartProductQuantity,handleRemoveFromCart} = useContext(Context);
      
    return (
    <div className="cart-item"> 
    {cartItems.map(item => (
        
        <div key={item.id} className="cart-product">
            <div className="img-container">
                <img src={
                    process.env.REACT_APP_DEV_URL + 
                    item.attributes.img.data[0].attributes.url
                }
                alt="" />
            </div>
            <div className="prod-details">
                <span className="name"> {item.attributes.title.substr(0,28)+"..."} </span>
                <MdClose className="close-btn" onClick={() => handleRemoveFromCart(item)} />
                <div className="quantity-buttons">
                    <span onClick={() => handleCartProductQuantity('dec',item)}>-</span>
                    <span>{ item.attributes.quantity }</span>
                    <span onClick={() => handleCartProductQuantity('inc',item)} >+</span>
                </div>
                <div className="text">
                    <span> { item.attributes.quantity } </span>
                    <span>x</span>
                    <span className="highlight" >₹ { item.attributes.price * item.attributes.quantity } </span>
                </div>
            </div>
        </div>
    ))}
    </div>
    );
};

export default CartItem;
