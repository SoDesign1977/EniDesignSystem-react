
import '!style-loader!css-loader!sass-loader!./fonts.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/index.scss';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}