import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';
import { MDBBtn, MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Rating from '@mui/material/Rating';



function Books() {
  const [regionFilter,setRegion]=useState("");
  const [festivalFilter,setFestival]=useState("");
  useEffect(()=>window.scrollTo(0,0),[])
  return (
    <>
     <div className='home-group-line'>
        <p className='home-line'></p>
        <span className='home-title'>BOOKS</span>
        <p className='home-line'></p>
      </div>

    <div className='row'>
      <div className='col-2'>
        <Sidebar width='100%' >
          <Menu menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: 'black',
                color: 'black',
              },
            },
          }}>
            <SubMenu label="Religion">
              <SubMenu label="Christianity">
                <MenuItem onClick={()=>{setFestival("Easter");setRegion("")}}> Easter </MenuItem>
                <MenuItem onClick={()=>{setFestival("Christmas");setRegion("")}}> Christmas </MenuItem>
              </SubMenu>
              <SubMenu label="Islam">
                <MenuItem onClick={()=>{setFestival("Id ul-Fitr");setRegion("")}}> Id ul-Fitr </MenuItem>
                <MenuItem onClick={()=>{setFestival("Hajj");setRegion("")}}> Hajj </MenuItem>
              </SubMenu>
              <SubMenu label="Hinduism">
                <MenuItem onClick={()=>{setFestival("Bhogi");setRegion("")}}> Bhogi </MenuItem>
                <MenuItem onClick={()=>{setFestival("Pongal");setRegion("")}}> Pongal </MenuItem>
              </SubMenu>
              <SubMenu label="Judaism">
                <MenuItem onClick={()=>{setFestival("Days of Awe");setRegion("")}}> Days of Awe </MenuItem>
                <MenuItem onClick={()=>{setFestival("Jewish New Year");setRegion("")}}> Jewish New Year </MenuItem>
              </SubMenu>
              <SubMenu label="Buddhism">
                <MenuItem onClick={()=>{setFestival("Dharma Day");setRegion("")}}> Dharma Day </MenuItem>
                <MenuItem onClick={()=>{setFestival("Wesak");setRegion("")}}> Wesak </MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label="Region">
              <MenuItem onClick={()=>{setRegion("Americas");setFestival("")}}> Americas </MenuItem>
              <MenuItem onClick={()=>{setRegion("Europe");setFestival("")}}> Europe </MenuItem>
              <MenuItem onClick={()=>{setRegion("Asia");setFestival("")}}> Asia </MenuItem>
              <MenuItem onClick={()=>{setRegion("Africa");setFestival("")}}> Africa </MenuItem>
              <MenuItem onClick={()=>{setRegion("Australia");setFestival("")}}> Australia </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>;
      </div>
      <div className='col-10'>
        
        <div className='row' id='container'>
          <PaginatedItems itemsPerPage={6} festivalFilter={festivalFilter} regionFilter={regionFilter}/>
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
    </>
  );
}

function Items({ currentItems }) {
  const nav = useNavigate();
  return (
    <div className='row'>
      {currentItems &&
        currentItems.map((item) => (
          <div className='col-lg-4 col-4 col-sm-4 text-center' key={item.id}>
            <div>
              <img src={"./image/" + item.picture} alt={item.name} width='60%' height='60%' ></img>
            </div>
            <div style={{fontSize:20,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',maxWidth:'300px',textAlign:'center',alignItems:'center',margin:'auto'}}>{item.name}</div>
            <Rating name="read-only" value={item.rating} precision={0.1} readOnly />&nbsp;<span style={{fontSize:23}}>{item.rating}</span><br />
            <span style={{fontSize:20,fontWeight:'bold'}}>${item.price}</span><br />
            <p className="button">
                <MDBBtn onClick={() => {window.scrollTo(0,0);nav(`/books/${item.id}`)}} rounded className='mx-2' color='primary'>
                    Details
                </MDBBtn>
            </p>
          </div>
        ))}
    </div>
  );
}
function PaginatedItems({ itemsPerPage,regionFilter,festivalFilter }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("https://653f52069e8bd3be29e042a9.mockapi.io/books")
      .then((data) => data.json())
      .then((books) => setbooks(books));
  }, []);
  
  const fesData=books.filter((el) => {
    
    if (festivalFilter==='') {
      return el;
    }
    
    else {
      return el.festival.includes(festivalFilter);
    }
  })
  const regData=fesData.filter((el) => {
    
    if (regionFilter==='') {
      return el;
    }
    
    else {
      return el.region.includes(regionFilter);
    }
  })
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = regData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(regData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % regData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination justify-content-center"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />

    </>
  );
}
export default Books;