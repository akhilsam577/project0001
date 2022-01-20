import React from "react";
import "./Block2.css";

const Block2 = () => {
  return (
    <div class="container">
      <div>
        {" "}
        <h1>Professionally Designed Website Templates</h1>
        <p>
          Choose from 500+ customizable website templates that are built to meet
          your business needs.
        </p>
        <button>See All Templates &#x02192;</button>
      </div>
      <div class="templates">
        <div class="child">
          <img
            src="https://static.wixstatic.com/media/311dce_102d38cf34454e19ab1a9709d131137c~mv2.png/v1/fill/w_190,h_129,al_c,q_85,usm_0.66_1.00_0.01/DE-T04-Landing%20page.webp"
            alt="template"
          />
          <p class="ptag">landing pagev</p>
        </div>

        <div class="child">
          <img
            src="https://static.wixstatic.com/media/311dce_48d2087f8ab34a3fbbea7821b7e246aa~mv2.png/v1/fill/w_190,h_129,al_c,q_85,usm_0.66_1.00_0.01/DE-T02-Business%20.webp"
            alt="template"
          />
          <p class="ptag">Company</p>
        </div>
        <div class="child">
          <img
            src="https://static.wixstatic.com/media/311dce_c9a04483c48241d28e1ef37e758068b5~mv2.png/v1/fill/w_190,h_129,al_c,q_85,usm_0.66_1.00_0.01/DE-T06-Online%20Store%20.webp"
            alt="template"
          />
          <p class="ptag">Online Shoping</p>
        </div>
      </div>
      <div class="templates">
        <div class="child">
          <img
            src="https://static.wixstatic.com/media/311dce_95e1a15369b34645b18c6653233eeba7~mv2.png/v1/fill/w_190,h_129,al_c,q_85,usm_0.66_1.00_0.01/DE-T03-Design.webp"
            alt="template"
          />
          <p class="ptag">Design</p>
        </div>

        <div class="child">
          <img
            src="https://static.wixstatic.com/media/311dce_dfef8638321a4cfcba12c9b46a906f1b~mv2.png/v1/fill/w_190,h_129,al_c,q_85,usm_0.66_1.00_0.01/DE-T04-Photography%20%20.webp"
            alt="template"
          />
          <p class="ptag">Photography</p>
        </div>
        <div class="child">
          <img
            src="https://static.wixstatic.com/media/311dce_8e68be3ed78542ee9faa4e782f52369e~mv2.png/v1/fill/w_190,h_129,al_c,q_85,usm_0.66_1.00_0.01/DE-T01-Portfolio.webp"
            alt="template"
          />
          <p class="ptag">Portfolio and Cv</p>
        </div>
      </div>
    </div>
  );
};

export default Block2;
