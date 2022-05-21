import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MuiButton } from './Button'

export default {
  title: 'MUI/Button',
  component: MuiButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MuiButton>

const Template: ComponentStory<typeof MuiButton> = (args) => (
  <MuiButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  label: 'Button',
  size: 'medium',
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  label: 'Button',
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  label: 'Button',
}

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  label: 'Button',
}
