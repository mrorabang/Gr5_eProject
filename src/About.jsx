import $ from 'jquery';
import { useEffect } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function About() {
    useEffect(()=>window.scrollTo(0,0),[])
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
    return (
        <>
            <div className='about-group-line'>
                <p className='about-line'></p>
                <span className='about-title'>ABOUT</span>
                <p className='about-line'></p>
            </div>

            <div className="about-table-image">
                <img src="./image/table-1.jpg" style={{margin:'auto',display:'block',borderRadius:'10px'}} className='img-fluid hover-shadow' width={'85%'} alt="" />
            <p>
                <img src="./image/table-2.jpg" style={{padding:'0.5%',borderRadius:'20px'}}  className='img-fluid hover-shadow' width={'43%'} alt="" />
        
                <img src="./image/table-3.jpg" style={{padding:'0.5%',borderRadius:'20px'}}  className='img-fluid hover-shadow' width={'43%'} alt="" />
           </p>
            </div>


            <img className="about-powder-1 " src="./image/powder.png" alt="" />
            <div className="about-group-1">
                <img className="about-pic-1"  src="./image/pic1.jpg" alt="" />
                <p className="about-text-1"><h2 style={{ color: '#5586da' }}>Welcome to Festivals</h2>We take pride in being a leading event organizing team, specializing in creating unique and memorable festival experiences. With a team of creative experts and passion, we are bringing a diverse, rich, and energetic array of events to the community.
                    <br /> <br /> We are not just event organizers; we are enthusiasts of art and culture. We understand the significance of festivals, not only for entertainment but also for connecting and crafting amazing experiences for the community.</p>
            </div>
            <br /><br />
            <div className="about-group-2">
                <p className="about-text-2"><h2 style={{ color: '#5586da' }}>Event</h2>Our mission is to highlight unique cultural values, and we organize events encompassing all forms of art – from music, stage art, to contemporary and traditional arts. We are dedicated to providing unique experiences and creating unforgettable memories for our audience. <br /> <br />
                    With ceaseless creativity, we commit to bringing forth new and unique ideas in each of our events. Join us, explore, and share your passion in the joyous atmosphere of our festivals at our venue!</p>
                <img className="about-pic-1" src="./image/pic2.jpg" alt="" />
            </div>
            <br /> <br />
            <div className="about-group-3">
                <img className="about-pic-1" src="./image/pic3.jpg" alt="" />
                <p className="about-text-1"><h2 style={{ color: '#5586da' }}>Thank you</h2>Thank you for joining us, and let us make these moments special for you. Let's together enjoy and commemorate every moment at <b>Festivals</b>– where hearts meet and connect!</p>
            </div>

            <div>
                <a href="#"><img src="./image/return-top.png" id='back-top-button' className='back-top-button-hide' alt="Back-to-top" /></a>
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

                <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright by GROUP 5
                </div>
            </MDBFooter>
        </>
    );
}

export default About;