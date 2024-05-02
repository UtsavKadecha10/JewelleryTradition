import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import menu from './images/menu.png'
import account from './images/account.png';
import wishlist from './images/heart.png'
import cart from './images/cart.png'
import line from './images/Line-Design.svg'
import sample from './images/sa.webp'
import './Layout.css';
import logo from './images/logo.png'
// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function BasicExample() {
    function toggleDisplay(id) {
        var element = document.getElementById("sidebar-menu");
        var nav2 = document.getElementById("move-header");
        if (element.style.display === "none") {
            // element.style.display = "inline-block";
            // nav2.style.display = "block";
            // nav2.style.position = "relative";
        }
        else {
        //   element.style.display = "none";
        } 
    } 
    return(
        <>
            <header>
                <nav className="nav1">
                    <div className="menu-div">
                        <button className='menu-btn' onClick={toggleDisplay} id='move-header'><img id='move-header' src={menu}/></button>
                        <div className='sidebar-menu' id='sidebar-menu'>
                            <ul className='sidebar-jewellery-list'>
                                <li>Jadau Jewellery</li>
                                <li>Silver Jewellery</li>
                                <li>Diamond Jewellery</li>
                                <li>Antiques</li>
                            </ul>
                            <ul className='sidebar-footer-list'>
                                <li>Log In</li>
                                <li>Create Account</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 href="#home" id='move-header' className='title'>JEWELLERY TRADITION</h3>
                    </div>
                    <div id='move-header'>
                        <ul className="iconList">
                            <li className="accountIcon">
                                <a href=""><img src={account}/></a>
                            </li>
                            <li className="wishIcon">
                                <a href=""><img src={wishlist}/></a>
                            </li>
                            <li className="cartIcon">
                                <a href=""><img src={cart}/></a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className='dropdown-outer' id='move-header'>
                    <div className="dropdown">
                        <button className="dropbtn">ALL JEWELLERY</button>
                        <ul className="dropdown-content">
                            <li><a href="#">Jadau</a></li>
                            <li><a href="#">Diamond</a></li>
                            <li><a href="#">Silver</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">GOLD</button>
                        <ul className="dropdown-content">
                            <li><a href="#">Jadau</a></li>
                            <li><a href="#">Diamond</a></li>
                            <li><a href="#">Silver</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">DIAMOND</button>
                        <ul className="dropdown-content">
                            <li><a href="#">Jadau</a></li>
                            <li><a href="#">Diamond</a></li>
                            <li><a href="#">Silver</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">SILVER</button>
                        <ul className="dropdown-content">
                            <li><a href="#">Jadau</a></li>
                            <li><a href="#">Diamond</a></li>
                            <li><a href="#">Silver</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ANTIQUE</button>
                        <ul className="dropdown-content">
                            <li><a href="#">Jadau</a></li>
                            <li><a href="#">Diamond</a></li>
                            <li><a href="#">Silver</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">MORE</button>
                        <ul className="dropdown-content">
                            <li><a href="#">Jadau</a></li>
                            <li><a href="#">Diamond</a></li>
                            <li><a href="#">Silver</a></li>
                        </ul>
                    </div>
                </div>
                <section className="orderButton" id='move-header'>
                        <h2>Stunning Designs curated only for you!</h2>
                        <a href="#"><button>SHOP NOW</button></a>
                </section>
            </header>
            <main>
                <div className='new-for-you section'>
                    <div className="main_head">
                        <h1>New For You!</h1>
                        <h4>Our latest releases, just for you!</h4>
                    </div>
                    <div className="jewellery_card">
                        <ul>
                            <li className="j1 card">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                            <li className="j2 card">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                            <li className="j3 card hide-on-small">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className='shop-by-category section'>
                    <div className="main_head">
                        <h1>Shop By Category</h1>
                        <h4>Browse through your favorite categories. We've got them all!</h4>
                    </div>
                    <div className="jewellery_card">
                        <ul>
                            <li className="j1 card">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                            <li className="j2 card">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                            <li className="j3 card hide-on-small">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr></hr>
                <div className='connect section'>
                    <div className="main_head">
                        <h1>Connect with Us!</h1>
                        <h4>We are always available to guide you at your convenience.</h4>
                    </div>
                    <div className="jewellery_card">
                        <ul>
                            <li className="j1 card">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                            <li className="j2 card">
                                <a href="" className="images">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                            <li className="j3 card hide-on-small">
                                <a href="" className="images ">
                                    <img src={sample}/>
                                    <span>Explore More</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <footer>
                <div>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur fhf fuga fugiat ab quos praesentium optio quasi laudantium.</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <ul className='footer-list'>
                        <li><i className="fa fa-map-marker"></i>Lal Katra, Haldiyon ka Rasta, Johri Bazar, Jaipur</li>
                        <li><i className="fa fa-phone"></i>+91 82390 73110</li>
                        <li><i className="fa fa-envelope"></i><a href="mailto:info@example.com">info@example.com</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default BasicExample;
