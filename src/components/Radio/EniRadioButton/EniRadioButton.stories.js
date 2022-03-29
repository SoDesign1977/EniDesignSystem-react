import React from "react";

import EniRadioButton from "./EniRadioButton";

export default {
  component: EniRadioButton,
  title: "Components/Radio/EniRadioButton",
};

const Template = (args) => <EniRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "RadioButtonx",
  radios: [
    {
      value: "Placeholder",
    },
    {
      value: "Test2",
    },
    {
      value: "Test3",
      disabled: true,
    },
    {
      value: "Test4",
      checked: true,
    },
    {
      value: "Test5",
      checked:true,
      disabled:true
    },
  ],
  required: true,
};
