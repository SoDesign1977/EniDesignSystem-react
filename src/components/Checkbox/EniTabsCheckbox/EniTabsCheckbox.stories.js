import React from "react";

import EniTabsCheckbox from "./EniTabsCheckbox";

export default {
  component: EniTabsCheckbox,
  title: 'Components/Checkbox/EniTabsCheckbox',
};

const Template = (args) => <EniTabsCheckbox {...args} />;


export const Default = Template.bind({});
Default.args = {
  title: "Label",
};
export const Checked = Template.bind({});
Checked.args = {
  icon: require("../../../styles/assets/images/oui.svg"),
  title: "Label",
  checked:true
};
export const Disabled = Template.bind({});
Disabled.args = {
  icon: require("../../../styles/assets/images/oui.svg"),
  title: "Label",
  disabled:true
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  icon: require("../../../styles/assets/images/oui.svg"),
  title: "Label",
  disabled:true,
  checked:true
};
