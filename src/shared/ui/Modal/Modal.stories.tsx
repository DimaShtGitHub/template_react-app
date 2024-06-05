import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../app/providers/ThemeProviders/index';
import { Modal } from './Modal';

export default {
  title: 'widget/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalOpen = Template.bind({});
ModalOpen.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, debitis vel. Harum necessitatibus vero minus quidem!',
  isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, debitis vel. Harum necessitatibus vero minus quidem!',
  isOpen: true,
  theme: Theme.DARK,
};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
