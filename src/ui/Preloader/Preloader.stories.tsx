import { ComponentStory, ComponentMeta } from '@storybook/react';
import Preloader from './Preloader';
import '../../../public/theme.css';

export default {
  title: 'Preloader',
  component: Preloader,
  argTypes: {
    color: {
      description: 'Цвет загрузки',
    },
  },
} as ComponentMeta<typeof Preloader>;

const Template: ComponentStory<typeof Preloader> = (args) => (
  <Preloader {...args} />
);

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
};

export const White = Template.bind({});
White.args = {
  color: 'white',
};
