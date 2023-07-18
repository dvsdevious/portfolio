import '../CSS/Contact.css'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import cImg from '../../images/contactimg.svg'


const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_dvsdev', 'template_y8ikaf2', formRef.current, 'pkzt3cH52CZbfU5g6')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <img src={cImg} alt="contact" width='510'/>
                    </div>
                    <div className="c-right">
                        <h1>Get in touch 👋</h1>
                        <form ref={formRef} onSubmit={handleSubmit}> 
                            <input type="text" placeholder="Name" name="user_name"/>
                            <input type="text" placeholder="Email" name="user_email"/>
                            <textarea rows="5" placeholder="Message" name="message"/>
                        </form>
                        <button> Submit </button>
                        {done && "Thank you!"}
                    </div>
                </div>
        </div>
    )
}

export default Contact

