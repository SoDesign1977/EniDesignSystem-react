import React from "react";

import EniSelectCheckbox from "./EniSelectCheckbox";

export default {
  component: EniSelectCheckbox,
  title:  "Components/Select/EniSelectCheckbox",
};

const Template = (args) => <EniSelectCheckbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  required: true,
  title: "test",
  placeholder: "PlaceHolder",
  items: [
    { value: "Bonjour" },
    { value: "Salut" },
    { value: "Yo",disabled:true },
    { value: "Hola" },
    { value: "Lenovo" },
    { value: "Mac" },
    { value: "Acer" },
    { value: "Asus" },
  ],
  disabled: false,
  name:"testx",
  errorMessage: "Champs Obligatoire",
};

export const Categories = Template.bind({});
Categories.args = {
  required: false,
  title: "test",
  placeholder: "PlaceHolder",
  items: [
    { value: "Bonjour", categorie: "Salutation" },
    { value: "Salut", categorie: "Salutation" },
    { value: "Yo", disabled: true, categorie: "Salutation" },
    { value: "Hola", categorie: "Salutation" },
    { value: "Lenovo", categorie: "Ordinnateurs" },
    { value: "Mac", categorie: "Ordinnateurs" },
    { value: "Acer", categorie: "Ordinnateurs" },
    { value: "Asus", categorie: "Ordinnateurs" },
  ],
  disabled: false,
  name:"testx",
  errorMessage: "Champs Obligatoire",
};

export const Disabled = Template.bind({});
Disabled.args = {
  required: true,
  title: "test",
  placeholder: "Disabled",
  items: [
    { value: "Bonjour", categorie: "Salutation" },
    { value: "Salut", categorie: "Salutation" },
    { value: "Yo", disabled: true, categorie: "Salutation" },
    { value: "Hola", categorie: "Salutation" },
    { value: "Lenovo", categorie: "Ordinnateurs" },
    { value: "Mac", categorie: "Ordinnateurs" },
    { value: "Acer", categorie: "Ordinnateurs" },
    { value: "Asus", categorie: "Ordinnateurs" },
  ],
  disabled: true,
  name:"testx",
  errorMessage: "Champs Obligatoire",
};
