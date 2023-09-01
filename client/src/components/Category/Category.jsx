import { useFetcher, useParams } from 'react-router-dom';
import "./Category.scss";
import Products from '../Products/Products';
// import '../Category/Category.scss'
import Cat from '../Home/Category/Category'
import useFetch from '../../hooks/useFetch';

const Category = () => {

    const {id} = useParams();
    // console.log(id);
    const {data} = useFetch(`/api/products?populate=*&[filters][categories][id] = ${id}`)


    return (

            <div className="category-main-content">
                <div className="layout">
                    <div className="category-title">  {data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title} </div>
                    {/* <Cat innerPage={true}/> */}
                    <Products innerPage={true} products={data} /> 
                </div> 
            </div>

            );
};

export default Category;
