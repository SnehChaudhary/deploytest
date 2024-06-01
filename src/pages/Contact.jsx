import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {Suspense} from 'react'
import {Canvas} from '@react-three/fiber';
import Horse from '../models/Horse';
import Loader from '../components/Loader';
import Alert from "../components/Alert";
import useAlert from "../hooks/useAlert";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const {alert,showAlert,hideAlert}=useAlert();
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleFocus = () => setCurrentAnimation("metarigAction");
  const handleBlur = () => setCurrentAnimation("idle");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('metarigAction');

    console.log("Sending email...");

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Lamya Gandhi",
        from_email: form.email,
        to_email: "lamya.gandhi4@gmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setIsLoading(false);
        showAlert({show:true,text:'Message sent successfully!',type:'success'})
        setTimeout(()=>{
          setCurrentAnimation('idle');
          setForm({ name: "", email: "", message: "" });
          hideAlert();
        },[3000])
        console.log("Email sent successfully");
      }).catch((error) => {
        setIsLoading(false);
        setCurrentAnimation('metarigAction');
        console.log("Failed to send email:", error);
        showAlert({show:true,text:'I was not able to recieve your message! Kindly retry',type:'danger'})
      }
    );
  };

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert{...alert}/> }

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text purple-gradient_text'>Get in Touch</h1>
        <form
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='youremail@email.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              rows='4'
              className='textarea'
              placeholder='Write your ideas here...'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button 
            type='submit'
            disabled={loading}
            className='btn neo-brutalism-pink'
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      <div className='lg:w-2/3 w-full lg:h-auto md:h-[550px] h-[350px]'>
      <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
        <Suspense fallback={Loader}>
            <Horse
                        currentAnimation={currentAnimation}
                          position={[0,0,1]}
                          rotation={[12.629, -0.2, 0]}
                          scale={[0.6, 0.6, 0.6]}/>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Contact;
