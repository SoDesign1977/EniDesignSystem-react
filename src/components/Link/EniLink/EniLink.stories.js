import React from 'react';

import EniLink from "./EniLink";

export default {
  component: EniLink,
  title: 'Components/Link/EniLink',
};

const Template = args => <EniLink {...args} />;

export const Default = Template.bind({});
Default.args = {
    arrow:false,
    title: 'Label',
    href: 'Placeholder',
    disabled:false,
};

