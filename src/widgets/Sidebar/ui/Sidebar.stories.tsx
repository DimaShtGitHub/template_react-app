import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'widget/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Sidebar>;

export const Ligth: Story = {
  args: {},
};

// Ligth.decorators = [ThemeDecorator(Theme.LIGTH)];

// export const Dark: Story = {
//   args: {},
// };

// Dark.decorators = [ThemeDecorator(Theme.DARK)];

export default meta;
