import React from 'react';

import { Header } from '@az-bootstrap-components/react'

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
};
