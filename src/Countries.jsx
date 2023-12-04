import $ from 'jquery';
import { MDBListGroup, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBListGroupItem,MDBIcon } from 'mdb-react-ui-kit';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function Countries() {

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

  const [countries, setcountries] = useState([]);
  const showCountries = () => {
    fetch(" https://653f52029e8bd3be29e04247.mockapi.io/countries")
      .then((data) => data.json())
      .then((countries) => setcountries(countries));
  }
  useEffect(() => showCountries(), []);
  const nav = useNavigate();

  return (
    <>
      <div className='home-group-line'>
        <p className='home-line'></p>
        <span className='home-title'>COUNTRIES</span>
        <p className='home-line'></p>
      </div>

      <div style={{ textAlign: 'center' }}>
        <img src="./image/itage.jpg" alt="" className='image-itage' />
      </div>
      <MDBListGroup light className='countries-menu shadow-4'  >
        MENU:
        <MDBListGroupItem><a href="#Asia">ASIA</a> </MDBListGroupItem>
        <MDBListGroupItem><a href="#Europe">EUROPE </a></MDBListGroupItem>
        <MDBListGroupItem><a href="#Africa">AFRICA</a></MDBListGroupItem>
        <MDBListGroupItem><a href="#Americas">AMERICAS</a></MDBListGroupItem>
        <MDBListGroupItem><a href="#Australia">AUSTRALIA</a> </MDBListGroupItem>
      </MDBListGroup>
      <hr />
      {
        countries.map(r => {
          return (
            <>
              <div className="countries-group-1">
                <img className="countries-pic-1" src={"."+r.pic1} alt="" />
                <p className="countries-text-1">
                  <h1 id={r.name}><a style={{ color: 'blue', cursor: 'pointer',textDecoration:' 1px underline' }} onClick={() => nav(`/countries/${r.id}`)}>
                    {r.name}
                  </a></h1>
                  {r.intro1}
                </p>
              </div>
            </>
          )
        })
      }
      <br />
      <div>
        <a href="# "><img src="./image/return-top.png" id='back-top-button' className='back-top-button-hide' alt="Back-to-top" /></a>
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

    </>
  )
}
export default Countries;