import React, {useState, useEffect} from 'react';

export default function useHandle() {
	const [closeNav, setCloseNav] = useState(false); //State for nav toggle hamburger
	const [screenSize, setScreensize]= useState(false); //State for mobile view
	const [popUP, setPopUP]= useState(false); //State for PopUp toggle 
	const [wishList, setWishList]= useState(false); //State for wishList
	const [noOfOrder, setnoOfOrder]= useState(0); //content orders
	const [totalOrder, setTotalOrder]= useState(0); //navbar wishList


    const handleCloseNavbar= ()=>{	
		const body = document.querySelector("body");
		setCloseNav((prev)=>!prev);
		if(!closeNav){
			body.style.overflow = "hidden";
		}else{
			body.style.overflow = "auto";
		}
	}

	const handleZoomPop = ()=>{
		const body = document.querySelector("body");
		const dropDown= document.querySelector(".dropdown-menu");
		setPopUP((prev)=>!prev);
		if(popUP){
			dropDown.style.setProperty("--zindex", "0");
			body.style.overflow = "auto";
		}else{
			const dropDown= document.querySelector(".dropdown-menu");
			window.scrollTo(-100, 0);
			body.style.overflow = "hidden";
			dropDown.style.setProperty("--zindex", "-1");	
		}
	}

	const handleWishlist=()=>{
		setTotalOrder(document.getElementById("whish-list").innerHTML);
		setWishList((prev)=>!prev);
	}

	const handleDeletOrder=()=>{
		setTotalOrder(0);
		document.getElementById("whish-list").innerHTML= null;
	}

	const handleCartList=()=>{
		if(noOfOrder > 0){
			document.getElementById("whish-list").innerHTML= noOfOrder;
		}
	}

	const handleAddOrder=()=>{
		setnoOfOrder(noOfOrder + 1);
        document.getElementById("order").innerHTML= noOfOrder;
	}

	const handleMinusOrder=()=>{
        if(noOfOrder > 0){ 
			setnoOfOrder(noOfOrder - 1);
            document.getElementById("order").innerHTML= noOfOrder;
        }
	}

	useEffect(() => {
		const notDesktop= window.matchMedia("(max-width: 991.98px)");
		if( notDesktop.matches){
			setScreensize(true);
		}
	},[])

    return {screenSize, handleCloseNavbar, handleZoomPop, handleWishlist, handleCartList, handleAddOrder,
		handleMinusOrder, handleDeletOrder, closeNav, popUP, wishList, noOfOrder, totalOrder};
}
