import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import $ from 'jquery';


function CountriesDetail() {

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

    const [countries, setcountries] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://653f52029e8bd3be29e04247.mockapi.io/countries/${id}`)
            .then((data) => data.json())
            .then((countries) => setcountries(countries))
    }, [id]);


    return (
        <>

            <hr />
            <div className='div-title'>
                <p className='line'></p>
                <span className='countries-title'>{countries.name}</span>
                <p className='line'></p>
            </div>
            <MDBListGroup className='countriesdetail-list shadow-4' >
                <MDBListGroupItem><a href={"#" + countries.country}>{countries.country}</a> </MDBListGroupItem>
                <MDBListGroupItem><a href={"#" + countries.country2}>{countries.country2}</a></MDBListGroupItem>
                <MDBListGroupItem> <a href={"#" + countries.country3}>{countries.country3}</a> </MDBListGroupItem>
            </MDBListGroup>

            <div style={{ fontFamily:'serif',fontSize:'20px',textAlign:'justify' }} >
                <div style={{ margin: '20px auto 20px auto' }}>
                    <h1 className="country" id={countries.country}>{countries.country}</h1>
                    <div className="countries-btn-doc">
                        <p className="festival">1.{countries.festival1}</p>
                        <p>
                            <MDBBtn outline color="success" rounded>
                                <a style={{ color: 'green' }} href={"/" + countries.festival1 + ".docx"} download={countries.festival1} target="_blank">
                                    <MDBIcon fas icon="cloud-download-alt" />
                                    Download file docx
                                </a>
                            </MDBBtn>
                        </p>
                    </div>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.date}</p>

                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.location}</p>
                    <img src={"."+countries.pic3} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />

                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.meaning}</p>
                    <img src={"."+countries.img1} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.content1}</p>

                    <div className="countries-btn-doc">
                        <p className="festival">2.{countries.festival2}</p>
                        <p>
                            <MDBBtn outline color="success" rounded>
                                <a style={{ color: 'green' }} href={"/" + countries.festival2 + ".docx"} download={countries.festival2} target="_blank">
                                    <MDBIcon fas icon="cloud-download-alt" />
                                    Download file docx
                                </a>
                            </MDBBtn>
                        </p>
                    </div>

                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.date2}</p>

                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.location2}</p>

                    <img src={"."+countries.pic4} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.meaning2}</p>
                    <img src={"."+countries.img2} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />

                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.content2}</p>
                </div>

                <div style={{ margin: '20px auto 20px auto' }}>
                    <h1 className="country" id={countries.country2}>{countries.country2}</h1>
                    <div className="countries-btn-doc">
                        <p className="festival">1.{countries.festival3}</p>
                        <p>
                            <MDBBtn outline color="success" rounded>
                                <a style={{ color: 'green' }} href={"/" + countries.festival3 + ".docx"} download={countries.festival3} target="_blank">
                                    <MDBIcon fas icon="cloud-download-alt" />
                                    Download file docx
                                </a>
                            </MDBBtn>
                        </p>
                    </div>
                <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.date3}</p>
                <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.location3}</p>
                <img src={"."+countries.pic5} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.meaning3}</p>
                    <img src={"."+countries.img3} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />

                <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.content3}</p>
                <div className="countries-btn-doc">
                        <p className="festival">2.{countries.festival4}</p>
                        <p>
                            <MDBBtn outline color="success" rounded>
                                <a style={{ color: 'green' }} href={"/" + countries.festival4 + ".docx"} download={countries.festival4} target="_blank">
                                    <MDBIcon fas icon="cloud-download-alt" />
                                    Download file docx
                                </a>
                            </MDBBtn>
                        </p>
                    </div>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.date4}</p>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.location4}</p>
                    <img src={"."+countries.pic6} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.meaning4}</p>
                    <img src={"."+countries.img4} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />

                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.content4}</p>
                </div>

                <div style={{ margin: '20px auto 20px auto' }}>
                    <h1 className="country" id={countries.country3}>{countries.country3}</h1>
                    <div className="countries-btn-doc">
                        <p className="festival">1.{countries.festival5}</p>
                        <p>
                            <MDBBtn outline color="success" rounded>
                                <a style={{ color: 'green' }} href={"/" + countries.festival5 + ".docx"} download={countries.festival5} target="_blank">
                                    <MDBIcon fas icon="cloud-download-alt" />
                                    Download file docx
                                </a>
                            </MDBBtn>
                        </p>
                    </div>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.date5}</p>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.location5}</p>
                    <img src={"."+countries.pic7} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.meaning5}</p>
                    <img src={"."+countries.img5} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />

                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.content5}</p>
                    <div className="countries-btn-doc">
                        <p className="festival">2.{countries.festival6}</p>
                        <p>
                            <MDBBtn outline color="success" rounded>
                                <a style={{ color: 'green' }} href={"/" + countries.festival6 + ".docx"} download={countries.festival6} target="_blank">
                                    <MDBIcon fas icon="cloud-download-alt" />
                                    Download file docx
                                </a>
                            </MDBBtn>
                        </p>
                    </div>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.date6}</p>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.location6}</p>
                    <img src={"."+countries.pic8} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.meaning6}</p>
                    <img src={"."+countries.img6} width={'50%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}>{countries.content6}</p>
                    <p style={{ width: '80%', margin: '20px auto 20px auto' }}></p>
                </div>
            </div >

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
            <div>
                <a href="# "><img src="./image/return-top.png" id='back-top-button' className='back-top-button-hide' alt="Back-to-top" /></a>
            </div>
        </>
    );
}
export default CountriesDetail;