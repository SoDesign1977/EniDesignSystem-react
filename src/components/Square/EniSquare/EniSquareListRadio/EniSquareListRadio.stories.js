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
  square :[
    {
      title: "non",
      icon: ErrorSVG,
      disabled: true,
    },
    {
      title: "oui",
      icon: ErrorSVG,
      disabled: false,
    
    },
  ],
  required:true,
  legend : "test",
};
