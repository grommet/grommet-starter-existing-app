# Grommet Starter - Existing App

Welcome :tada:! Thanks for your interest in using Grommet in your existing application.
This repository is a step-by-step guide on how successfully integrate Grommet in your workflow.

:warning: This tutorial is still being created and not ready for consumption.

## Getting Started

Clone or fork this example in your local machine.

```bash
git clone https://github.com/grommet/grommet-starter-existing-app.git my-app
cd my-app
```

Install dependencies and start the development server.

```bash
npm install
npm run start
```

You should see a [Material UI](https://material-ui.com) example pricing page.

![Sample App Screenshot](https://raw.githubusercontent.com/grommet/grommet-starter-existing-app/master/public/app_screenshot.png)

This is the application we are going to use as a reference to add Grommet.

## Adding Grommet

To add grommet you first need to install our packages

```bash
npm install grommet@^2.0.0-rc grommet-icons styled-components --save
```

You can now add the import of the `Grommet` component in `src/pages/index.js`.

```diff
import { withStyles } from '@material-ui/core/styles';
+ import { Grommet } from 'grommet';
```

Typically, you should include Grommet only once as one of your top-level nodes.
Let's replace `React.Fragment` with `Grommet` inside `src/pages/index.js`.

```diff
- <React.Fragment>
+ <Grommet>
  <CssBaseline />
  ...
- </React.Fragment>
+ </Grommet>
```

Nothing should change by including Grommet.
Everything in Grommet is self-contained with very minimal global settings.

You should be asking why you are including it if nothing is changing.
The answer for this question is simple. Although not strictly required,
we recommend you add `Grommet` from day one, so that you can customize it
in the future by using the theme, for example:

```javascript
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
}

<Grommet theme={theme}>
```

This will change the base font size and line height for everything under `Grommet`.
Keep in mind that this would not affect most of the text in this example since Material UI
is setting the styles for their typography. We intentially left a `p` tag where you can see
this change in action.