import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
function Thankyou() {
    return (
        <>
            <img src="./image/thank.png" className="thank-pic" alt="" />
            <p className='thank-content'>
                Thank you so much for your purchase.To show our love,please enjoy 20% off your next order.
            </p>

            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <MDBContainer className='p-4'>
                    <MDBRow>
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>CONTACT</h5>
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

                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>WE'D LOVE YOUR FEEDBACK</h5>

                            <p>
                                <img className='thank-rating' src="./image/star.png" width={'300px'} alt="" />
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

            </MDBFooter>
        </>
    );
}

export default Thankyou;