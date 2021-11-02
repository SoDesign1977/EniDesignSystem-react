import React from 'react';

import Grid from "./Grid";

export default {
  component: Grid,
  title: 'Components/Grid/Grid',
};

const Template = args => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {};


