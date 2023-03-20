import React from "react";
import { useNavigate } from "react-router-dom";

function Paymentpage() {
  const navigate = useNavigate();
  const planName = JSON.parse(localStorage.getItem("subscription"));

  return (
    <div className="payment-body">
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

        <div onClick={() => navigate("/card")} className="payment-card1">
          <div>Credit card</div>
          <div>
            {" "}
            <img
              src="https://www.vhv.rs/dpng/d/462-4625301_credit-card-icons-png-download-transparent-background-credit.png"
              alt=""
              width="100px"
            />
          </div>
        </div>

        <div onClick={() => navigate("/card")} className="payment-card">
          <div>Debit card</div>
          <div>
            {" "}
            <img
              src="https://www.vhv.rs/dpng/d/462-4625301_credit-card-icons-png-download-transparent-background-credit.png"
              alt=""
              width="100px"
            />
          </div>
        </div>
        <div onClick={() => navigate("/card")} className="payment-card">
          <div>Netbanking</div>
          <div>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9vc7jodNbGuQEjWLPQb_jLoi2U3Ss17HzA&usqp=CAU
"
              alt=""
              width="26   px"
            />
          </div>
        </div>

        <div onClick={() => navigate("/card")} className="payment-card">
          <div>Paytm</div>
          <div>
            {" "}
            <img
              src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg
"
              alt=""
              width="80px"
            />
          </div>
        </div>

        <div onClick={() => navigate("/card")} className="payment-card">
          <div>UPI</div>
          <div>
            {" "}
            <img
              src="https://e7.pngegg.com/pngimages/795/596/png-clipart-logo-line-angle-brand-line-angle-triangle.png
"
              alt=""
              width="50px"
            />
          </div>
        </div>

        <div className="payment-page-low-text">
          <p>
            {" "}
            You will be charged ₹899 once a year until you cancel. By
            proceeding, I confirm that I am over 18, and I agree to the Terms of
            use and Privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Paymentpage;
