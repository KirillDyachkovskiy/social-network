import { BrowserRouter } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Message from './Message';
import '../../../public/theme.css';

export default {
  title: 'Message',
  component: Message,
  argTypes: {
    children: {
      description: 'Текст сообщения',
    },
    type: {
      description: 'Тип сообщения - получаемое или исходящее',
    },
    sender: {
      description: 'ID отправителя сообщения',
    },
    photo: {
      description: 'Фотография отправителя',
    },
    name: {
      description: 'Имя отправителя',
    },
  },
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <BrowserRouter>
    <Message {...args} />
  </BrowserRouter>
);

export const From = Template.bind({});
From.args = {
  children: 'Message',
  type: 'from',
  sender: 1,
};

export const To = Template.bind({});
To.args = {
  children: 'Message',
  type: 'to',
  sender: 1,
};

export const Named = Template.bind({});
Named.args = {
  children: 'Message',
  type: 'from',
  name: 'Иван Иванов',
  sender: 1,
};
