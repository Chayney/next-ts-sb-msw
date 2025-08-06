import type { Preview } from '@storybook/react-webpack5';
import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [mswDecorator]
};

export default preview;