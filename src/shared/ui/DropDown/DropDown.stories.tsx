import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'shared/ui/Button/Button';
import { DropDown } from './DropDown';

export default {
    title: 'shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: <Button>Open</Button>,
    items: [
        {
            value: '1',
            content: 'first',
        },
        {
            value: '2',
            disabled: true,
            content: 'second',
        },
        {
            value: '3',
            content: 'third',
        },
    ],
};
