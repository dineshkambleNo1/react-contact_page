import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import React, { useState } from "react";

const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();

    let name = event.target[0].value;
    let email = event.target[1].value;
    let text = event.target[2].value;

    console.log(name);
    console.log(email);
    console.log(text);

    setName(name);
    setEmail(email);
    setText(text);
  };

  const [name, setName] = useState("dinesh ");
  const [email, setEmail] = useState("dcool@gmail.com ");
  const [text, setText] = useState("So cool ");

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<IoIosMail fontSize="24px" />}
        />

        <div>
          <div className={styles.form_control}>
            <form onSubmit={onSubmit}>
              <div className={styles.form_container}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
              </div>

              <div className={styles.form_container}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
              </div>

              <div className={styles.form_container}>
                <label htmlFor="text">Text</label>
                <textarea name="text" id="text" cols="70" rows="10"></textarea>
              </div>
              <div className={styles.submit_btn}>
                <Button type="submit" text="Submit" />
              </div>
              <div style={{ whiteSpace: "pre-line" }}>
                {name + "\n" + email + "\n" + text}
              </div>
              
            </form>
          </div>
        </div>
      </div>

      <div>
        <img
          className={styles.contact_img}
          src="/images/Service 24_7-pana 1.svg"
          alt="Contact Service Image"
        />
      </div>
    </section>
  );
};

export default ContactForm;
