import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>No 55/31, Suriya Gardens, Wekada Road, Homagama.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail us</span>{" "}
        <a href="mailto:leadersguideofficial@outlook.com">leadersguideofficial@outlook.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call us</span>{" "}
        <a href="Tel: +94702294951">+94 77 369 8632</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
