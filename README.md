# React Interface Components

## Checkbox

A checkbox which can have a label.

### Props
#### checked: boolean
Defines the checkbox's checked state.
Default value: false

#### children: JSX.Element
The checkbox's box. An element can be passed to create a custom box. If no children are passed, the default system box is used.
Default value: undefined

#### label: JSX.Element
The element to be used as label.
Default value: undefined

#### labelPosition: 'right' | 'left' | 'top' | 'bottom'
The position of the label relative to the box.
Default value: 'right'

#### name: string
The name property to be applied to the checkbox.
Default value: undefined

#### onChecked: e => void
Callback function to be called when the checkbox is checked.
Default value: undefined

#### onUnchecked: e => void
Callback function to be called when the checkbox is unchecked.
Default value: undefined

#### onToggle: (nextChecked, e) => void
Callback function to be called when the checkbox is checked or unchecked.
Default value: undefined