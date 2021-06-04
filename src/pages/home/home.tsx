import React from "react";

import {
  Banner,
  Tool,
  Button,
  ImageCard
} from "../../components";

import { TOOLS } from "./mock";

import {
  DesignTools,
  DesignInfo,
  DesignTitle,
  Tools,
  ToolsButton
} from "./styles";

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

      <DesignTools>
        <DesignInfo>
          <DesignTitle>We design tools to unveil your superpowers</DesignTitle>
          <Tools>
            {TOOLS.map(item =>
              <Tool
                key={item.title}
                image={item.image}
                title={item.title}
                color={item.color}
                description={item.description}
              />
            )}
          </Tools>
          <ToolsButton>
            <Button>SIGN UP NOW</Button>
          </ToolsButton>
        </DesignInfo>
      </DesignTools>

      <DesignInfo>

        <ImageCard image="./images/feature-1.png"><p>Hello</p></ImageCard>
        {/* <ImageCard reverse image="./images/feature-2.png"><p>Hello</p></ImageCard>
        <ImageCard image="./images/feature-3.png"><p>Hello</p></ImageCard> */}
      </DesignInfo>
    </div>
  );
};

export default Home;
