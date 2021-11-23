import React from "react";

import EniSquareListCheckbox from "./EniSquareListCheckbox";
import ErrorSVG from "../../../../styles/assets/images/refused.svg";
export default {
  component: EniSquareListCheckbox,
  title: "Components/Square/Checkbox/EniSquareListCheckbox",
};

const Template = (args) => <EniSquareListCheckbox {...args} />;

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
