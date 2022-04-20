import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';
import '../../../public/theme.css';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    id: {
      description: 'HTML-id чекбокса',
    },
    checked: {
      description: 'Параметр отвечает на то, выбран ли чекбокс',
    },
    onChange: {
      description: 'Принимает callback функцию для изменеия состояние чекбокса',
    },
    label: {
      description: 'Подпись к чекбоксу',
    },
    disabled: {
      description: 'При значении true отключает чекбокс',
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: '1',
  onChange: () => {},
  label: 'Checkbox',
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: '1',
  onChange: () => {},
  label: 'Checkbox',
  disabled: true,
};

export const Checked = Template.bind({});
Checked.args = {
  id: '1',
  onChange: () => {},
  label: 'Checkbox',
  checked: true,
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  id: '1',
  onChange: () => {},
  label: 'Checkbox',
  checked: true,
  disabled: true,
};
