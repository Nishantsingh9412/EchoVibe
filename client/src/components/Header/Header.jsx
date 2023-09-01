import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { TbSearch } from "react-icons/tb";
import { useState , useEffect ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

import "./Header.scss";



const Header = () => {
    const[scrolled,setScrolled] = useState(false);
    const [showCart,setShowCart] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const navigate = useNavigate();
    const {cartCount} = useContext(Context);

    const handleScroll = () =>{
        const offset = window.scrollY;
        // console.log(offset);
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    };

    useEffect(()=>{
        // console.log('Hi UseEffect');
        window.addEventListener("scroll",handleScroll);
    },[])
    
    return (
        //  Empty fragement is for removing the error  
        <>           
        <header className={`main-header ${scrolled? "sticky-header " : ""} `}> 
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")} className="list_items"> Home</li> 
                    {/* <li className="list_items"> About </li> */}
                    <li className="list_items" onClick={() => {window.scrollTo(0,600);}}> Categories </li>   
                </ul>
                <div className="center" onClick={() => navigate("/") }> EchoVibe </div>
                <div className="right">
                    <TbSearch onClick={() => setShowSearch(true) } />
                    {/* <AiOutlineHeart  /> */}
                    <span className="cart-icon" onClick={() => setShowCart(true)}>
                        <CgShoppingCart />
                       {!! cartCount && <span> {cartCount} </span>}   
                       {/* !! means strictly true */}
                    </span>
                </div>
            </div>
        </header>
        { showCart &&  <Cart  setShowCart= {setShowCart} />}
        {showSearch &&  <Search setShowSearch={setShowSearch} />}
    </>             //  Empty fragement is for removing the error 
    );
};

export default Header;
 
