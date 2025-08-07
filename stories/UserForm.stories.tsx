import type { Meta, StoryObj } from '@storybook/react';
import { UserForm } from '../components/forms/UserForm';

const meta: Meta<typeof UserForm> = {
    title: 'Forms/UserForm',
    component: UserForm,
};

export default meta;
type Story = StoryObj<typeof UserForm>;

export const Default: Story = {};
