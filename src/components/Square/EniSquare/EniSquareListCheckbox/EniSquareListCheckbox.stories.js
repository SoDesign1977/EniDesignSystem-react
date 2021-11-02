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
