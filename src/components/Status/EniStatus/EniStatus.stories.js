import React from "react";

import EniStatus from "./EniStatus";

export default {
  component: EniStatus,
  title: "Components/Status/EniStatus",
};

const Template = (args) => <EniStatus {...args} />;

export const DisabledDefault = Template.bind({});
DisabledDefault.args = {
  state: "disabled",
  message: "Contenu du message d'information",
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  state: "error",
  message: "Contenu du message d'information",
};

export const RejectedDefault = Template.bind({});
RejectedDefault.args = {
  state: "rejected",
  message: "Contenu du message d'information",
};

export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
  state: "success",
  message: "Contenu du message d'information",
};