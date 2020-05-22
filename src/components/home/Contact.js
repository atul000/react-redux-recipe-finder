import React from "react";

const Contact = () => {
  return (
    <div style={{ marginTop: "3%", marginLeft: "3%" }}>
      <br />
      <h2>For more informaton contact me on following : </h2>
      <a
        href="https://www.linkedin.com/in/atul-beniwal-32a546151/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin fa-3x" />
      </a>
      {"  "}
      <a
        href="https://github.com/atul000"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-github fa-3x" />
      </a>
    </div>
  );
};

export default Contact;
