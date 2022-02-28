import React from 'react';

import EniNotation from "./EniNotation";

export default {
  component: EniNotation,
  title: 'Components/Notation/EniNotation',
};

const Template = args => <EniNotation {...args} />;

export const Default = Template.bind({});
Default.args = {
    rate: 4,
};
export const Black = Template.bind({});
Black.args = {
    rate: 4,
    state:"black"
};