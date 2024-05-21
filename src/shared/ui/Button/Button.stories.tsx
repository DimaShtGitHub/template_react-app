import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: 'Кнопка',
    theme: ThemeButton.CLEAR,
  },
};

Clear.decorators = [ThemeDecorator(Theme.LIGTH)];

export const ClearDark: Story = {
  args: {
    children: 'Кнопка',
    theme: ThemeButton.CLEAR,
  },
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
  args: {
    children: 'Кнопка',
    theme: ThemeButton.OUTLINE,
  },
};

Outline.decorators = [ThemeDecorator(Theme.LIGTH)];

export const OutlineDark: Story = {
  args: {
    children: 'Кнопка',
    theme: ThemeButton.OUTLINE,
  },
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export default meta;
