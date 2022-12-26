import React, { useEffect } from 'react';

export default function Cart(props) {

    useEffect(()=>{
            if(props.totalOrder > 0){
                document.getElementById("title-cart").innerHTML="Fall Limited Edition Sneakers $125 * " +  props.totalOrder;
                document.getElementById("total-cart").innerHTML= "$" + 125 * props.totalOrder;
            }
    },[props])

    const handledelete=()=>{
        props.handleDeletOrder();
    }

  return (
        <div className="card" id="cart-Popup">
            <h3 className="card-title">Cart</h3>
            <div className="card-body">
                {  props.totalOrder > 0 ?
                    <>
                        <div className='row'>
                            <div className='col-3'>
                            <img className="image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail-imsge"></img>
                            </div>
                            <div className='col-7 details'>
                                <p id="title-cart">tile</p>
                                <h4 id="total-cart">total</h4>
                            </div>
                            <div className='col-2'>
                                <img onClick={handledelete} src="./images/icon-delete.svg" alt="product-image"></img>
                            </div>
                        </div>
                        <div className='row'>
                            <button>Checkout</button>
                        </div>
                    </>:
                    <h4 className='empty'>Your cart is empty.</h4>
                }
            </div>
        </div>
  )
}
