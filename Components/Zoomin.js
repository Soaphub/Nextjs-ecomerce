

export default function Zoomin({handleZoom}) {

	const handleClose=()=>{
		handleZoom();
	}

  return (
	<div id="zoom-effect">
		<div id="carouselExample" className="carousel slide carousel-fade zoom-image">	
			<button  type="button" className="close-button" aria-label="Close">
				<svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" className="bi bi-x-lg close-icon" viewBox="0 0 16 16">
  					<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
				</svg>
			</button>
			<div className="carousel-indicators">
    			<button data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
					<img className="thumbnail-image" src="./images/image-product-1-thumbnail.jpg" alt="thumbnail-image"></img> 
				</button>
    			<button data-bs-target="#carouselExample" data-bs-slide-to="1"  aria-label="Slide 2">
					<img className="thumbnail-image" src="./images/image-product-2-thumbnail.jpg" alt="thumbnail-image"></img>
				</button>
    			<button data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3">
					<img className="thumbnail-image" src="./images/image-product-3-thumbnail.jpg" alt="thumbnail-image"></img> 
				</button>
    			<button data-bs-target="#carouselExample" data-bs-slide-to="3" aria-label="Slide 4">
					<img className="thumbnail-image" src="./images/image-product-4-thumbnail.jpg" alt="thumbnail-image"></img>
				</button>
  			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img className="d-block w-100 image" src="./images/image-product-1.jpg" alt="silder-image"></img>
				</div>
				<div className="carousel-item ">
					<img className="d-block w-100 image" src="./images/image-product-2.jpg" alt="silder-image"></img>
				</div>
				<div className="carousel-item">
					<img className="d-block w-100 image" src="./images/image-product-3.jpg" alt="silder-image"></img>
				</div>
				<div className="carousel-item">
					<img className="d-block w-100 image" src="./images/image-product-4.jpg" alt="silder-image"></img>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
			</button>
		</div>
	</div>
  )
}


