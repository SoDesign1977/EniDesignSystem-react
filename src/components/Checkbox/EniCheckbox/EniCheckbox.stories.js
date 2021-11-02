import React from "react";

import EniCheckbox from "./EniCheckbox";

export default {
  component: EniCheckbox,
  title: 'Components/Checkbox/EniCheckbox',
};

const Template = (args) => <EniCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
title:"Checkbox",

};
