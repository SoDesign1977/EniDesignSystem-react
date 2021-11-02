import React from 'react';

import EniModale from './EniModale';

export default {
  component: EniModale,
  title: "Components/Modale/EniModale",
};

const Template = args => <EniModale {...args} />;

export const SuccessDefault = Template.bind({});
SuccessDefault.args = {
	state:"success",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:false,
	closeAction:()=>{}
};

export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
	state:"error",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:false,
	closeAction:()=>{}
};
export const InfoDefault = Template.bind({});
InfoDefault.args = {
	state:"info",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:false,
	closeAction:()=>{}
};
export const PlainDefault = Template.bind({});
PlainDefault.args = {
	state:"plain",
	title: 'Message principal, texte dynamique',
	closeButton:true,
	openStatus:false,
	closeAction:()=>{}
};
