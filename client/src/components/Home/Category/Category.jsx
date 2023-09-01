import "./Category.scss";
import {useNavigate} from 'react-router-dom';


// import cat1 from "../../../assets/category/cat-1.jpg";
// import Home from "../Home";


const Category = ({categories}) => {
    const navigate = useNavigate();
    return (
        <div className="shop-by-category">
                    <h1 className="sec-heading">Categories </h1>
                        <br />
            <div className="categories">
                {/* {console.log(categories.data)} */}
                    {categories?.data?.map((item) => (  // Optional Chaining 
                        <div key={item.id} className="category"  onClick={() => navigate(`/category/${item.id}`) } >
                            <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                        </div>
                    ))}

            </div>
        </div>

    
        
        );
};

export default Category;
