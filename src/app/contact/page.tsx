export default function ContactPage() {
  return (
    <main className="contactPage">

      <section className="contactHero">

        <h1>Get in Touch</h1>

        <p className="contactDesc">
          Contact us to publish your content and show ads to our website and get a good reach.
        </p>

        <div className="contactCards">

          <div className="contactCard">
            <div className="contactIcon">
                <img src={'/contactOffice.png'} />
            </div>
            <h4>Office</h4>
            <p className="contactP">Victoria Street, London, UK</p>
          </div>

          <div className="contactCard">
            <div className="contactIcon">
                <img src={'/contactEmail.png'} />
            </div>
            <h4>Email</h4>
            <p className="contactP">hello@zarrin.com</p>
          </div>

          <div className="contactCard">
            <div className="contactIcon">
                <img src={'/contactPhone.png'} />
            </div>
            <h4>Phone</h4>
            <p className="contactP">+012 345 6789</p>
          </div>

        </div>

      </section>


      <div className="mapSection">
        <img src="/map.png" alt="map"/>
      </div>


      <section className="contactFormSection">

        <form className="contactForm">
          <div className="formRow">
            <div>
              <span className="cSpan">Name</span>
              <input type="text" placeholder="Name" />
            </div>

            <div>
              <span>Email</span>
              <input type="email" placeholder="Email" />
            </div>
          </div>

          <div className="formRow">
            <div>
              <span className="cSpan">Phone</span>
              <input type="text" placeholder="Phone" />
            </div>

            <div>
              <span className="cSpan">Subject</span>
              <input type="text" placeholder="Subject" />
            </div>
          </div>

          <div>
            <span className="cSpan">Message</span>
            <textarea placeholder="Message"></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>

      </section>

    </main>
  )
}