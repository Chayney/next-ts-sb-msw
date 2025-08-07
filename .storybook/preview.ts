import type { Preview } from '@storybook/react-webpack5';
import { initialize, mswDecorator } from "msw-storybook-addon";
import { handlers } from '../mocks/handlers';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers,
    },
  },
  decorators: [mswDecorator]
};

export default preview;