import { I18nModule } from '@lib/common'
import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs'
import { Meta, moduleMetadata } from '@storybook/angular'
import { CheckboxInputComponent } from './checkbox-input.component'

const moduleMetadatas = {
  imports: [I18nModule],
}

export default {
  title: 'UI/Facet',
  decorators: [moduleMetadata(moduleMetadatas), withKnobs, withA11y],
} as Meta

export const CheckboxInputStory = () => ({
  component: CheckboxInputComponent,
  props: {
    label: text('label', 'my label'),
    count: number('count', 0),
    selected: boolean('selected', false),
    inverted: boolean('inverted', false),
    selectedChange: action('output'),
    invertedChange: action('output'),
  },
})
CheckboxInputStory.storyName = 'Checkbox input'