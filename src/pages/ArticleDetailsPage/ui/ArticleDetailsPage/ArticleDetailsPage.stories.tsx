import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: '???/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = () => <ArticleDetailsPage />;

export const Normal = Template.bind({});
Normal.args = {
    children: 'Text',
};
