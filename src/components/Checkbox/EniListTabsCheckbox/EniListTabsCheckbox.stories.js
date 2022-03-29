import React from "react";

import EniListTabsCheckbox from "./EniListTabsCheckbox";

export default {
  component: EniListTabsCheckbox,
  title: 'Components/Checkbox/EniListTabsCheckbox',
};

const Template = (args) => <EniListTabsCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
legend:"Checkbox",
checkbox:[  
  {
    icon: require("../../../styles/assets/images/oui.svg"),
    title: "Test1",
  },
  {
    icon: require("../../../styles/assets/images/oui.svg"),
    title: "Test2",
    checked:true
  },
  {
    icon: require("../../../styles/assets/images/oui.svg"),
    title: "Test3",
    disabled: true,
  },
  {
    title: "Test4",
    checked: true,
  },
  {
    title: "Test5",
    checked:true,
    disabled:true
  },
],
required: true
};
