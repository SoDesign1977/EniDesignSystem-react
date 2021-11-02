import React from 'react';

import EniTabs from './EniTabs';
import ReactLogo from '../../../styles/assets/images/gaz_elec.svg';

export default {
  component: EniTabs,
  title: 'Components/Tabs/EniTabs',
};

const Template = args => <EniTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs:[{
    icon: ReactLogo,
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: ReactLogo,
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: ReactLogo,
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>)
  },
  {
    icon: ReactLogo,
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: ReactLogo,
    title:"Electricité",
    components:(<p>Fusce molestie tellus in sapien pulvinar, faucibus volutpat leo viverra. Sed vulputate</p>),
    disabled:true
  },
  {
    icon: ReactLogo,
    title:"Electricité",
    components:(<h1>Hello</h1>)
  },
  

]
  };

