import React from 'react';
import { v1 } from 'uuid';
import {Post, PostType} from "./post";
import { Meta } from "@storybook/react/types-6-0";

export default {
    title: 'Example/Post',
    component: Post,
    argTypes: {

    },
} as Meta;

const Template = (args: PostType) => <Post {...args} />;

export const HaveLikes = Template.bind({});
// @ts-ignore
HaveLikes.args = {
    id: v1(),
    message: "This is a test message",
    likesCount: 10
};

export const NoLikes = Template.bind({});
// @ts-ignore
NoLikes.args = {
    id: v1(),
    message: "This is a test message",
    likesCount: 0
};