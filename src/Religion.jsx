import $ from 'jquery';
import { MDBListGroup, MDBListGroupItem, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Religion() {

    useEffect(() => window.scrollTo(0, 0), [])

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

    const [religions, setreligions] = useState([]);
    const showReligions = () => {
        fetch(" https://653f52029e8bd3be29e04252.mockapi.io/religion_1")
            .then((data) => data.json())
            .then((religions) => setreligions(religions));
    }
    useEffect(() => showReligions(), []);
    const nav = useNavigate();

    return (
        <div>
            <div className='home-group-line'>
                <p className='home-line'></p>
                <span className='home-title'>RELIGION</span>
                <p className='home-line'></p>
            </div>
            <img src="./image/religious_map.jpg" alt="" className="religion-map" />
            <p className="religion-img1">Map of major religions in the world</p>
            <br />

            <p className="religion-info">Religious composition of countries - Religion remains an integral part of many people's lives and 84% of the world's population identifies as religious. There are currently 7 main religious groups in the world including:</p>

            <div className='row' style={{ marginTop: '-50px' }}>
                <div className='col-8'>
                    <MDBListGroup light className='religion-list' numbered style={{ maxWidth: '50%' }}>
                        <MDBListGroupItem><a href="#Christianity">Christianity - 31%</a> </MDBListGroupItem>
                        <MDBListGroupItem><a href="#Islam">Islam - 25% </a></MDBListGroupItem>
                        <MDBListGroupItem><a href="#Hinduism">Hinduism - 15.2%</a> </MDBListGroupItem>
                        <MDBListGroupItem><a href="#Judaism">Judaism - 0.2%</a></MDBListGroupItem>
                        <MDBListGroupItem><a href="#Buddhism">Buddhism - 6.6%</a></MDBListGroupItem>
                        <MDBListGroupItem><a href='#Folk beliefs'>Folk beliefs - 6.4%</a></MDBListGroupItem>
                        <MDBListGroupItem><span style={{ color: 'reda' }}>No religion - 15.6%</span></MDBListGroupItem>
                    </MDBListGroup>
                </div>
                <div className="col-4">
                    <img src="./image/religious_logos.jpg" alt="" className="religion-logo" />
                </div>
            </div>

            <hr />
            {
                religions.map(r => {
                    return (
                        <>
                            <div className="religion-group-1">
                                <img className="religion-pic" src={"."+r.pic1} alt="" />
                                <p className="religion-text">
                                    <h1 id={r.name}><a style={{ color: 'blue', cursor: 'pointer' }} onClick={() => { window.scrollTo(0, 0); nav(`/religion/${r.id}`) }}>
                                        {r.name}
                                    </a></h1>
                                    {r.intro}
                                </p>
                            </div>
                        </>
                    )
                })
            }
            <br />
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

                <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2023 Copyright by GROUP 5
                </div>
            </MDBFooter>
        </div>



    );
}

export default Religion;