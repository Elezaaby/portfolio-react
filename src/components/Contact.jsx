import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import AnimationLetter from "./AnimationLetter";
import emailjs from "@emailjs/browser";
import Noty from "noty";

import "noty/src/noty.scss";
import "noty/src/themes/metroui.scss";

const Contact = () => {
  const contactArray = ["C", "o", "n", "t", "a", "c", "t", "", "m", "e"];
  const [classLetter, setClassLetter] = useState("text_animation");
  let refForm = useRef();

  function showNotification(type, text) {
    new Noty({
      type: type,
      text: `<i class="fa-solid fa-check"></i> ${text}`,
      layout: "bottomRight",
      timeout: 2000,
      progressBar: true,
      closeWith: ["click"],
      theme: "metroui",
    }).show();
  }

  function submitEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sn7bi19",
        "template_ll5itxf",
        refForm.current,
        "BJDMS3VfRwDhOiYNm"
      )
      .then(
        (result) => {
          showNotification("success", "Sent successfully, thanks");
        },
        (error) => {
          showNotification("error", "Sorry, there was a problem");
        }
      );
  }

  useEffect(() => {
    setTimeout(() => {
      setClassLetter("text_animation_hover");
    }, 3000);
  }, []);

  return (
    <ContactPage className="container">
      <TextZone>
        <h1>
          <AnimationLetter
            array={contactArray}
            classLetter={classLetter}
            index={15}
          />
        </h1>
        <p>
          I am interested in freelance opportunities - especially on ambitious
          or large projects. However, if you have any other requests or
          questions, don't hesitate to contact me using below form either.
        </p>
        <Form>
          <form ref={refForm} onSubmit={submitEmail}>
            <ul>
              <li className="top_input">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="top_input">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="submit_btn" value="SEND" />
              </li>
            </ul>
          </form>
        </Form>
      </TextZone>
    </ContactPage>
  );
};
const ContactPage = styled.div``;
const TextZone = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  max-height: 90%;

  h1 {
    color: #6e57e0;
    font-size: 53px;
    margin: 0;
    font-family: "Coolvetica";
    font-weight: 400;
    line-height: 53px;
    z-index: 5;
    position: relative;
    margin-bottom: 40px;
    left: -10px;

    &::before {
      content: "<h1>";
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: -20px;
      margin: -30px 0 0 0;
      opacity: 0.6;
    }

    &::after {
      content: "<h1/>";
      font-family: "La Belle Aurore";
      font-size: 20px;
      color: #6e57e0;
      position: absolute;
      left: -40px;
      bottom: -45px;
      opacity: 0.6;
      margin-left: 20px;
    }

    .text_animation_hover {
      &:hover {
        color: #fff;
      }
    }
  }
  p {
    font-size: 13px;
    color: #fff;
    font-family: sans-serif;
    font-weight: 300;
    max-width: fit-content;
    animation: pulse 1s;

    &:nth-of-type(1) {
      animation-delay: 0.7s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.8s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.9s;
    }
  }
`;
const Form = styled.div`
  width: 100%;
  margin-top: 20px;

  ul {
    padding: 0;
    margin: 0;

    li {
      display: block;
      position: relative;
      padding: 0;
      margin: 0;
      list-style: none;
      margin-bottom: 10px;
      opacity: 0;
      overflow: hidden;
      clear: both;
      animation: fadeInUp 2s 2s;
      animation-fill-mode: forwards;

      textarea {
        width: 100%;
        background: #0c0a13;
        height: 50px;
        font-size: 16px;
        color: #fff;
        padding: 20px;
        min-height: 130px;
        box-sizing: border-box;
        border: 1px solid #6e57e0;
        outline: 1px solid #6e57e0;
        border-radius: 4px;
      }

      .submit_btn {
        color: #6e57e0;
        font-size: 11px;
        letter-spacing: 3px;
        text-decoration: none;
        padding: 8px 10px;
        border: 1px solid #6e57e0;
        float: left;
        border-radius: 4px;
        background: 0 0;
        text-transform: uppercase;
        float: right;
        text-align: center;
        margin-right: 10px;
        cursor: pointer;
      }
    }

    li.top_input {
      width: 49%;
      margin-left: 2%;
      float: left;
      clear: none;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    background: #0c0a13;
    height: 50px;
    font-size: 16px;
    color: #fff;
    padding: 0 20px;
    box-sizing: border-box;
    border: 1px solid #6e57e0;
    outline: 1px solid #6e57e0;
    border-radius: 4px;
  }
`;

export default Contact;
