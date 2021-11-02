import React from "react";

import EniButton from "./EniButton";

export default {
  component: EniButton,
  title: "Components/Button/EniButton",
};

const Template = (args) => <EniButton {...args} />;
export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  state: "primary",
  title: "EniButton",
};
export const PrimaryArrow = Template.bind({});
PrimaryArrow.args = {
  state: "primary",
  title: "EniButton",
  arrow: true,
};
export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  state: "primary",
  title: "disabled EniButton",
  disabled: true,
};
export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  state: "secondary",
  title: "EniButton",
};
export const SecondaryArrow = Template.bind({});
SecondaryArrow.args = {
  state: "secondary",
  title: "EniButton",
  arrow: true,
};
export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  state: "secondary",
  title: "disabled EniButton",
  disabled: true,
};

export const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
  state: "tertiary",
  title: "EniButton",
};
export const TertiaryArrow = Template.bind({});
TertiaryArrow.args = {
  state: "tertiary",
  title: "EniButton",
  arrow: true,
};
export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  state: "tertiary",
  title: "disabled EniButton",
  disabled: true,
};

export const PlainDefault = Template.bind({});
PlainDefault.args = {
  state: "plain",
  title: "EniButton",
};
export const PlainArrow = Template.bind({});
PlainArrow.args = {
  state: "plain",
  title: "EniButton",
  arrow: true,
};
export const PlainDisabled = Template.bind({});
PlainDisabled.args = {
  state: "plain",
  title: "disabled EniButton",
  disabled: true,
};


