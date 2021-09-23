import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import { Button } from './Button';

export default {
  title: 'Example/Button',
  parameters: {
    assets: [
      'https://www.figma.com/file/jOxUmFHa6YS2ezrztJmdJs/Sort-column-in-preview-mode?node-id=0%3A1', // link to a webpage
    ],
  },
  component: Button,
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

Secondary.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/jOxUmFHa6YS2ezrztJmdJs/Sort-column-in-preview-mode?node-id=0%3A1',
  },
}

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
