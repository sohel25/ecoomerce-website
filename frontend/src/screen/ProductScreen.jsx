import React, { useEffect, useState } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../action/productAction';
import { Button } from 'reactstrap';

function ProductScreen(props) {
    const [qty,setQty]=useState(1);
  
    const productDetails = useSelector(state=>state.productDetails);
 
    
    const {product , loading ,error } =productDetails;
    const productId = props.match.params.id;
    const dispatch =useDispatch();
    useEffect(() => {
        console.log(productId);
        dispatch(detailsProduct(productId));
    
    }, [dispatch,productId]);

    const handleAddToCart =()=>{
        props.history.push("/cart/"+ productId + "?qty=" +qty )
    }

    return loading ? <div>Loading...</div>:
    error? <div>{error}</div> :
     (
        <div>
            <div className="back-to-result">
                <Link to ='/'>Back to result</Link>
            </div>
       

            <div className="details">
                
                <div className="details-image">
                     <img src={product.image} alt="product"/>
                     
                 
                </div>
                <div className="details-info">
                    <ul>
                        <li key={product.productId}>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product?.numReviews} Reviews)
                        </li>
                        <li>
                            Price:<b> ${product?.price}</b></li>
                        <li>Description: 
                            <div>
                                {product.description}
                            </div>
                        </li>
                      
                    </ul>
                    
                </div>
               
            </div>
            <div className="details-action">
                    <ul>
                        <li>
                            Price:{product.price}
                        </li>
                        <li>
                            Status:{product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                        </li>
                        <li>
                            Qty: <select value={qty} onChange={(e)=>{setQty(e.target.value)}}>
                            
                                {[...Array(product.countInStock).keys()].map(x=>
                                    <option key={x+1} value={x+1} >{x+1}</option>
                                    )}
                                
                                                           </select>
                        </li>
                        <li>
                     {product.countInStock>0 && 
                    //    <button onClick={handleAddToCart} className="button">Add to cart</button>
                    <Button  onClick={handleAddToCart} className="button" color="warning">Add to cart</Button>
                        }
                   </li>
                    </ul>

                </div>
        </div>
    )    
}

export default ProductScreen;
