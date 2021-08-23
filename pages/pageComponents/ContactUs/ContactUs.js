import classes from "./ContactUs.module.css";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import Image from "next/image";
import contact from "../../../public/contact.svg";

const override = css`
  display: block;

  border-color: #15b6ac;
`;
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const ContactUs = () => {
  const [name_, setName_] = useState("");
  const [message_, setMessage_] = useState("");
  const [email_, setEmail_] = useState("");
  let [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name_, email_, message_);
    if (!validateEmail(email_)) {
      toast.error("Please enter valid email.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setLoading(true);
      fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "umar.mukhtar4455@gmail.com",
          name: name_,
          clientEmail: email_,
          message: message_,
        }),
      })
        .then((responseData) => {
          if (responseData) {
            setLoading(false);
          }

          if (responseData.status === 202) {
            toast.success("Message is sent successfully.", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else {
            toast.error("Error", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((error) => console.warn(error));
    }
  };
  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className={classes.main}>
        <div className={classes.card}>
          <div className={classes.loaderAbs}>
            <div className="sweet-loading">
              {" "}
              <CircleLoader
                color="#15B6AC"
                loading={loading}
                css={override}
                size={80}
              />
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.heading}>
              <div className={classes.absolute}>
                <Image src={contact} alt="contact" />
              </div>
              <h2>Contact Us</h2>
            </div>
            <form>
              <div className={classes.formFlex}>
                <input
                  type="text"
                  name="name"
                  className={classes.formInput}
                  placeholder="Name"
                  onChange={(e) => setName_(e.target.value)}
                />
                <input
                  type="text"
                  name="email"
                  className={classes.formInput}
                  placeholder="Email"
                  onChange={(e) => setEmail_(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  className={classes.formInput2}
                  placeholder="Message"
                  onChange={(e) => setMessage_(e.target.value)}
                />
              </div>
              {/* <div>
                <textarea
                  className={classes.formInput3}
                  placeholder="Message"
                />
              </div> */}
              <div>
                <button className={classes.formButton} onClick={onSubmit}>
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
