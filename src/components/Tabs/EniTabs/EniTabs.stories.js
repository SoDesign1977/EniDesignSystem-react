import React from 'react';

import EniTabs from './EniTabs';

export default {
  component: EniTabs,
  title: 'Components/Tabs/EniTabs',
};

const Template = args => <EniTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs:[{
    icon: require("../../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: require("../../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: require("../../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>)
  },
  {
    icon: require("../../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: require("../../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: require("../../../styles/assets/images/gaz_elec.svg"),
    title:"Electricité",
    components:(<h1>Hello</h1>)
  },
  

]
  };

