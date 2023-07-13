import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Mark from '../components/mark'
import Card from '../components/card'
import Accordion from '../components/accordion'
import Includes from '../components/includes'
import Excludes from '../components/excludes'
import Review from '../components/review'
import Article from '../components/article'
import FAQ from '../components/faq'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Planical modern template</title>
        <meta property="og:title" content="Planical modern template" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name"></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  The fastest way to make a doctor appointment
                </h1>
                <span className="home-caption">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </header>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text">Get started</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text01">View features</span>
                </div>
              </div>
            </main>
            <div className="home-highlight">
              <div className="home-avatars">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image01 avatar"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="home-image02 avatar"
                />
              </div>
              <label className="home-caption1">
                Loved by 10,000+ people like you.
              </label>
            </div>
          </div>
          <div className="home-image03">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="home-image04"
            />
          </div>
          <div className="home-image05">
            <img
              alt="image"
              src="/SectionImages/heroimage-1500h.png"
              className="home-image06"
            />
          </div>
        </div>
      </section>
      <section className="home-section01">
        <h2 className="home-text02">
          Our doctors and therapists are here, 24/7.
        </h2>
        <div className="home-features">
          <header className="feature feature-active home-feature">
            <h3 className="home-text03">Urgent Care</h3>
            <p className="home-text04">Doloremque laudantium</p>
          </header>
          <header className="feature home-feature1">
            <h3 className="home-text05">Chronic Care</h3>
            <p className="home-text06">Doloremque laudantium</p>
          </header>
          <header className="feature home-feature2">
            <h3 className="home-text07">Mental Health</h3>
            <p className="home-text08">Doloremque laudantium</p>
          </header>
        </div>
        <div className="home-note">
          <div className="home-content1">
            <main className="home-main1">
              <h2 className="home-heading01">
                Accessing this Medicare benefit is easy
              </h2>
              <p className="home-paragraph">
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </span>
                <br></br>
                <br></br>
                <span>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae.
                </span>
                <br></br>
              </p>
            </main>
            <div className="home-explore-more">
              <p className="home-text14">Explore more -&gt;</p>
            </div>
          </div>
          <div className="home-image07">
            <img
              alt="image"
              src="/SectionImages/group%201490-1200w.png"
              className="home-image08"
            />
          </div>
        </div>
      </section>
      <section className="home-section02">
        <header className="home-header01">
          <h2 className="home-text15">Why do you need a mobile medical app?</h2>
          <span className="home-text16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </span>
        </header>
        <section className="home-note1">
          <div className="home-image09">
            <img
              alt="image"
              src="/SectionImages/group%201428-1200w.png"
              className="home-image10"
            />
          </div>
          <div className="home-content2">
            <div className="home-main2">
              <div className="home-caption2">
                <span className="section-head">Tempor incididunt</span>
              </div>
              <div className="home-heading02">
                <h2 className="section-heading">
                  We provide compassionate care from start to finish.
                </h2>
                <p className="section-description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </p>
              </div>
            </div>
            <div className="home-get-started2 button">
              <span className="home-text17">Get started</span>
            </div>
          </div>
        </section>
        <section className="home-note2">
          <div className="home-image11">
            <img
              alt="image"
              src="/SectionImages/group%201449-1200w.png"
              className="home-image12"
            />
          </div>
          <div className="home-content3">
            <main className="home-main3">
              <header className="home-caption3">
                <span className="home-section04 section-head">
                  Tempor incididunt
                </span>
              </header>
              <main className="home-heading04">
                <header className="home-header02">
                  <h2 className="section-heading">
                    Great care, wherever you are
                  </h2>
                  <p className="section-description">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium.
                  </p>
                </header>
                <div className="home-checkmarks">
                  <Mark></Mark>
                  <Mark Label="Quis nostrud exercitation ullamco"></Mark>
                  <Mark Label="Reprehenderit qui in ea voluptate velit"></Mark>
                </div>
              </main>
            </main>
            <div className="home-get-started3 button">
              <span className="home-text18">Get started</span>
            </div>
          </div>
        </section>
      </section>
      <section className="home-section05">
        <header className="home-header03">
          <header className="home-left">
            <span className="section-head">Tempor incididunt</span>
            <h2 className="section-heading">
              <span>Meet our network</span>
              <br></br>
              <span>of licensed providers</span>
            </h2>
          </header>
          <div className="home-right">
            <p className="home-paragraph3 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="home-cards">
          <Card rootClassName="card-root-class-name"></Card>
          <Card
            Icon="/Icons/group%201314-200h.png"
            rootClassName="card-root-class-name1"
          ></Card>
          <Card
            Icon="/Icons/group%201317-200h.png"
            rootClassName="card-root-class-name2"
          ></Card>
        </main>
      </section>
      <section className="home-section07">
        <div className="home-note3">
          <div className="home-image13">
            <img
              alt="image"
              src="/SectionImages/iphone%2014%20pro%20max-1200w.png"
              className="home-image14"
            />
          </div>
          <div className="home-content4">
            <div className="home-caption4">
              <span className="section-head">Tempor incididunt</span>
            </div>
            <div className="home-heading07">
              <div className="home-header04">
                <h2 className="section-heading">
                  Tips to get care, answers and advice faster
                </h2>
              </div>
              <Accordion rootClassName="accordion-root-class-name"></Accordion>
            </div>
          </div>
        </div>
      </section>
      <section className="home-section09">
        <div className="home-cube">
          <div className="home-top side"></div>
          <div className="home-front side"></div>
          <div className="home-left1 side"></div>
        </div>
        <main className="home-banner">
          <div className="home-header05">
            <h2 className="section-heading">
              Planical makes online doctor visits easier
            </h2>
            <p className="home-description section-description">
              Lorem ipsum dolor sit amet!
            </p>
          </div>
          <div className="home-buttons1">
            <div className="home-get-started4 button">
              <span className="home-text22">Get started</span>
            </div>
            <div className="home-book-demo button">
              <span className="home-text23">Book a demo</span>
            </div>
          </div>
        </main>
      </section>
      <section className="home-section10">
        <div className="home-cube1">
          <div className="home-top1 side"></div>
          <div className="home-front1 side"></div>
          <div className="home-left2 side"></div>
        </div>
        <main className="home-pricing">
          <header className="home-header06">
            <header className="home-left3">
              <span className="section-head">Pricing</span>
              <h2 className="section-heading home-heading10">
                Start small, think big
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph4 section-description">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
          </header>
          <div className="home-plans-container">
            <div className="home-switch">
              <div className="switch">
                <label className="home-text24">Monthly</label>
              </div>
              <div className="home-switch2 switch">
                <label className="home-text25">Yearly</label>
              </div>
            </div>
            <main className="home-plans">
              <div className="home-plan">
                <div className="home-details">
                  <div className="home-header07">
                    <label className="home-name">Basic</label>
                    <div className="home-pricing1">
                      <h1 className="home-price">$9</h1>
                      <span className="home-duration">/mo</span>
                    </div>
                  </div>
                  <p className="home-description1">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home-buy-details">
                  <div className="home-buy button">
                    <span className="home-text26">
                      <span>Start Basic</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features1">
                    <span className="home-heading11">You will get</span>
                    <div className="home-list">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-details1">
                  <div className="home-header08">
                    <label className="home-name1">Professional</label>
                    <div className="home-pricing2">
                      <h1 className="home-price1">$15</h1>
                      <span className="home-duration1">/mo</span>
                    </div>
                  </div>
                  <p className="home-description2">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home-buy-details1">
                  <div className="home-buy1 button">
                    <span className="home-text29">
                      <span>Start Professional</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features2">
                    <span className="home-heading12">You will get</span>
                    <div className="home-list1">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                      <Excludes rootClassName="excludes-root-class-name"></Excludes>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-details2">
                  <div className="home-header09">
                    <label className="home-name2">Enterprise</label>
                    <div className="home-pricing3">
                      <span className="home-price2">$99</span>
                      <span className="home-duration2">/mo</span>
                    </div>
                  </div>
                  <p className="home-description3">
                    Good for sed quia consequuntur magni dolores eos qui
                    ratione.
                  </p>
                </div>
                <div className="home-buy-details2">
                  <div className="home-buy2 button">
                    <span className="home-text32">
                      <span>Start Enterprise</span>
                      <br></br>
                    </span>
                  </div>
                  <div className="home-features3">
                    <span className="home-heading13">You will get</span>
                    <div className="home-list2">
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                      <Includes rootClassName="includes-root-class-name"></Includes>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </main>
        <div className="home-help">
          <span className="home-text35">
            <span>Need any help?</span>
            <br></br>
          </span>
          <div className="home-contact-support">
            <p className="home-text38">Contact support -&gt;</p>
          </div>
        </div>
      </section>
      <section className="home-section12">
        <header className="home-header10">
          <header className="home-left4">
            <span className="section-head">Tempor incididunt</span>
            <h2 className="home-heading14 section-heading">
              What users say about us
            </h2>
          </header>
          <div className="home-right2">
            <p className="home-paragraph5 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="home-cards1">
          <div className="home-container1">
            <Review rootClassName="review-root-class-name"></Review>
            <Review
              Quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container2">
            <Review
              Quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
          <div className="home-container3">
            <Review
              Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
            <Review
              Quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
              rootClassName="review-root-class-name"
            ></Review>
          </div>
        </main>
        <div className="home-view-more">
          <p className="home-text39">View more</p>
        </div>
      </section>
      <section className="home-section14">
        <header className="home-header11">
          <span className="section-head">Articles about us</span>
          <h2 className="home-heading15 section-heading">
            We’re the app on everyone’s lips
          </h2>
        </header>
        <main className="home-cards2">
          <Article rootClassName="article-root-class-name"></Article>
          <Article
            Header="techeu"
            SpecialHeader="eu"
            rootClassName="article-root-class-name"
          ></Article>
          <Article
            Header="sifted/"
            rootClassName="article-root-class-name"
          ></Article>
        </main>
      </section>
      <section className="home-section16">
        <header className="home-header12">
          <span className="section-head">FAQ</span>
          <h2 className="home-heading16 section-heading">
            Frequently asked questions
          </h2>
        </header>
        <main className="home-accordion">
          <FAQ rootClassName="faq-root-class-name"></FAQ>
        </main>
      </section>
      <section className="home-section18">
        <main className="home-content5">
          <header className="home-header13">
            <h2 className="home-heading17 section-heading">
              Stop searching online for medications and use Planical app!
            </h2>
            <div className="home-buttons2">
              <div className="home-ios button">
                <img
                  alt="image"
                  src="/Icons/apple-200w.png"
                  className="home-icon"
                />
                <span className="home-text40">Download for iOS</span>
              </div>
              <div className="home-android button">
                <img
                  alt="image"
                  src="/Icons/android-200h.png"
                  className="home-icon1"
                />
                <span className="home-text41">Download for Android</span>
              </div>
            </div>
          </header>
          <img
            alt="image"
            src="/SectionImages/group%201505-1200w.png"
            className="home-image15"
          />
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content6">
          <main className="home-main-content">
            <div className="home-content7">
              <header className="home-main4">
                <div className="home-header14">
                  <img
                    alt="image"
                    src="/Branding/planical7012-ttpb.svg"
                    className="home-branding"
                  />
                  <span className="home-text42">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </div>
                <div className="home-socials">
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link"
                  >
                    <img
                      alt="image"
                      src="/Icons/linkedin-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link1"
                  >
                    <img
                      alt="image"
                      src="/Icons/instagram-200h.png"
                      className="social"
                    />
                  </a>
                  <a
                    href="https://example.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link2"
                  >
                    <img
                      alt="image"
                      src="/Icons/twitter-200h.png"
                      className="social"
                    />
                  </a>
                </div>
              </header>
              <header className="home-categories">
                <div className="home-category">
                  <div className="home-header15">
                    <span className="footer-header">Solutions</span>
                  </div>
                  <div className="home-links">
                    <span className="footer-link">Responsive Web Design</span>
                    <span className="footer-link">Responsive Prototypes</span>
                    <span className="footer-link">Design to Code</span>
                    <span className="footer-link">Static Website Builder</span>
                    <span className="footer-link">
                      Static Website Generator
                    </span>
                  </div>
                </div>
                <div className="home-category1">
                  <div className="home-header16">
                    <span className="footer-header">Company</span>
                  </div>
                  <div className="home-links1">
                    <span className="footer-link">About</span>
                    <span className="footer-link">Team</span>
                    <span className="footer-link">News</span>
                    <span className="footer-link">Partners</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">Press &amp; Media</span>
                  </div>
                </div>
              </header>
            </div>
            <section className="home-copyright">
              <span className="home-text56">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </main>
          <main className="home-subscribe">
            <main className="home-main5">
              <h1 className="home-heading18">Subscribe to our newsletter</h1>
              <div className="home-input-field">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="home-textinput input"
                />
                <div className="home-buy3 button">
                  <span className="home-text57">-&gt;</span>
                  <span className="home-text58">
                    <span>Subscribe now</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </main>
            <h1 className="home-notice">
              By subscribing to our newsletter you agree with our Terms and
              Conditions.
            </h1>
          </main>
          <section className="home-copyright1">
            <span className="home-text61">
              © 2022 latitude. All Rights Reserved.
            </span>
          </section>
        </div>
      </footer>
      <div>
        <Script
          html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
