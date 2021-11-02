import React from "react";

import EniSelect from "./EniSelect";

export default {
  component: EniSelect,
  title: "Components/Select/EniSelect",
};

const Template = (args) => <EniSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  required: true,
  title: "test",

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
  errorMessage: "Champs Obligatoire",
};

export const Categories = Template.bind({});
Categories.args = {
  required: false,
  title: "test",

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
  errorMessage: "Champs Obligatoire",
};
