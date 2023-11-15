"use client";

import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";

import { slideIn } from "../utils/motion";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { Button } from ".";

const Contact = () => {
  // State variables for form data, loading state, and validation
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({
    nameValidation: true,
    emailValidation: true,
    messageValidation: true,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { name, email, message } = form;
    const nameValidation = name.trim().length > 2;
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const messageValidation = message.trim().length >= 10;

    setValidation({ nameValidation, emailValidation, messageValidation });

    return nameValidation && emailValidation && messageValidation;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      // Perform  submit logic here (make an API request)
      console.log("Form data:", { ...form });

      setTimeout(() => {
        setForm({ name: "", email: "", message: "" });
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div
      id="contact"
      className="paddingY paddingX md:flex-row flex-col flex gap-10 xl:gap-20
      overflow-hidden"
    >
      <motion.div className="flex-1 bg-green-90 p-8 rounded-2xl max-w-4xl">
        <h3 className="bold-30 text-blue-400">Contact</h3>
        <form className="mt-8 flex flex-col gap-8" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
            {!validation.nameValidation && (
              <span className="text-xs py-1 flex justify-end ">
                Please enter a valid name.
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="py-4 px-6 text-white rounded-lg outline-none border-none font-medium "
            />
            {!validation.emailValidation && (
              <span className="text-xs py-1 flex justify-end ">
                Please enter a valid email.
              </span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="font-medium text-white mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="py-4 px-6 text-white rounded-lg outline-none border-none font-medium"
            />
            {!validation.messageValidation && (
              <span className="text-xs py-1 flex justify-end ">
                Message too short.
              </span>
            )}
          </label>
          <Button
            type="submit"
            title={loading ? "Sending..." : "Send"}
            variant="btn_white"
            full={true}
          />
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex flex-col xl:flex-[1/2] h-auto relative p-8 gap-8 rounded-2xl 
        border-[0.1px] border-blue-400"
      >
        <h3 className="bold-20 capitalize mb-10">Get in touch</h3>
        <div className="flexStart flex-col xs:flex-row gap-6">
          <div className="w-12 h-12 rounded-full bg-blue-400 flexCenter">
            <MdEmail className="text-[22px]" />
          </div>
          <p className="regular-16">craftsmansHub@email.com</p>
        </div>
        <div className="flexStart flex-col xs:flex-row gap-6">
          <div className="w-12 h-12 rounded-full bg-blue-400 flexCenter">
            <BsFillTelephoneFill className="text-[20px]" />
          </div>
          <p className="regular-16">
            +995 577 777 555 <br />
            +995 577 555 777
          </p>
        </div>
        <div className="flexStart flex-col xs:flex-row gap-6">
          <div className="w-12 h-12 rounded-full bg-blue-400 flexCenter">
            <BsFacebook className="text-[22px]" />
          </div>
          <p className="regular-16">Craftsman's Hub profile</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
