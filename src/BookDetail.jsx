import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { MDBBtn, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBadge} from 'mdb-react-ui-kit';
import Carousel from "react-multi-carousel";
import alertify from 'alertifyjs';

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
        items: 1
    }
};
function BookDetails() {
    const nav = useNavigate();
    const { id } = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        fetch("https://653f52049e8bd3be29e04275.mockapi.io/Order")
            .then((data) => data.json())
            .then((orders) => setCartItems(orders));
    }, []);

    const [book, setBook] = useState({});
    useEffect(() => {
        fetch(`https://653f52069e8bd3be29e042a9.mockapi.io/books/${id}`)
            .then((data) => data.json())
            .then((book) => setBook(book))
    }, [id]);
    const [books, setbooks] = useState([]);
    useEffect(() => {
        fetch("https://653f52069e8bd3be29e042a9.mockapi.io/books")
            .then((data) => data.json())
            .then((books) => setbooks(books));
    }, []);
    const relatedFestivalBook = books.filter((el) => el.festival.includes(book.festival));
    const relatedRegionBook = books.filter((el) => el.region.includes(book.region));

    const AddToCart = async (product) => {
        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingItem = cartItems.find(item => item.name===product.name);
        if (existingItem) {
            // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1 và gửi yêu cầu PUT để cập nhật
            existingItem.quantity += amount;

            try {
                const response = await fetch(`https://653f52049e8bd3be29e04275.mockapi.io/Order/${existingItem.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(existingItem),
                });

                if (!response.ok) {
                    console.error('Failed to update product quantity in cart');
                }
                else{
                    alertify.success("Add to cart successfully!");
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng và gửi yêu cầu POST
            const productToAdd = {
                id: product.id,
                quantity: amount,
                name: product.name,
                pic: product.picture,
                price: product.price,
            };

            setCartItems(prevCart => [...prevCart, productToAdd]);

            try {
                const response = await fetch('https://653f52049e8bd3be29e04275.mockapi.io/Order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(productToAdd),
                }).then(() => alertify.success("Add success"));

                if (!response.ok) {
                    console.error('Failed to add product to cart');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };
    return (
        <div>
            <div className="book-container">
                <div className="row">
                    <div className="col-4 text-center">
                        <img className="book-profile-pic" src={"./image/" + book.picture} alt={book.name} width='80%' style={{marginTop:40,border:'1px solid'}}/>
                    </div>
                    <div className="col-8 text-justified" style={{padding:40}}>
                        <h2 className="book-name">
                            <span className="user-first-name">{book.name}</span> <br></br>
                        </h2>
                        <span style={{fontWeight:'bold',fontSize:20}}>Author:</span> {book.author} <br />
                        <span style={{fontWeight:'bold',fontSize:20}}>Region:</span> {book.region}<br />
                        <span style={{fontWeight:'bold',fontSize:20}}>Festival:</span> {book.festival}<br />
                        <span style={{fontWeight:'bold',fontSize:20}}>Religion:</span> {book.religion}<br />
                        <span style={{fontWeight:'bold',fontSize:20}}>Price:</span><span style={{fontWeight:'bold',color:'red',fontStyle:'italic'}}> ${book.price}</span> <br />
                        <span style={{fontWeight:'bold',fontSize:20}}>Description:</span> {book.description} <br />
                        <span style={{fontWeight:'bold',fontSize:20}}>Amount:</span> <MDBBtn onClick={() => 
                            {if(amount>1) setAmount(amount-1);}} 
                                size='sm' rounded color='link'>
                                                <MDBIcon fas icon="minus" />
                                            </MDBBtn>
                                            <MDBBadge pill light lg>
                                                {amount}
                                            </MDBBadge>
                                            <MDBBtn onClick={() => setAmount(amount+1)} size='sm' rounded color='link'>
                                                <MDBIcon fas icon="plus" />
                                            </MDBBtn>
                                            <br/><br/>
                        <MDBBtn outline rounded className='mx-2' color='info' onClick={()=>{AddToCart(book)}}>
                            Add to cart
                        </MDBBtn>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h3 className="text-center">Other books of {book.festival} festival</h3>
                <div className='home-book-list'>
                    <Carousel responsive={responsive}>
                        {relatedFestivalBook.map(b => {
                            const pic = './image/' + b.picture
                            return (
                                <div className='home-card shadow-4'>
                                    <img src={pic} width={'100%'} alt={b.name} />
                                    <p className='book-title'>{b.name}</p>
                                    <p className="rating">
                                        <Rating name="half-rating-read" precision={0.1} defaultValue={b.rating} readOnly />
                                    </p>
                                    <h3 className='price'>${b.price}</h3>
                                    <p className="button">
                                        <MDBBtn onClick={() => {setAmount(1);window.scrollTo(0, 0);nav(`/books/${b.id}`)}} rounded className='mx-2' color='primary'>
                                            Details
                                        </MDBBtn>
                                    </p>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
            <br /><br /><hr />
            <div>
                <h3 className="text-center">Other books from {book.region}</h3>
                <div className='home-book-list'>
                    <Carousel responsive={responsive}>
                        {relatedRegionBook.map(b => {
                            const pic = './image/' + b.picture
                            return (
                                <div className='home-card shadow-4'>
                                    <img src={pic} width={'100%'} alt={b.name} />
                                    <p className='book-title'>{b.name}</p>
                                    <p className="rating">
                                        <Rating name="half-rating-read" precision={0.1} defaultValue={b.rating} readOnly />
                                    </p>
                                    <h3 className='price'>${b.price}</h3>
                                    <p className="button">
                                        <MDBBtn onClick={() => {setAmount(1);window.scrollTo(0, 0);nav(`/books/${b.id}`)}} rounded className='mx-2' color='primary'>
                                            Details
                                        </MDBBtn>
                                    </p>
                                </div>
                            )
                        })}
                    </Carousel>
                </div>
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
                                    <b>Welcome to Festivals !</b> <br />
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
        </div>
    );
}

export default BookDetails;