import { motion } from "framer-motion";
import { useRef, useState } from "react";

import axios from "axios";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formRef = useRef();
  const [isModalVisible, setModalVisible] = useState(false);
const [modalMessage, setModalMessage] = useState('');

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   console.log(form);
  //   try {
  //     const response = await axios.post(
  //       `https://ishop.smartidea.tech/api/contact-us-api`,
  //       form
  //     );
  //     console.log(response.data.data);
  //     setLoading(false);
  //     alert("Thank you. I will get back to you as soon as possible.");
  //     setForm({
  //       name: "",
  //       email: "",
  //       message: "",
  //     });
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //     alert("Something went wrong.");
  //   }
  //   // emailjs
  //   //   .send(
  //   //     {baseURL:`https://ishop.smartidea.tech/api/contact-us-api`,form}
  //   //     // "service_r0jcplm",// paste your ServiceID here (you'll get one when your service is created).
  //   //     // "template_1t76uxq", // paste your TemplateID here (you'll find it under email templates).
  //   //     // {
  //   //     //   form_name: form.name,
  //   //     //   to_name: "Gfoura",
  //   //     //   from_email: form.email,
  //   //     //   to_email: "eng.ahmedabdelhaleem@gmail.com",
  //   //     //   message: form.message,
  //   //     // },
  //   //     // "Jqq9AvwIuSjoMiA5c"//paste your Public Key here. You'll get it in your profile section.
  //   //   )
  //   //   .then(
  //   //     () => {
  //   //       setLoading(false);
  //   //       alert("Thank you. I will get back to you as soon as possible.");

  //   //       setForm({
  //   //         name: "",
  //   //         email: "",
  //   //         message: "",
  //   //       });
  //   //     },
  //   //     (error) => {
  //   //       setLoading(false);

  //   //       console.log(error);
  //   //       alert("Something went wrong.");
  //   //     }
  //     // );
  // };
  axios.defaults.baseURL = 'https://ishop.smartidea.tech';
  axios.defaults.withCredentials = true;
// axios.defaults.headers.origin = 'http://127.0.0.1:5173';
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  console.log(form);
  try {
    const response = await axios.post('/api/contact-us-api', form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data.data);
    setLoading(false);
    setModalMessage('Thank you. I will get back to you as soon as possible.');
setModalVisible(true);

    setForm({
      name: '',
      email: '',
      message: '',
    });
  } catch (error) {
    setLoading(false);
    console.log(error);
    setModalMessage('Thank you. I will get back to you as soon as possible.');
setModalVisible(true);

    setForm({
      name: '',
      email: '',
      message: '',
    });
  }
};
const close_msg = () => {
  window.location.href = "https://gfoura.com";
  setModalVisible(false);
}
const Modal = ({ isVisible, onClose, message }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className=" bg-gray-800 p-8 rounded-lg w-96">
        <p>{message}</p>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

  return (
    
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
  
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="user_name"
              value={form.name}
              required
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="user_email"
              value={form.email}
              required
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              required
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <Modal 
  isVisible={isModalVisible} 
  onClose={close_msg} 
  message={modalMessage} 
  className="bg-black"
/>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
