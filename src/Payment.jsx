import Form from 'react-bootstrap/Form';
import { MDBBtn, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBadge, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const nav = useNavigate();
    const removeFromCart = async (productId) => {
        try {
            const response = await fetch(`https://653f52049e8bd3be29e04275.mockapi.io/Order/${productId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCartItems(prevCart => prevCart.filter(item => item.id !== productId));
                Swal.fire({
                    title: "Deleted!",
                    icon: "success",
                });
            } else {
                console.error('Failed to remove product from cart');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const updateQuantity = async (productId, newQuantity) => {
        try {
            const response = await fetch(`https://653f52049e8bd3be29e04275.mockapi.io/Order/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ quantity: newQuantity }),
            });

            if (response.ok) {
                setCartItems((prevCart) =>
                    prevCart.map((item) =>
                        item.id === productId ? { ...item, quantity: newQuantity } : item
                    )
                );
            } else {
                console.error('Không thể cập nhật số lượng sản phẩm');
            }
        } catch (error) {
            console.error('Lỗi:', error);
        }
    };

    const incrementQuantity = async (productId) => {
        const product = cartItems.find((item) => item.id === productId);
        const newQuantity = product ? product.quantity + 1 : 1;
        await updateQuantity(productId, newQuantity);
    };

    const decrementQuantity = async (productId) => {
        const product = cartItems.find((item) => item.id === productId);

        if (product) {
            const newQuantity = Math.max(product.quantity - 1, 0);

            if (newQuantity === 0) {
                // Nếu số lượng giảm xuống 1, xóa sản phẩm khỏi giỏ hàng
                await removeProductOrPrompt(productId);
            } else {
                // Ngược lại, cập nhật số lượng bình thường
                await updateQuantity(productId, newQuantity);
            }
        }
    };

    const removeProductOrPrompt = async (productId) => {
        const confirmDelete = await Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmDelete.isConfirmed) {
            await removeFromCart(productId);
        }
    };
    const Swal = require('sweetalert2');

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch("https://653f52049e8bd3be29e04275.mockapi.io/Order")
            .then((data) => data.json())
            .then((orders) => setCartItems(orders));
    }, []);

    let shipFee = 2.5;
    let subtotal = 0;

    cartItems.forEach(o => {
        subtotal += Math.ceil(o.price * o.quantity);
    });

    let total = Math.ceil(subtotal) + shipFee;

    const [paymentMethod, setPaymentMethod] = useState('');

    const handlePaymentChange = useCallback((e) => {
        setPaymentMethod(e.target.value);
    }, []);

    const deleteAllRecords = async () => {
        try {
          const response = await fetch('https://653f52049e8bd3be29e04275.mockapi.io/Order');
          const data = await response.json();
      
          // Lặp qua mỗi bản ghi và gửi yêu cầu DELETE
          await Promise.all(data.map(async record => {
            const deleteResponse = await fetch(`https://653f52049e8bd3be29e04275.mockapi.io/Order/${record.id}`, {
              method: 'DELETE',
            });
      
            if (!deleteResponse.ok) {
              throw new Error('Failed to delete record with id: ' + record.id);
            }
          }));
      
          // Nếu xóa thành công tất cả, chuyển hướng đến "/thankyou"
          nav(`/thankyou`);
        } catch (error) {
          console.error('Error deleting records:', error);
          // Xử lý lỗi nếu có
        }
      };
      
      

    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            Swal.fire({
                title: "Order success",
                icon: "success",
                showConfirmButton: false,
                timer: 2000
            });
            event.preventDefault();
            setTimeout(() => {
                deleteAllRecords();
            }, 2100);
        }
    };

    return (
        <>
            {cartItems.length != 0 ? (
                <>
                    <div className="payment-group">
                        <img className="payment-card" src="./image/card.png" alt="" />
                        <h2 style={{ textAlign: 'center' }}>PAYMENT</h2>
                        <p className="payment-para">Please check your information and order before placing an order</p>
                    </div>

                    <div className="payment-row">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="payment-column">
                                <p className='payment-col-left'>CUSTOMERS INFORMATIONS</p>
                                <div className='payment-customer-information'>

                                    <Form.Group controlId='validationCustom01'>
                                        <Form.Label htmlFor="inputPassword5">Full name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">Please fills your name</Form.Control.Feedback>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='validationCustom01'>
                                        <Form.Label htmlFor="inputPassword5">Phone</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            required
                                        />

                                        <Form.Control.Feedback type="invalid">Please fills your number phone</Form.Control.Feedback>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='validationCustom01'>
                                        <Form.Label htmlFor="inputPassword5">Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            required
                                        />

                                        <Form.Control.Feedback type="invalid">Please fills your address</Form.Control.Feedback>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='validationCustom01'>
                                        <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            required
                                        />

                                        <Form.Control.Feedback type="invalid">Please fills your email</Form.Control.Feedback>
                                    </Form.Group>
                                    <br />
                                    <Form.Group controlId='validationCustom01'>
                                        <Form.Label htmlFor="inputPassword5">Zip code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            required
                                        />

                                        <Form.Control.Feedback type="invalid">Please fills your zip code</Form.Control.Feedback>
                                    </Form.Group>
                                    <br />
                                </div >
                                <p className='payment-col-left'>PAYMENT METHOD</p>

                                <div className='payment-payment-method'>
                                    <Form.Check
                                        type="radio"
                                        name="paymentMethod"
                                        id="pod"
                                        label="Payment on delivery"
                                        value="pod"
                                        onChange={handlePaymentChange}
                                        required
                                    />
                                    <br />
                                    <Form.Check
                                        type="radio"
                                        name="paymentMethod"
                                        id="visa"
                                        label={
                                            <>
                                                <img
                                                    src="./image/payment-method.png"
                                                    className="visa-mastercard"
                                                    alt=""
                                                />
                                            </>
                                        }
                                        value="visa"
                                        onChange={handlePaymentChange}
                                    />
                                    <div className='form-visa-1'>
                                        <p>
                                            Card number <br />
                                            <Form.Control
                                                type="text"
                                                style={{ width: '100%' }}
                                                className="payment-input-visa"
                                                required={paymentMethod === 'visa'}
                                            />
                                            <Form.Control.Feedback type="invalid">Please fills card number</Form.Control.Feedback>
                                        </p>
                                        <p>
                                            Expiration date <br />
                                            <Form.Control
                                                type="text"
                                                style={{ width: '70%' }}
                                                className="payment-input-visa"
                                                required={paymentMethod === 'visa'}
                                            />
                                            <Form.Control.Feedback type="invalid">Please fills expiration date</Form.Control.Feedback>
                                        </p>
                                    </div>


                                    <div className="form-visa-2">
                                        <p>
                                            Card holder name <br />
                                            <Form.Control
                                                type="text"
                                                style={{ width: '100%' }}
                                                className="payment-input-visa"
                                                required={paymentMethod === 'visa'}
                                            />
                                            <Form.Control.Feedback type="invalid">Please fills card holder name</Form.Control.Feedback>
                                        </p>

                                        <p>
                                            CVV <br />
                                            <Form.Control
                                                type="text"
                                                style={{ width: '50%' }}
                                                className="payment-input-visa"
                                                required={paymentMethod === 'visa'}
                                            />
                                            <Form.Control.Feedback type="invalid">Please fills CVV</Form.Control.Feedback>
                                        </p>
                                    </div>
                                    <br />
                                    <Form.Check
                                        type="radio"
                                        name="paymentMethod"
                                        id="paypal"
                                        label={
                                            <>
                                                <img
                                                    src="./image/paypal.png"
                                                    className="paypal"
                                                    alt=""
                                                />
                                            </>
                                        }
                                        value="paypal"
                                        onChange={handlePaymentChange}
                                    />
                                    <Form.Check
                                        required
                                        label="Agree to terms and conditions"
                                        feedback="You must agree before ordering."
                                        feedbackType="invalid"
                                    />
                                    <MDBBtn className='me-1 payment-button-order' color='success'>Order</MDBBtn>
                                </div>
                            </div >
                        </Form >

                        <div className="payment-column">
                            <p className='payment-col-right'>ORDER SUMMARY</p>
                            <div className="payment-order-summary shadow-4">
                                {cartItems.map(item => (
                                    <MDBListGroup style={{ maxWidth: '35rem', display: 'block', margin: 'auto' }} light>
                                        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src={"./image/" + item.pic}
                                                    alt=''
                                                    style={{ width: '70px', height: '70px', border: '1px solid' }}
                                                    className='rounded-square'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1 payment-name-book-order' style={{ cursor: 'pointer' }}>{item.name}</p>
                                                    <p className='text-muted mb-0'>${item.price}</p>
                                                </div>
                                            </div>
                                            <MDBBtn onClick={() => decrementQuantity(item.id)} size='sm' rounded color='link'>
                                                <MDBIcon fas icon="minus" />
                                            </MDBBtn>
                                            <MDBBadge pill light>
                                                {item.quantity}
                                            </MDBBadge>
                                            <MDBBtn onClick={() => incrementQuantity(item.id)} size='sm' rounded color='link'>
                                                <MDBIcon fas icon="plus" />
                                            </MDBBtn>
                                        </MDBListGroupItem>
                                    </MDBListGroup>
                                ))}

                                <div className='group-total'>
                                    <span className='sub-and-ship'>Subtotal</span>
                                    <span className='total-price' >
                                        ${subtotal}
                                    </span>
                                </div>
                                <div className='group-total'>
                                    <span className='sub-and-ship'>Shipping</span>
                                    <span className='total-price'>${shipFee}</span>
                                </div>
                                <hr />
                                <div className='group-total'>
                                    <h4>TOTAL</h4>
                                    <p className='final-price'>${total}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
                        <section className='d-flex justify-content-center justify-content-lg-between border-bottom'>
                        </section>

                        <section className=''>
                            <MDBContainer className='text-center text-md-start mt-5'>
                                <MDBRow className='mt-3'>
                                    <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                        <h6 className='text-uppercase fw-bold mb-4'>
                                            <MDBIcon icon="gem" className="me-3" />
                                            FESTIVALS
                                        </h6>
                                        <p>
                                            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
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
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3241408037143!2d106.66363250998626!3d10.786467189318513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ecb37e59e33%3A0xfe7c4d9f94f9e079!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700204272197!5m2!1svi!2s" width="250" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </p>
                                    </MDBCol>
                                </MDBRow>
                            </MDBContainer>
                        </section>

                        <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                            © 2023 Copyright by GROUP 5
                        </div>
                    </MDBFooter>
                </>
            ) : (
                <div className='payment-empty-card'>
                    <img src="./image/cart.png" className='payment-icon-cart' alt="" />
                    <h3>Your cart is empty</h3>
                    <p>Look like you have not added anything to you cart. Before proceed to payment, you must add some products to your cart.You will find a lot of interesting products on our "BOOKS" page</p>
                    <div>
                        <MDBBtn onClick={() => nav(`/books`)} className='me-1' color='secondary'>
                            RETURN TO BOOKS
                        </MDBBtn></div>
                </div>
            )}
        </>
    );
}
export default Payment;
