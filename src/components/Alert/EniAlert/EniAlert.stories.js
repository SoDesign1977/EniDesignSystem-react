import React from "react";

import EniAlert from "./EniAlert";

export default {
  component: EniAlert,
  title: "Components/Alert/EniAlert",
};

const Template = (args) => <EniAlert {...args} />;

export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
  state: "success",
  message: "Contenu du message d'information",
};

export const SuccessLinkText = Template.bind({});
SuccessLinkText.args = {
  state: "success",
  message: "Contenu du message d'information",
  linkMessage: "En savoir plus",
  linkUrl: "http://www.google.fr",
  inline:true,
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  state: "error",
  message: "Contenu du message d'information",
 
};

export const ErrorLinkText = Template.bind({});
ErrorLinkText.args = {
  state: "error",
  message: "Contenu du message d'information",
  linkMessage: "En savoir plus",
  linkUrl: "http://www.google.fr",
  inline:false,
};

export const InfoDefault = Template.bind({});
InfoDefault.args = {
  state: "info",
  message: "Contenu du message d'information",
};

export const InfoLinkText = Template.bind({});
InfoLinkText.args = {
  state: "info",
  message: "Contenu du message d'information",
  linkMessage: "En savoir plus",
  linkUrl: "http://www.google.fr",
};
