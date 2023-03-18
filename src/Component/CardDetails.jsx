import React from "react";
import { Textarea, HStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function CardDetails() {
  const navigate = useNavigate();

  const afterPayment = () => {
    console.log("Alert");
    alert("Payment Successfull");
    navigate("/");
  };
  return (
    <div className="card-detail-page">
      <div className="Payment-page">
        <img
          className="payment-page-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Disney%2B_Hotstar_logo.svg"
          alt="logo"
        />
        <h2 className="payment-about-plan">Super Plan</h2>
        <div className="payment-page-top-text">
          <p> You're paying ₹899 for this transaction.</p>
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
            className="card-input"
            type="text"
            placeholder="Card Holder Name"
          />
          <input
            className="card-input"
            type="text"
            maxlength="16"
            placeholder="Card Number"
          />
          <div className="card-input-cvv">
            <input
              className="card-input"
              maxlength="5"
              type="text"
              placeholder="MM/YY"
            />
            <input
              className="card-input"
              maxlength="3"
              type="text"
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
            <input style={{ fontSize: "15px" }} type="checkbox" />
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
            colorScheme="blue"
            w={"95%"}
            p={"25px"}
            borderRadius="4px"
            marginLeft="20px"
            onClick={() => {
              afterPayment();
            }}
          >
            START MEMBERSHIP
          </Button>
        </div>
        {/* -------------------------------------------------------- */}

        <div className="payment-page-low-text" style={{ marginLeft: "20px" }}>
          <p>
            <ul>
              <li>
                Your card will be securely stored as per RBI guidelines and you
                will be charged ₹899 every year until you cancel. Click pay
                securely to proceed
              </li>
              <li>
                By Clicking Start Membership, you authorise us to charge your
                card ₹899 once a year, until you cancel
              </li>
              <li>
                Got questions? Please email us at hello@hotstar.com. We reply to
                most emails within an hour.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
