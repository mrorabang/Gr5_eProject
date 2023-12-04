import { CCarousel, CImage, CCarouselCaption, CCarouselItem } from '@coreui/react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBBtn, MDBSpinner, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Collapse } from 'react-bootstrap';
import $ from 'jquery';
import Carousel from "react-multi-carousel";
import Rating from '@mui/material/Rating';
import "react-multi-carousel/lib/styles.css";
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

function Home() {
    //scroll to top when click
    useEffect(() => window.scrollTo(0, 0), [])
    //mockapi books
    const [books, setbooks] = useState([]);
    const showBooks = () => {
        fetch("https://653f52069e8bd3be29e042a9.mockapi.io/books")
            .then((data) => data.json())
            .then((books) => setbooks(books));
    }
    useEffect(() => showBooks(), []);

    //mockapi slides carousels
    const [slides, setslides] = useState([]);
    const showSlide = () => {
        fetch("https://653f52049e8bd3be29e04275.mockapi.io/carosel")
            .then((data) => data.json())
            .then((slide) => setslides(slide));
    }
    useEffect(() => showSlide(), []);

    //button show/hide
    const [open, setOpen] = useState(false);

    const toggleVisibility = () => {
        setOpen(!open);
    }

    // handle back top button 
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1000) {
                $('#back-top-button').addClass('back-top-button-show');
                $('#back-top-button').removeClass('back-top-button-hide')
            } else {
                $('#back-top-button').removeClass('back-top-button-show');
                $('#back-top-button').addClass('back-top-button-hide');
            }
        })
    })

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    //handle books tin Home page
    const [cart, setCart] = useState([]);

    const AddToCart = async (product) => {
        try {
            const response = await fetch('https://653f52049e8bd3be29e04275.mockapi.io/Order');
            if (!response.ok) {
                console.error('Failed to fetch product data from the server');
                return;
            }
            const productsOnApi = await response.json();
            const productExists = productsOnApi.some(item => item.name === product.name);

            if (productExists) {
                alertify.warning("Products already in the cart. Please check!");
            } else {
                const productToAdd = {
                    id: product.id,
                    quantity: 1,
                    name: product.name,
                    pic: product.picture,
                    price: product.price,
                };

                setCart(prevCart => [...prevCart, productToAdd]);

                try {
                    const postResponse = await fetch('https://653f52049e8bd3be29e04275.mockapi.io/Order', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(productToAdd),
                    });

                    if (!postResponse.ok) {
                        console.error('Failed to add product to cart');
                    } else {
                        alertify.success("Add to cart successfully!");
                    }
                } catch (error) {
                    console.error('Error:', error);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    // handle navigate next page
    const nav = useNavigate();

    return (
        <>
            {
                slides.length === 0 ? (
                    <div className="home-loading">
                        <p><MDBSpinner role='status' color='secondary'></MDBSpinner></p>
                        <p>Loading...</p>
                    </div>
                ) : (
                    <>
                        <CCarousel className='home-slide' controls indicators transition='crossfade'>
                            {
                                slides.map(s => {
                                    return (
                                        <CCarouselItem>
                                            <CImage className="d-block w-100" src={"."+s.pic} alt={s.title} />
                                            <CCarouselCaption className="d-none d-md-block">
                                                <h3>{s.title}</h3>
                                                <p style={{ fontSize: '20px' }}>{s.caption}</p>
                                            </CCarouselCaption>
                                        </CCarouselItem>
                                    )
                                })
                            }
                        </CCarousel>
                    </>
                )}

            <br />
            <div className='home-group-line'>
                <p className='home-line'></p>
                <span className='home-title'>FESTIVALS</span>
                <p className='home-line'></p>
            </div>
            <p className='home-content-festival'>

                Festivals, as integral components of societal life, transcend beyond mere realms of joy and entertainment. They unfold as vibrant canvases illustrating the richness, creativity, and diversity inherent in cultures across the globe. From traditional festivals steeped in sacred rituals that have woven themselves into the tapestry of history, to modern events pulsating with the spirit of entertainment, festivals serve not only as moments of relaxation but also as occasions for individuals to express their love for their homeland and pride in their cultural heritage.</p>
            <img src="./image/Tet1.jpg" className='home-pic-festival hover-shadow' alt="" />
            <p className="home-note-pic">
                Tet holiday in Vietnam
            </p>
            <p className="home-content-festival">
                Every nation and region contributes to the creation of unique and unparalleled festivals. Whether it be the Gion Matsuri festival in Japan, where participants don traditional attire and parade colossal floats through the streets, or Oktoberfest in Germany, with its lively atmosphere infused with beer and music, each festival offers an insightful glimpse into the soul and culture of the community it represents.
            </p>

            <Collapse in={open}>
                <div id="example-collapse-text">
                    <img src="./image/gion-matsuri.jpg" alt="" className="home-pic-festival hover-shadow" />
                    <p className="home-note-pic">
                        Street decorations during the Gion Matsuri festival
                    </p>
                    <p className="home-content-festival">
                        Beyond the realm of entertainment, festivals become a manifestation of the spirit of unity and interaction among community members. Activities such as sharing empathy, participating in traditional games, or even preparing and savoring local delicacies create an atmosphere of camaraderie, contributing to the strengthening of social bonds and the formation of unforgettable memories. Festivals are not merely occasions to revel in joy but also opportunities for people to come together, fostering the building and sustainable development of communities.
                    </p>
                    <img src="./image/Christmas3.jpg" alt="" className="home-pic-festival hover-shadow" />
                    <p className="home-note-pic">
                        Image of a familiar Christmas ball
                    </p>
                    <p className="home-content-festival">
                        Festivals worldwide serve not only as joyful occasions but also as crucial platforms to showcase cultural diversity and foster interactions among communities. These events are not just opportunities for celebration and enjoyment; they also provide a platform for conveying spiritual values, pride, and love. Festivals create an atmosphere of excitement and camaraderie, connecting people through shared experiences. Through festivals, we not only find joy in preserving cultural heritage but also build resilient bridges between communities globally, contributing to understanding and respecting cultural diversity on our planet.
                    </p>
                </div>
            </Collapse>

            <div className='home-button-more'>
                <MDBBtn
                    onClick={toggleVisibility}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    outline
                    rounded
                    className='mx-2'
                    color='secondary'
                >
                    {open ? (
                    <>
                        Hide{' '}<MDBIcon fas icon="angle-up" />
                    </>
                ) : (
                    <>
                        more{' '}<MDBIcon fas icon="angle-down" />
                    </>
                )}
                </MDBBtn>
            </div>
            <hr />

            <div className='home-group-line'>
                <p className='home-line'></p>
                <span className='home-title'>BOOKS</span>
                <p className='home-line'></p>
            </div>

            <div className="home-group-card">
                <Carousel responsive={responsive}>
                    {books.map(b => {
                        const pic = '/image/' + b.picture
                        return (
                            <div className='home-card shadow-4'>
                                <img src={"."+pic} width={'100%'} alt={b.name} />
                                <p className='book-title'>{b.name}</p>
                                <p className="rating">
                                    <Rating name="half-rating-read" precision={0.1} defaultValue={b.rating} readOnly />
                                </p>
                                <h3 className='price'>${b.price}</h3>
                                <p className="button">
                                    <MDBBtn onClick={() => { window.scrollTo(0, 0); nav(`/books/${b.id}`) }} rounded className='mx-1' color='primary'>
                                        Details
                                    </MDBBtn>
                                    <MDBBtn onClick={() => { AddToCart(b) }} outline rounded className='mx-1' color='success'>
                                        Add to cart
                                    </MDBBtn>
                                </p>
                            </div>
                        )
                    })}
                </Carousel>
            </div>

            <div className="home-group-button-seeall">
                <MDBBtn onClick={() => { window.scrollTo(0, 0); nav(`/books`) }} outline rounded className='mx-2' color='secondary'>
                    See all
                </MDBBtn>
            </div>

            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                <section className='d-flex justify-content-center justify-content-lg-between border-bottom'>
                </section>
                <section className=''>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon='gem' className="me-3" />
                                    FESTIVALS
                                </h6>
                                <p>
                                    <b>Welcome to Festivals !</b>
                                    Here, we'd like to share with you our passion and dedication to the festival theme. Born out of a love for culture and diversity, we not only organize festival events to commemorate and honor traditional values but also to connect communities and provide unique experiences for everyone.
                                </p>
                            </MDBCol>


                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    590 CMT8, Ward 11,District 3,Ho Chi Minh City
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    info.festival@company.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>MAP</h6>
                                <p>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3241408037143!2d106.66363250998626!3d10.786467189318513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecb37e59e33%3A0xfe7c4d9f94f9e079!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700204272197!5m2!1svi!2s" width="300" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright by GROUP 5
                </div>
            </MDBFooter>

            <div>
                <a href="#"><img src="./image/return-top.png" id='back-top-button' className='back-top-button-hide' alt="Back-to-top" /></a>
            </div>
        </>
    );
}

export default Home;