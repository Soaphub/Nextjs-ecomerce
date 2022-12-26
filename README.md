# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [https://github.com/Soaphub/Nextjs-ecomerce/edit/master/]
- Live Site URL: [https://nextjs-ecomerce-one.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

```js
const handleCloseNavbar= ()=>{	
		const body = document.querySelector("body");
		setCloseNav((prev)=>!prev);
		if(!closeNav){
			body.style.overflow = "hidden";
		}else{
			body.style.overflow = "auto";
		}
	}
```

### Useful resources

- [https://www.youtube.com/c/TheNetNinja) - Learned more about Nextjs.

## Author

- Website - [Ambadi](https://nextjs-ecomerce-one.vercel.app/)
- Frontend Mentor - [@Soaphub](https://www.frontendmentor.io/profile/Soaphub)


## Acknowledgments

The udemdy coarse by Angela helped a lot in completing the project.

