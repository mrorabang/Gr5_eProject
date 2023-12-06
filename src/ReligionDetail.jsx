import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import $ from 'jquery';


function ReligionDetail() {
    useEffect(() => window.scrollTo(0, 0), []);

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

    const [religion, setreligion] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://653f52029e8bd3be29e04252.mockapi.io/religion_1/${id}`)
            .then((data) => data.json())
            .then((religion) => setreligion(religion))
    }, [id]);


    return (
        <>
            <div className='div-title'>
                <p className='line'></p>
                <span className='religion-title'>{religion.name}</span>
                <p className='line'></p>
            </div>
            <img className="religion-pic-1" src={"." + religion.pic1} alt="" />
            <p className="religion-text-1">
                {religion.intro}
            </p>
            <div className="religion-content" >
                <div className="rd-namefest">
                    <p>{religion.namefes1}</p>
                    <p>
                        <MDBBtn outline color="success" rounded >
                            <a style={{ color: 'green' }} href={"./" + religion.namefes1 + ".docx"} download={religion.namefes1} target="_blank">
                                <MDBIcon fas icon="cloud-download-alt" />
                                Download file docx
                            </a>
                        </MDBBtn>
                    </p>
                </div>
                <p style={{ width: '80%', margin: '20px auto 20px auto', textAlign: 'justify' }}>{religion.content1}</p>
                <img src={"." + religion.pic2} width={'60%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                <p style={{ width: '80%', margin: '20px auto 20px auto', textAlign: 'justify' }}>{religion.content2}</p>
                <br />
                <img src={"." + religion.pic2a} width={'60%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                <div className="rd-namefest">
                    <p>{religion.namefes2}</p>
                    <p>
                        <MDBBtn outline color="success" rounded>
                            <a style={{ color: 'green' }} href={"./" + religion.namefes2 + ".docx"} download={religion.namefes2} target="_blank">
                                <MDBIcon fas icon="cloud-download-alt" />
                                Download file docx
                            </a>
                        </MDBBtn>
                    </p>
                </div>
                <p style={{ width: '80%', margin: '20px auto 20px auto', textAlign: 'justify' }}>{religion.content3}</p>
                <img src={"." + religion.pic3} width={'60%'} style={{ display: 'block', margin: 'auto' }} alt="" /> <br />
                
                <img src={"." + religion.pic3a} width={'60%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                <div className="rd-namefest">
                    <p>{religion.namefes3}</p>
                    <p>
                        <MDBBtn outline color="success" rounded>
                            <a style={{ color: 'green' }} href={"./" + religion.namefes3 + ".docx"} download={religion.namefes3} target="_blank">
                                <MDBIcon fas icon="cloud-download-alt" />
                                Download file docx
                            </a>
                        </MDBBtn>
                    </p>
                </div>
                <p style={{ width: '80%', margin: '20px auto 20px auto', textAlign: 'justify' }}>{religion.content4}</p>
                <img src={"." + religion.pic4} width={'60%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                <br />
                <p style={{ width: '80%', margin: '20px auto 20px auto', textAlign: 'justify' }}>{religion.content4a}</p>
                <img src={"." + religion.pic4a} width={'60%'} style={{ display: 'block', margin: 'auto' }} alt="" />
                <p style={{ width: '80%', margin: '20px auto 20px auto', textAlign: 'justify' }}>{religion.content4b}</p>
            </div >
            <br />
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

export default ReligionDetail;