import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import '../../../public/theme.css';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      description: 'Надпись на кнопке',
    },
    type: {
      description: 'HTML-тип кнопки',
    },
    disabled: {
      description: 'При значении true отключает кнопку',
    },
    onClick: {
      description:
        'Опциональный параметр, принимающий callback функцию для нажатия кнопки',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Button',
};
