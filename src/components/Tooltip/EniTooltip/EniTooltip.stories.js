import React from 'react';

import EniTooltipBottom from './EniTooltip';
import EniButtonPrimary from '../../Button/EniButtonPrimary/EniButtonPrimary';
export default {
  component: EniTooltipBottom,
  title: 'Components/Tooltip/EniTooltip',
};

const Template = args => <EniTooltipBottom {...args} />;

export const TopDefault = Template.bind({});
TopDefault.args = {
  state:"top",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
  children:<EniButtonPrimary title="ButtonTest"></EniButtonPrimary>
};

export const BottomDefault = Template.bind({});
BottomDefault.args = {
  state:"bottom",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
  children:<EniButtonPrimary title="ButtonTest"></EniButtonPrimary>
};
export const LeftDefault = Template.bind({});
LeftDefault.args = {
  state:"left",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
  children:<EniButtonPrimary title="ButtonTest"></EniButtonPrimary>
};
export const RightDefault = Template.bind({});
RightDefault.args = {
  state:"right",
  title:"Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
  children:<EniButtonPrimary title="ButtonTest"></EniButtonPrimary>
};

