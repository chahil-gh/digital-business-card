import React from "react";

function Info() {
  return (
    <div className="info">
      <img src="../../images/john.png" alt="info-image" />
      <h2>John Doe</h2>
      <p>Frontend Developer</p>
      <small>johndoe.website</small>
      <br />
      <button type="button" className="email-button">
        <img src="../../images/mail.png" alt="" className="button-img" />
        Email
      </button>
      <button type="button" className="linkedin-button">
        <img src="../../images/linkedin.png" alt="" className="button-img" />
        <a href="https://www.linkedin.com/">LinkedIn</a>
      </button>
    </div>
  );
}

export default Info;
