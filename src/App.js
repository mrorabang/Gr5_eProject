import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Home from "./Home";
import About from "./About";
import Payment from "./Payment";
import Religion from "./Religion";
import Countries from "./Countries";
import Books from "./Books";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Thankyou from "./Thankyou";
import BookDetails from "./BookDetail";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBBadge,
} from "mdb-react-ui-kit";
import CoutriesDetail from "./CountriesDetail";
import ReligionDetail from "./ReligionDetail";
import NotFound from "./NotFound";

function App() {
  //scroll navbar
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNavbarFixed, setNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setNavbarFixed(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [books, setBooks] = useState([]);
  const showBooks = () => {
    fetch("https://653f52069e8bd3be29e042a9.mockapi.io/books")
      .then((data) => data.json())
      .then((booksData) => {
        const booksWithTypes = booksData.map((book) => ({
          ...book,
          type: "BOOK", 
        }));
        setBooks(booksWithTypes);
      });
  };
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    const fetchCartAmount = async () => {
      try {
        const response = await fetch("https://653f52049e8bd3be29e04275.mockapi.io/Order");
        const order = await response.json();
        setCartAmount(order.length);
      } catch (error) {
        console.error("Error fetching cart amount:", error);
      }
    };
    fetchCartAmount();
    const intervalId = setInterval(fetchCartAmount, 1500);
    return () => clearInterval(intervalId);

  }, []);

  useEffect(() => showBooks(), []);
  const [countries, setcountries] = useState([
    { name: "Asia", to: "/countries/1", type: "COUNTRIES" },
    { name: "Europe", to: "/countries/2", type: "COUNTRIES" },
    { name: "Africa", to: "/countries/3", type: "COUNTRIES" },
    { name: "Americas", to: "/countries/4", type: "COUNTRIES" },
    { name: "Australia", to: "/countries/5", type: "COUNTRIES" },
  ]);

  const [religion, setreligion] = useState([
    { name: "Christianity", to: "/religion/1", type: "RELIGION" },
    { name: "Islam", to: "/religion/2", type: "RELIGION" },
    { name: "Hinduism", to: "/religion/4", type: "RELIGION" },
    { name: "Judaism", to: "/religion/3", type: "RELIGION" },
    { name: "Buddhism", to: "/religion/5", type: "RELIGION" },
    { name: "Folk beliefs", to: "/religion/6", type: "RELIGION" },
  ]);

  //filter search
  const [keyword, setkeyword] = useState("");
  const [filtered, setfiltered] = useState([]);

  const handleSearch = (searchKeyword) => {
    const lowerCaseSearchKeyword = searchKeyword.toLowerCase();

    const filteredBooks = books.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchKeyword)
    );

    const filteredReligion = religion.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchKeyword)
    );

    const filteredCountries = countries.filter((item) =>
      item.name.toLowerCase().includes(lowerCaseSearchKeyword)
    );

    // Gộp kết quả từ cả hai mảng vào mảng filtered
    const combinedResults = [
      ...filteredBooks,
      ...filteredReligion,
      ...filteredCountries,
    ];

    setfiltered(combinedResults);
    setkeyword(searchKeyword);
  };

  //modal
  const [scrollableModal, setScrollableModal] = useState(false);
  const modalRef = useRef(null);

  const toggleOpen = () => setScrollableModal(!scrollableModal);

  const handleCloseModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setScrollableModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, []);

  const nav = useNavigate();

  return (
    <>
      <div className="app-header">
        <img
          className="app-logo "
          onClick={() => nav(`/`)}
          src="./image/logo1.png"
          alt="logo"
        />
        <div className="app-cart-header">
          <MDBBtn
            tag="a"
            color="none"
            style={{ color: "black" }}
            className="m-1"
            onClick={() => nav(`/payment`)}
          >
            <MDBIcon id="sth" fas icon="shopping-cart" size="sm" />
            <MDBBadge pill light lg>
              {" "}
              {cartAmount}{" "}
            </MDBBadge>
          </MDBBtn>
        </div>
        <div className="app-search-header">
          <MDBBtn
            tag="a"
            color="none"
            style={{ color: "black" }}
            className="m-1"
            onClick={toggleOpen}
          >
            <MDBIcon fas icon="search" size="sm" />
          </MDBBtn>
        </div>
      </div>

      <Nav className="app-navbar">
        <Nav.Item>
          <Nav.Link>
            <Link className="app-link-tag" to="/">
              HOME
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="app-link-tag" to="/religion">
              RELIGION
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="app-link-tag" to="/countries">
              COUNTRIES
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="app-link-tag" to="/books">
              BOOKS
            </Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link className="app-link-tag" to="/about">
              ABOUT
            </Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/religion" element={<Religion />} />
        <Route path="/religion/:id" element={<ReligionDetail />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<CoutriesDetail />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Navbar
        id="app-div-sticky"
        bg="light"
        data-bs-theme="light"
        fixed={isNavbarFixed ? "top" : ""}
        className={isNavbarFixed ? "visible" : "hidden"}
      >
        <Container>
          <Navbar.Brand>
            <img
              src="./image/logo1.png"
              style={{ cursor: "pointer" }}
              onClick={() => nav(`/`)}
              width={"150px"}
              alt=""
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link className="app-link-tag" to="/">
                HOME
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="app-link-tag" to="/religion">
                RELIGION
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="app-link-tag" to="/countries">
                COUNTRIES
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="app-link-tag" to="/books">
                BOOKS
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="app-link-tag" to="/about">
                ABOUT
              </Link>
            </Nav.Link>
          </Nav>

          <div className="app-search-sticky">
            <MDBBtn tag="a" color="light" className="m-1" onClick={toggleOpen}>
              <MDBIcon fas icon="search" size="lg" />
            </MDBBtn>
          </div>
          <div className="app-cart-sticky">
            <MDBBtn
              tag="a"
              color="light"
              className="m-1"
              onClick={() => nav(`/payment`)}
            >
              <MDBIcon fas icon="shopping-cart" size="lg" />
              <MDBBadge pill light lg>
                {" "}
                {cartAmount}{" "}
              </MDBBadge>
            </MDBBtn>
          </div>
        </Container>
      </Navbar>

      {/* modal */}
      <MDBModal
        open={scrollableModal}
        setopen={setScrollableModal}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent ref={modalRef}>
            <MDBModalHeader>
              <MDBModalTitle>Search</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleOpen}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Search for..."
                onChange={(e) => handleSearch(e.target.value)}
                style={{ marginBottom: "5px" }}
                id="form1"
                type="text"
              />
              <MDBListGroup style={{ minWidth: "22rem" }} light>
                {filtered.map((f) => (
                  <MDBListGroupItem
                    key={f.id}
                    tag="a"
                    className="row"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.scrollTo(0, 0);

                      // Kiểm tra nếu phần tử là của religion thì chuyển đến đường dẫn khác
                      if (f.type === "RELIGION") {
                        nav(f.to);
                      }
                      if (f.type === "BOOK") {
                        // Nếu không phải là religion, chuyển đến đường dẫn sách
                        nav(`/books/${f.id}`);
                      }
                      if (f.type === "COUNTRIES") {
                        nav(f.to);
                      }
                    }}
                  >
                    {f.picture && (
                      <img
                        src={"./image/" + f.picture}
                        width={"15%"}
                        className="col-3"
                        alt={f.name}
                      />
                    )}
                    <b
                      className={`col-${f.picture ? "9" : "12"}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "500px", // Đặt độ rộng tùy thuộc vào nhu cầu của bạn
                      }}
                    >
                      <span
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {f.name.length > 40
                          ? f.name.substring(0, 40) + "..."
                          : f.name}
                      </span>
                      <span
                        style={{
                          fontWeight: "normal",
                          color: "grey",
                          marginLeft: "10px",
                        }}
                      >
                        ({f.type})
                      </span>
                    </b>
                  </MDBListGroupItem>
                ))}
              </MDBListGroup>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export default App;
