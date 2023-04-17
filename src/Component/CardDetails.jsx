import React, { useRef, useState } from "react";
import { Textarea, HStack, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { checkLogin, planforsubs } from "../Redux/loginredux/action";
import { useDispatch } from "react-redux";

function CardDetails() {
  const navigate = useNavigate();
  const expireRef = useRef();
  const planName = JSON.parse(localStorage.getItem("subscription"));
  const [expireToggle, setExpiretoggle] = useState(true);
  const dispatch = useDispatch();
  const [inputcheck, setInputcheck] = useState({
    name: "",
    card: "",
    date: "",
    cvvs: "",
    check: false,
  });

  const toastRef = useRef();
  let toast = useToast();

  function close() {
    if (toastRef.current) {
      toast.close(toastRef.current);
    }
  }

  const afterPayment = () => {
    planforsubs().then(() => {
      dispatch(checkLogin);
    });
    setTimeout(() => {
      close();
      navigate("/");
    }, 2000);
  };
  const handelInput = ({ value, name }) => {
    console.log(inputcheck);
    setInputcheck({
      ...inputcheck,
      [name]: value,
    });
  };
  const handleExpiry = (value) => {
    if (value.length == 2) {
      if (expireToggle) {
        expireRef.current.value += "/";
        setExpiretoggle(false);
      } else {
        setExpiretoggle((prev) => {
          return !prev;
        });
      }
    }
  };
  return (
    <div className="card-detail-page">
      <div className="Payment-page">
        <img
          className="payment-page-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg"
          alt="logo"
        />
        <h2 className="payment-about-plan">{planName.plan}</h2>
        <div className="payment-page-top-text">
          <p> You're paying {planName.price} for this transaction.</p>
          <p>
            Get access to all content - Live Sports, Movies, TV. Watch on any 2
            devices at FHD (1080p) resolution.
          </p>
        </div>
        {/* ---------------------------------------------------- */}
        <div>
          {/* <div className="card-input">
            {" "}
            <Textarea placeholder="Card Holder Name" />
          </div>
          <div className="card-input">
            {" "}
            <Textarea placeholder="Card Number" />
          </div>
          <HStack>
            <div className="card-input">
              <Textarea placeholder="MM/YY" />
            </div>
            <div className="card-input">
              <Textarea placeholder="CVV" />
            </div>
          </HStack> */}

          <input
            onChange={({ target: { value, name } }) =>
              handelInput({ value: value, name: name })
            }
            className="card-input"
            type="text"
            maxLength="20"
            name="name"
            placeholder="Card Holder Name"
          />
          <input
            onChange={({ target: { value, name } }) =>
              handelInput({ value: value, name: name })
            }
            className="card-input"
            type="text"
            maxLength="16"
            name="card"
            placeholder="Card Number"
          />
          <div className="card-input-cvv">
            <input
              className="card-input"
              maxLength="5"
              type="text"
              placeholder="MM/YY"
              ref={expireRef}
              name="date"
              onChange={({ target: { value, name } }) => {
                handleExpiry(value);
                handelInput({ value: value, name: name });
              }}
            />
            <input
              onChange={({ target: { value, name } }) =>
                handelInput({ value: value, name: name })
              }
              className="card-input"
              maxLength="3"
              type="text"
              name="cvvs"
              placeholder="CVV"
            />
          </div>
          {/* -------------------------------------------------- */}
          <div
            style={{
              display: "flex",
              padding: "20px",
            }}
          >
            <input
              style={{ fontSize: "15px" }}
              type="checkbox"
              onChange={(event) =>
                setInputcheck({ ...inputcheck, check: event.target.checked })
              }
            />
            <p
              style={{
                fontSize: "10px",
                textAlign: "left",
                marginLeft: "15px",
              }}
            >
              I am over 18, and I agree to the above conditions and the{" "}
              <span style={{ color: "blue" }}>
                Terms of Use and Privacy Policy
              </span>
            </p>
          </div>
          <Button
            isDisabled={
              inputcheck.name.length == 0 ||
              inputcheck.card.length < 16 ||
              inputcheck.date.length < 5 ||
              inputcheck.cvvs.length < 3 ||
              inputcheck.check === false
                ? true
                : false
            }
            colorScheme="blue"
            w={"95%"}
            p={"25px"}
            borderRadius="4px"
            marginLeft="20px"
            onClick={() => {
              afterPayment();
              toastRef.current = toast({
                position: "top",

                title: "Payment Successfull",
                description:
                  "Congatulation ! Now Enjoy More Content On Hotstar ",
                status: "success",
                duration: 1500,
                isClosable: true,
              });
            }}
          >
            START MEMBERSHIP
          </Button>
        </div>
        {/* -------------------------------------------------------- */}

        <div className="payment-page-low-text" style={{ marginLeft: "20px" }}>
          <ul>
            <li>
              Your card will be securely stored as per RBI guidelines and you
              will be charged ₹899 every year until you cancel. Click pay
              securely to proceed
            </li>
            <li>
              By Clicking Start Membership, you authorise us to charge your card
              ₹899 once a year, until you cancel
            </li>
            <li>
              Got questions? Please email us at hello@hotstar.com. We reply to
              most emails within an hour.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
