import React from "react";

import EniSquareCheckbox from "./EniSquareCheckbox";

export default {
  component: EniSquareCheckbox,
  title: "Components/Square/Checkbox/EniSquareCheckbox",
};

const Template = (args) => <EniSquareCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  title:"Oui"
};

export const Disabled = Template.bind({});
Disabled.args = {
disabled:true,
title:"disabled"
};
