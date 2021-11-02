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
  },
  {
    title: "Test3",
    disabled: true,
  },
  {
    title: "Test4",
    checked: true,
    required:true
  },
  {
    title: "Test5",
  },
],
required: true
};
