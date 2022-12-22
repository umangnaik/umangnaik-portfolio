import { useRef } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BiMessageSquareDots} from 'react-icons/bi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import emailJs from 'emailjs-com'

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailJs.sendForm('service_pnzaa54', 'template_zjt5gil', form.current, 'yukptgiRaPbn0X6OY')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>umang.naik98@gmail.com</h5>
            <a href="mailto:umang.naik98@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BiMessageSquareDots className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>+121232343335</h5>
            <a href="https://api.whatsapp.com/send?+8107043981540" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>umang.naik98@gmail.com</h5>
            <a href="https://web.whatsapp.com/send?+919033994577" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" placeholder='Your Message' required rows="10"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default contact