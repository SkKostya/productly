import React from "react";

import {
  Banner,
  Tool
} from "../../components";

const Home = () => {
  return (
    <div>
      <Banner
        title="The Design Thinking superpowers"
        description="Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience."
        onGetStarted={() => null}
        image="./images/banner-image.png"
        videoLink="#"
      />

      <Tool
        image="./images/tool-1.svg"
        title="First click tests"
        description="While most people enjoy casino gambling,"
      />
    </div>
  );
};

export default Home;
