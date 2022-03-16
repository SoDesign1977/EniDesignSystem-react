import React from "react";

import EniListCheckbox from "./EniListCheckbox";

export default {
  component: EniListCheckbox,
  title: 'Components/Checkbox/EniListCheckbox',
};

const Template = (args) => <EniListCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
legend:"Checkbox",
checkbox:[  
  {
    title: "Test1",
  },
  {
    title: "Test2",
    checked:true
  },
  {
    title: "Test3",
    disabled: true,
  },
  {
    title: "Test4",
    checked: true,
  },
  {
    title: "Test5",
    checked:true,
    disabled:true
  },
],
required: true
};
