import useHandle from '../Hooks/useHandle';
import Zoomin from './Zoomin';

export default function Content() {
	const {screenSize, handleZoomPop, handleCartList, handleAddOrder, handleMinusOrder,
         popUP, noOfOrder}= useHandle();

    const handleZoom = ()=>{
        handleZoomPop();
    }

    const handleAdd= ()=>{
        handleAddOrder();
    }

    const handleMinus=()=>{
        handleMinusOrder();
    }

    const handleCart=()=>{
        handleCartList();
    }

    return (
    <div className='container-fluid full-content'>
        <div className='row'>

            {/* Left Content of the Page	 */}
            <div className='col-lg left-content'>
                { screenSize ?
                    <div id="carouselExampleControls" className="carousel slide carousel-fade">
                      <div className="carousel-inner">
                            <div className="carousel-item active" role="carousel-item">
                                <img className="d-block slider-image" src="./images/image-product-1.jpg" alt="product-image"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block slider-image" src="./images/image-product-2.jpg" alt="product-image"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block slider-image" src="./images/image-product-3.jpg" alt="product-image"></img>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block slider-image" src="./images/image-product-4.jpg" alt="product-image"></img>
                            </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      </button>
                    </div>:
                    <div id="carouselExampleControls" className="carousel slide carousel-fade popup-image">
			            <div className="carousel-indicators" role="carousel-indicators">
    		            	<button data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
			            		<img className="thumbnail-image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail-imsge"></img> 
			            	</button>
    		            	<button data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide 2">
			            		<img className="thumbnail-image" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail-imsge"></img>
			            	</button>
    		            	<button data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3">
			            		<img className="thumbnail-image" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail-imsge"></img> 
			            	</button>
    		            	<button data-bs-target="#carouselExampleControls" data-bs-slide-to="3" aria-label="Slide 4">
			            		<img className="thumbnail-image" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail-imsge"></img>
			            	</button>
  			            </div>
			            <div className="carousel-inner">
			            	<div className="carousel-item active" role="carousel-item">
			            		<img onClick={handleZoom} className="d-block w-100 image" src="./images/image-product-1.jpg" alt="product-image"></img>
			            	</div>
			            	<div className="carousel-item">
			            		<img onClick={handleZoom} className="d-block w-100 image" src="./images/image-product-2.jpg" alt="product-image"></img>
			            	</div>
			            	<div className="carousel-item">
			            		<img onClick={handleZoom} className="d-block w-100 image" src="./images/image-product-3.jpg" alt="product-image"></img>
			            	</div>
			            	<div className="carousel-item">
			            		<img onClick={handleZoom} className="d-block w-100 image" src="./images/image-product-4.jpg" alt="product-image"></img>
			            	</div>
			            </div>
		            </div>
                }
            </div>

            {/* Right content of the Page */}
            <div className='col-lg right-content' role="right-content">
                <h1>SNEAKER COMPANY</h1>
                <h2 id="title">Fall Limited Edition Sneakers</h2>
                <p>These low-profile sneakers are your perfect casual wear companian. Featuring a duable 
                    rubber outer sole, they can withstand evrything the weather can offer.</p>	
                <div>	
                    <div className="amount-discount">	
                        <h3 id="price">$125.00</h3>
                        <h4>50%</h4>
                    </div>
                    <h4 className='total-amount'>$250.00</h4>
                </div>
                <div className='row order'>
                    <div className='col-lg-4'>	
                        <div className="btn-group no-oforder" role="group" aria-label="Basic example">
                            <button onClick={handleMinus} type="button" className="btn"><img src='./images/icon-minus.svg' alt="minus-image"/></button>
                            <h5 id="order">{noOfOrder}</h5>
                            <button onClick={handleAdd} type="button" className="btn"><img src='./images/icon-plus.svg' alt="plus-image"/></button>
                        </div>	
                    </div>
                    <div className='col-lg-8'>
                        <button onClick={handleCart}><svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-cart3 cart-image" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>Add to cart
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
        <div>
        { popUP && <Zoomin handleZoom={handleZoom}/>}
        </div>
    </div>
  )
}
