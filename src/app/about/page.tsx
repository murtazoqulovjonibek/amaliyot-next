export default function AboutPage() {
  return (
    <main className="aboutPage">

      <div className="about-container">

        <section className="aboutHero">

          <p className="aboutSmall">ABOUT US</p>

          <h1>
            Creative Blog Writing and publishing site
          </h1>

          <p className="aboutDesc">
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>

        </section>


        <div className="aboutImage">
          <img src="/about.png" alt="about image"/>
        </div>


        <section className="aboutWork">

          <p className="aboutSmall">HOW WE WORK</p>

          <h3 className="aboutWork-h3">I will show you how our team works</h3>

          <div className="workGrid">

            <div className="workCard active">

              <h3>01</h3>

              <h4>Brainstorming</h4>

              <p>
                Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated
              </p>

            </div>


            <div className="workCard">

              <h3>02</h3>

              <h4>Analysing</h4>

              <p>
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line solely on the bottom line.
              </p>

            </div>


            <div className="workCard">

              <h3>03</h3>

              <h4>News Publishing</h4>

              <p>
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>

            </div>

          </div>

        </section>
      </div>

    </main>
  )
}