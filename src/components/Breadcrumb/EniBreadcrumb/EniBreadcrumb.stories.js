import React from "react";

import EniBreadcrumb from "./EniBreadcrumb";

export default {
  component: EniBreadcrumb,
  title: "Components/Breadcrumb/EniBreadcrumb",
};

const Template = (args) => <EniBreadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  arianne: [
    { title: "level 1", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 2", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 3", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
  ],
  message: "Vous êtes ici :",
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  arianne: [
    { title: "level 1", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 2", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
    { title: "level 3", link: "https://www.youtube.com/watch?v=h5ehkuiZ9C4" },
  ],
  message: "",
};

