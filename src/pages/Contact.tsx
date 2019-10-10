import React from 'react'

const Contact = () => {
  return (
    <>
      <div>
        <h1>Contact</h1>
        <form className="contact-form" action="https://formspree.io/roeckie_brent@live.be" method="post">
          <input type="hidden" name="_subject" value="Mail from Portfolio website"/>
          <input type="text" name="name" placeholder="Name" required={true}/>
          <input type="email" name="_replyto" placeholder="E-mail" required={true} />
          <textarea name="message" cols={20} placeholder="Message" required={true}></textarea>
          <button type="submit" className="submit-btn">Send mail</button>
        </form>
      </div>
      <div className="social-media">
          <a href="https://twitter.com/Da_Bront" target="_blank"><i className="fa fa-twitter"></i></a>
          <a href="https://github.com/brendero" target="_blank"><i className="fa fa-github"></i></a>
          <a href="https://www.linkedin.com/in/brent-de-roeck-297a55156/" target="_blank"><i className="fa fa-linkedin"></i></a>
      </div>
    </>
  )
}

export default Contact