import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function AboutPages() {
  return (
    <main>
      <PageHero title = "About"/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, odit?
            Soluta, repellendus repellat illum nam perspiciatis a, reprehenderit
            perferendis saepe autem harum placeat voluptate. Laudantium eaque
            corporis nisi deleniti qui. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sunt id, suscipit, vel culpa expedita ipsa
            aliquid, accusamus consequuntur voluptatum tempore soluta adipisci
            necessitatibus laudantium vitae esse neque eligendi sint iure.
          </p>
        </article>
      </Wrapper>
    </main>
  );
}

export default AboutPages;
