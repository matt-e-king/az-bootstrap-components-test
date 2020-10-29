import React from 'react';

import { Button } from '@az-bootstrap-components/react'

export default {
  title: 'Example/Button',
  component: Button,
};

const Template = (args) => <Button {...args} >{args.label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};
