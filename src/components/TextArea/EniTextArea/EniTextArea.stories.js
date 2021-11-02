import React from 'react';


import EniTextArea from "./EniTextArea";

export default {
  component: EniTextArea,
  title: 'Components/TextArea/EniTextArea',
};

const Template = args => <EniTextArea {...args} />;

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

export const Error = Template.bind({});
Error.args = {
    title: 'Type Something',
    errorMessage:"le text doit faire entre 5 et 10 character",
    minLength:5,
    required:false,
    maxLength:10,
    placeholder:"(onChange in the console)",
    onChange:(input)=>{
    console.log(input.value)
    },
};
