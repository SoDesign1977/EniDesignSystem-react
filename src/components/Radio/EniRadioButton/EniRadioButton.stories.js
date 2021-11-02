import React from "react";

import EniRadioButton from "./EniRadioButton";

export default {
  component: EniRadioButton,
  title: "Components/Radio/EniRadioButton",
};

const Template = (args) => <EniRadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "RadioButton",
  Radio: [
    {
      value: "Test1",
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
    },
  ],
  required: true,
};
