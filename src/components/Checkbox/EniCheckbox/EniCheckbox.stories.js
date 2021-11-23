import React from "react";

import EniCheckbox from "./EniCheckbox";

export default {
  component: EniCheckbox,
  title: 'Components/Checkbox/EniCheckbox',
};

const Template = (args) => <EniCheckbox {...args} />;


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
