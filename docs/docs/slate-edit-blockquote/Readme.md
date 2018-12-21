# @guestbell/slate-edit-blockquote

[![npm version](https://badge.fury.io/js/%40guestbell%2Fslate-edit-blockquote.svg)](https://badge.fury.io/js/%40guestbell%2Fslate-edit-blockquote)

A Slate plugin to handle keyboard events in blockquotes. Blockquotes can contain blocks.

### Install

```
yarn add slate-edit-blockquote
```

### Features

Natural keybindings:

- Pressing <kbd>Enter</kbd> in an empty block of a blockquote, exits the blockquote
- Pressing <kbd>Backspace</kbd> at the start of a block in a blockquote, unwraps from the blockquote

### Simple Usage

```js
import EditBlockquote from '@guestbell/slate-edit-blockquote'

const plugins = [
  EditBlockquote()
]
```

#### Arguments

This plugin accepts options to redefine the following block types:

- ``[type: String]`` — type for blockquotes
- ``[typeDefault: String]`` — type for default block in blockquote.

### Utilities

`slate-edit-blockquote` exports utilities and changes:

#### `utils.isSelectionInBlockquote`

`plugin.utils.isSelectionInBlockquote(value: Value) => Boolean`

Return true if selection is inside a blockquote (and it can be unwrap).

#### `changes.wrapInBlockquote`

`plugin.changes.wrapInBlockquote(change: Change) => Change`

Wrap current block in a new blockquote.

#### `changes.unwrapBlockquote`

`plugin.changes.unwrapBlockquote(change: Change) => Change`

Unwrap from current blockquote if any.
