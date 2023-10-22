# React Simple Odometer

A lightweight and flexible odmoter library that allows user to build simple functional odometer. This react library is built using react.js, scss and adheres to latest ECMAScript specs. This library is intended to be used along with react.js.

Supports IE10+, all major browsers and mobile devices. You can view live demo [here](https://simpleodometerdemo.netlify.app/). If you have any issues, please follow this [link](https://github.com/Bivektamu/react-odometer-library/issues).

## Inspiration

Originally, this was a pure vanilla js module which I had developed and used in many projects for my clients. I tried to look for similar package in npm library for my react project but I couldn't find it so I simply created it myself. I have added options to have more control over odomter such as number to display, custom class name for control on styling, animation speed, styles and gaps.


## Installation

You can install this package using below command:

```bash
npm install react-simple-odometer
```
or
```bash
npm install --save-dev react-simple-odometer
```


**Note**: You are to use this library along with react.js, since it is a pure react component under the hood.

## Usage

Import the Odometer component library in your desired react component using following code:


```javascript

import {Odometer} from 'react-simple-odometer'

```

Then, simply use it with below code.


```javascript

<Odometer num = '9384756' classN="odo1" animationSpeed={3} animationTimingStyles = 'cubic-bezier(0.45, 0, 0.55, 1)' gap={20} />

```


## Props || Options

Below are the options to odometer component as per requirement:

**`num {type: integar || string}`**: number to display **`*Required`**

**`classN {type: string}`**: custom class passed to odometer for styling

**`animationSpeed {type: integar}`**: sets the speed of animation, in seconds **`Default" 4 || 4s`**

**`animationTimingStyles {type:string}`** : sets easing of animation. You can have pass any easing value such as linear, ease out, ease in, or any cubic beizer values. **`Default: cubic-bezier(0.45, 0, 0.55, 1)`**

**`reverse {type: boolean}`**: sets the animation to reverse **`Default: false`**


## App Info
### Author
Bivek Jang Gurung