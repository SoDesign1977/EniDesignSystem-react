import React from "react";

import EniRadioText from "./EniRadioText";

export default {
  component: EniRadioText,
  title: "Components/Radio/EniRadioText",
};

const Template = (args) => <EniRadioText {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "RadioButtonxx",
  radios: [
    {
      value: "Test1",
    },
    {
      value: "Test2",
    },
    {
      value: "Test3",
      disabled: true,
       checked: true,
    },
    {
      value: "Test4",
     
    },
    {
      value: "Test5",
    },
  ],
  required: true,
};
