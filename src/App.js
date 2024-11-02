import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiStrapi } from "react-icons/si";
import {
  FaRegClock,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaLink,
} from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import opening from "./opening.jpg";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 16,
    minutes: 5,
    seconds: 20,
  });

  useEffect(() => {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 28);
    countdownDate.setHours(countdownDate.getHours() + 16);
    countdownDate.setMinutes(countdownDate.getMinutes() + 5);
    countdownDate.setSeconds(countdownDate.getSeconds() + 20);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <div style={{ border: "7px solid #9467dc" }}>
        <Container fluid className="p-4 rounded text-center text-sm-start">
          <Row className="d-flex justify-content-center align-items-center">
            <Col
              xs="auto"
              className="d-flex justify-content-center flex-row align-items-center"
            >
              <SiStrapi className="bg-primary fs-1 mx-2" />
              <h1
                className="fw-bold text-center text-md-start"
                style={{ color: "#25056b" }}
              >
                Strapi
              </h1>
            </Col>
          </Row>
          <Row className="mt-4 d-flex justify-content-center">
            <Col
              xs={12}
              md="auto"
              className="d-flex flex-column align-items-center text-center"
            >
              <p className="fw-bold text-dark-emphasis">
                WE ARE INVITING YOU FOR
              </p>
              <p className="fs-1 fw-bold">GRAND OPENING</p>
              <p
                className="w-100 w-md-25 fs-5 fw-bold p-2"
                style={{ background: "#9467dc", color: "white" }}
              >
                R S V P
              </p>
            </Col>
          </Row>
          <Row className="mt-3 d-flex justify-content-center">
            <Col xs={12} md={8} className="text-center text-md-start">
              <p className="text-secondary fw-semibold">
                We are thrilled to announce the grand opening of [Your Business
                Name]. Be among the first to experience our [new
                location/service/products]. Enjoy a day filled with exciting
                activities, exclusive offers, and refreshments. We can't wait to
                share this special moment with our community, friends, and
                supporters.
              </p>
            </Col>
          </Row>
          <Row className="mt-3 d-flex justify-content-center text-center">
            <Col xs="auto">
              <span className="px-2 fs-6 fs-md-4 fw-semibold">SEPT</span>
              <span className="separator fs-5 fs-md-2">|</span>
              <span className="px-2 fs-3 fs-md-1 fw-bold">25</span>
              <span className="separator fs-5 fs-md-2">|</span>
              <span className="px-2 fs-6 fs-md-4 fw-semibold">2024</span>
            </Col>
          </Row>
          <Row className="mt-2 d-flex justify-content-center text-center">
            <Col>
              <FaRegClock className="fw-semibold fs-6 mx-1 mx-md-2" />
              <span className="fw-semibold fs-6 mx-1 mx-md-2">10:00 AM</span>
            </Col>
          </Row>
          <Row className="mt-3 text-center">
            <Col className="d-flex justify-content-center">
              <div className="d-flex flex-wrap justify-content-center">
                <div className="mx-2 mx-md-5">
                  <div className="fw-bold fs-4 fs-md-1">{timeLeft.days}</div>
                  <span>DAYS</span>
                </div>
                <div className="mx-2 mx-md-5">
                  <div className="fw-bold fs-4 fs-md-1">{timeLeft.hours}</div>
                  <span>HOURS</span>
                </div>
                <div className="mx-2 mx-md-5">
                  <div className="fw-bold fs-4 fs-md-1">{timeLeft.minutes}</div>
                  <span>MINUTES</span>
                </div>
                <div className="mx-2 mx-md-5">
                  <div className="fw-bold fs-4 fs-md-1">{timeLeft.seconds}</div>
                  <span>SECONDS</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <Col>
              <img alt="open" src={opening} className="img-fluid" />
            </Col>
          </Row>
          <Row className="mt-5 text-center">
            <Col className="d-flex justify-content-center">
              <p
                className="w-100 w-md-25 fs-5 fw-bold p-2"
                style={{ background: "#9467dc", color: "white" }}
              >
                R S V P
              </p>
            </Col>
          </Row>
          <Row className="mt-3 text-center">
            <Col>
              <CiLocationOn
                className="fw-bold"
                style={{ fontWeight: "bold", color: "#051b9c" }}
              />
              <p className="mt-1 fw-semibold">THE QUEENS HALL</p>
              <p className="mt-1 fw-medium">2nd Street, KK Nagar, Madurai-05</p>
              <p className="mt-1">
                <FaLink />{" "}
                <a href="https://maps.app.goo.gl/kDowD32CLQGHkxq1A">
                  View on Google Maps
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="w-100" style={{ background: "#9467dc", height: "40px" }}>
        <div className="mx-3 mx-md-5 d-flex justify-content-between align-items-center">
          <div style={{ color: "white" }}>Terms & conditions | Contact</div>
          <div className="d-flex" style={{ color: "white" }}>
            <FaFacebookF className="mx-1 mx-md-4" />
            <FaYoutube className="mx-1 mx-md-4" />
            <FaTiktok className="mx-1 mx-md-4" />
            <SlSocialLinkedin className="mx-1 mx-md-4" />
            <BsTwitterX className="mx-1 mx-md-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
