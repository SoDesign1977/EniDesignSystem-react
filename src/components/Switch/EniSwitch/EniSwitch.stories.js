import React from "react";

import EniSwitch from "./EniSwitch";

export default {
  component: EniSwitch,
  title: "Components/Switch/EniSwitch",
};

const Template = (args) => <EniSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Label",
};
export const Checked = Template.bind({});
Checked.args = {
  title: "Label",
  checked:true
};
export const Disabled = Template.bind({});
Disabled.args = {
  title: "Label",
  disabled:true
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  title: "Label",
  disabled:true,
  checked:true
};
