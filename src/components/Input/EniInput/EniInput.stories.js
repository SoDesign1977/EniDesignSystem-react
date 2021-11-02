import React from 'react';

import EniInput from "./EniInput";

export default {
  component: EniInput,
  title: 'Components/Input/EniInput',
};

const Template = args => <EniInput {...args} />;

export const Default = Template.bind({});
Default.args = {

    title: 'Label',
    placeholder: 'Placeholder',
    errorMessage:"errorMessage",

};

export const Required = Template.bind({});
Required.args = {

    title: 'Label',
    errorMessage:"this is Required",
    placeholder: 'Placeholder',
    required:true

};

export const Disabled = Template.bind({});
Disabled.args = {
 
    title: 'Disabled',
    errorMessage:"errorMessage",
    placeholder: 'Input disabled',
    disabled: true,

};
const TemplateError = args => <EniInput {...args} />;
export const Error = TemplateError.bind({});
Error.args = {

    title: 'Email',
    errorMessage:"Is not an Email",
    type:"email",
    required:true,
    maxLength:10,
    placeholder:"(onChange in the console)",
    onChange:(input)=>{
    console.log(input.value)
    },

};
