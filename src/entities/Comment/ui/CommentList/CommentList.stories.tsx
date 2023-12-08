import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'comment 1',
            user: { id: '1', username: 'user1' },
        },
        {
            id: '2',
            text: 'comment 2',
            user: { id: '2', username: 'user2' },
        },
    ],
};
export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
