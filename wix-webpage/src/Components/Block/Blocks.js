import React from "react";
import "./Blocks.css";
const Blocks = () => {
  return (
    <>
      <div className="flex-container">
        <div>
          <h2>
            The Freedom to Create <br /> the Websites You Want
          </h2>
        </div>
        <div>
          <p>
            Design and build your own high-quality websites.
            <br /> Whether you’re promoting your business, showcasing
            <br /> your work, opening your store or starting a blog—you
            <br /> can do it all with the Wix website builder.
          </p>
          <button class="input">Get Started &#x02192;</button>
        </div>
      </div>

      <div className="flex-container1">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#146356",
            padding: "20px 100px",
            width: "50%",
          }}
        >
          <div style={{ padding: "0px 70px" }}>
            <h1>Build Your Unique Online Presence</h1>
            <p>To create your own website, follow these steps:</p>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                padding: "0px 50px",
              }}
            >
              <div style={{ borderTop: "2px solid white", margin: "0px 20px" }}>
                <h4>Customize your site</h4>
                <p>
                  Pick a template and customize anything, or answer a few
                  questions and get a free website designed just for you.
                </p>
              </div>
              <div style={{ borderTop: "2px solid white", margin: "0px 20px" }}>
                <h4>Customize your site</h4>
                <p>
                  Pick a template and customize anything, or answer a few
                  questions and get a free website designed just for you.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", padding: "0px 50px" }}>
              <div style={{ borderTop: "2px solid white", margin: "0px 20px" }}>
                <h4>Customize your site</h4>
                <p>
                  Pick a template and customize anything, or answer a few
                  questions and get a free website designed just for you.
                </p>
              </div>
              <div style={{ borderTop: "2px solid white", margin: "0px 20px" }}>
                <h4>Customize your site</h4>
                <p>
                  Pick a template and customize anything, or answer a few
                  questions and get a free website designed just for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="branding"
          style={{
            width: "50%",
            // position: "relative",
            // left: "15%",
            // top: "20%",
          }}
        >
          <img
            style={{
              position: "relative",
              left: "25%",
              top: "25%",
            }}
            src="https://static.wixstatic.com/media/311dce_e8fa9b5f1ff043e1a21141ed40153ade~mv2.png/v1/fill/w_291,h_229,al_c,q_85,usm_0.66_1.00_0.01/DE%201.webp"
            alt="branding-img"
          />
        </div>
      </div>
    </>
  );
};

export default Blocks;
