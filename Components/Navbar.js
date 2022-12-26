import Link from 'next/link';
import useHandle from '../Hooks/useHandle';
import {useRouter} from 'next/router';
import Cart from './Cart';

export default function Navbar() {
	const {screenSize, handleCloseNavbar, handleWishlist, handleDeletOrder, closeNav, wishList, totalOrder}= useHandle();
	const router = useRouter();

	const handleHamburger= ()=>{
		handleCloseNavbar();
	}

	const handleWishlists=()=>{
		handleWishlist();
	}
	
	
  return (
    <div>
        <nav className="navbar navbar-expand-lg nav-edit">
            <div className="container-fluid">
                <button onClick={handleHamburger}  className="navbar-toggler nav-btn" type="button" 
				data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
                aria-expanded="false" aria-label="Toggle navigation">
                	<span className ={ closeNav ?  "navbar-toggler-icon toggle-image-close":
					 	"navbar-toggler-icon toggle-image-ham"}>
					 </span>
                </button>
                <a className="navbar-brand nav-title" href="#">sneakers</a>
                { screenSize && 
					<div className="ms-auto nav-profile">
                		<div className="position-relative">
							<svg onClick={handleWishlists} xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-cart3 cart-image" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
							<span id="whish-list" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">

  							</span>
						</div>
                		<img className="avatar-image" src="./images/image-avatar.png" alt="avatar"/>
                	</div>
				}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">	
					{ screenSize ?
						<div className='blur'>
                    		<ul className="navbar-nav me-auto dropdown-menu">
                    			<li className="nav-item nav-list">
                    				<Link onClick={handleHamburger} href="/" className={router.pathname == "/" ? "active" : ""}>Collections</Link>
                    			</li>
                    			<li className="nav-item">
                    				<Link onClick={handleHamburger} href="/men" className={router.pathname == "/men" ? "active" : ""}>Men</Link>
                    			</li>
                    			<li className="nav-item">
                    				<Link onClick={handleHamburger} href="/women" className={router.pathname == "/women" ? "active" : ""}>Women</Link>
                    			</li>
                    			<li className="nav-item">
                    				<Link onClick={handleHamburger} href="/">About</Link>
                    			</li>
                    			<li className="nav-item">
                    				<Link onClick={handleHamburger} href="/">Contact</Link>
                    			</li>
                    		</ul>
						</div>:
						<ul className="navbar-nav me-auto dropdown-menu">
                    		<li className="nav-item nav-list">
                    			<Link href="/" className={router.pathname == "/" ? "active" : ""}>Collections</Link>
                    		</li>
                    		<li className="nav-item">
                    			<Link href="/men" className={router.pathname == "/men" ? "active" : ""}>Men</Link>
                    		</li>
                    		<li className="nav-item">
                    			<Link href="/women" className={router.pathname == "/women" ? "active" : ""}>Women</Link>
                    		</li>
                    		<li className="nav-item">
                    			<Link href="#">About</Link>
                    		</li>
                    		<li className="nav-item">
                    			<Link href="#">Contact</Link>
                    		</li>
                    	</ul>
					}
                </div>
                { screenSize ? null:
					<div className="ms-auto nav-profile">
                		<div className="position-relative">
							<svg onClick={handleWishlists} xmlns="http://www.w3.org/2000/svg" fill="black" className="bi bi-cart3 cart-image" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
							<span id="whish-list" className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
	
  							</span>
						</div>
                		<img className="avatar-image" src="./images/image-avatar.png" alt="avatar"/>
                	</div>
				}
            </div>
        </nav>
		<div className='container-fluid'>
			{	wishList && <Cart totalOrder={totalOrder} handleDeletOrder={handleDeletOrder}/>}
		</div>
    </div>
  )
}
