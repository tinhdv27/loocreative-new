/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";
function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact-text">Contact us</div>
      <div className="contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7838.684254869503!2d106.70676642475235!3d10.785086936675276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1547181657956"
          className="contact-map"
        ></iframe>
        <div className="contact-info">
          <div className="contact-info-1">
            <span className="text-bold">{t("langContact1")}</span>
            <br />
            <span>{t("langContact2")}</span>
            <br />
            <span> T 02 543 4983</span>
          </div>
          <div className="contact-info-2">
            <p className="label-1"> Work With Us</p>
            <p className="mail-1">loocreative@playlooc.com</p>
            <p className="label-2">Careers.</p>
            <p className="mail-2"> loocreative@playlooc.com</p>
          </div>
        </div>
      </div>
      <div className="hidden-scroll-contact"></div>
    </>
  );
}

export default Contact;
