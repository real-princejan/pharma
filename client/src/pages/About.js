import React from "react";
import Layout from "../components/Layout/Layout";

// import images
import jog from "../images/jogging.svg";
import start from "../images/start.svg";

const About = () => {
  return (
    <Layout title={"About us - Pharma"}>
      <div className="site-blocks-cover inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto align-self-center">
              <div className=" text-center">
                <h1>About Us</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  obcaecati natus iure voluptatum eveniet harum recusandae
                  ducimus saepe.
                </p>
                ˀ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div
        className="site-section bg-light custom-border-bottom"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <div className="block-16">
                <figure>
                  <img
                    src={start}
                    alt="Image placeholder"
                    className="img-fluid rounded"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="site-section-heading pt-3 mb-4">
                <h2 className="text-black">How We Started</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repellat, dicta at laboriosam, nemo exercitationem itaque
                eveniet architecto cumque, deleniti commodi molestias
                repellendus quos sequi hic fugiat asperiores illum. Atque, in,
                fuga excepturi corrupti error corporis aliquam unde nostrum
                quas.
              </p>
              <p>
                Accusantium dolor ratione maiores est deleniti nihil?
                Dignissimos est, sunt nulla illum autem in, quibusdam cumque
                recusandae, laudantium minima repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Left */}
      <div
        className="site-section bg-light custom-border-bottom"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 order-md-2">
              <div className="block-16">
                <figure>
                  <img
                    src={jog}
                    alt="Image placeholder"
                    className="img-fluid rounded"
                  />
                </figure>
              </div>
            </div>
            <div className="col-md-5 mr-auto">
              <div className="site-section-heading pt-3 mb-4">
                <h2 className="text-black">We Are Trusted Company</h2>
              </div>
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                repellat, dicta at laboriosam, nemo exercitationem itaque
                eveniet architecto cumque, deleniti commodi molestias
                repellendus quos sequi hic fugiat asperiores illum. Atque, in,
                fuga excepturi corrupti error corporis aliquam unde nostrum
                quas.
              </p>
              <p className="text-black">
                Accusantium dolor ratione maiores est deleniti nihil?
                Dignissimos est, sunt nulla illum autem in, quibusdam cumque
                recusandae, laudantium minima repellendus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
