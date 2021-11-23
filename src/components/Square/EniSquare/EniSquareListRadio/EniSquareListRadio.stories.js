import React from "react";

import EniSquareListRadio from "./EniSquareListRadio";
import ErrorSVG from "../../../../styles/assets/images/refused.svg";
export default {
  component: EniSquareListRadio,
  title: "Components/Square/Radio/EniSquareListRadio",
};

const Template = (args) => <EniSquareListRadio {...args} />;

export const Default = Template.bind({});
Default.args = {
  ListSquare :[
    {
      title: "non",
      icon: require("../../../../styles/assets/images/refused.svg"),
      disabled: true,
    },
    {
      title: "oui",
      icon: require("../../../../styles/assets/images/success.svg"),
      disabled: false,
    
    },
    {
      title: "yol",
      icon: require("../../../../styles/assets/images/success.svg"),
      disabled: false,
    
    },
  ],
  required:true,
  legend : "test",
};
