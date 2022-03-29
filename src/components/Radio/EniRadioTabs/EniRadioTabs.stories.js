import React from "react";

import EniRadioTabs from "./EniRadioTabs";

export default {
  component: EniRadioTabs,
  title: "Components/Radio/EniRadioTabs",
};

const Template = (args) => <EniRadioTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "EniRadioTabs",
  radios: [
    {
      value: "Placeholder",
      icon: require("../../../styles/assets/images/oui.svg"),
    },
    {
      value: "Test2",
      icon: require("../../../styles/assets/images/oui.svg"),
    },
    {
      value: "Test3",
      disabled: true,
      icon: require("../../../styles/assets/images/oui.svg"),
    },
    {
      value: "Test4",
      checked: true,
      icon: require("../../../styles/assets/images/oui.svg"),
    },
    {
      value: "Test5",
      checked:true,
      disabled:true,
      icon: require("../../../styles/assets/images/oui.svg"),
    },
  ],
  required: true,
};
