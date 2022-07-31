import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Loaders } from "../Loaders/Loaders";

const FormModal = ({ handleShow, handleClose, setShow, show }) => {
  const [formLoader, setFormLoader] = useState(false);
  const hubForm = () => {
    setFormLoader(true);
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    script.src = "https://js.hsforms.net/forms/shell.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      setFormLoader(true);
      if (window.hbspt) {
        setTimeout(() => {
          setFormLoader(false);
        }, 400);
        window.hbspt.forms.create({
          region: "na1",
          portalId: "20795886",
          formId: "47ef112f-81ad-4f14-a53e-b49794601cc0",
          target: "#formContainer",
        });
      }
    });
  };

  useEffect(() => {
    hubForm();
    // component will unmount
    return () => {
      console.log("hub ret");
    };
  }, [show]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request a Demo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formLoader == true ? (
            <>
              <Loaders />
            </>
          ) : null}

          <div id="formContainer"></div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="demo_btn btn close_btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <style>{customCss}</style>
    </>
  );
};

export default FormModal;

const customCss = `
.modal_btn {

  border-color: #BA61FF;
}
.close_btn {
  background: #6c757d;
  border-radius: 33px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 8px 34px;
  font-weight: 400;
  margin-left: 20px;
}
.close_btn:hover {
  color: #6c757d !important;
    background: #fff;
    border: 1px solid #6c757d;
}
`;
