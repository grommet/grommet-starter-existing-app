# Grommet Starter - Existing App

Welcome :tada:! Thanks for your interest in using Grommet in your existing application.
This repository is a step-by-step guide on how to successfully integrate Grommet in your workflow.

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

This is the application we are going to use as a reference to add Grommet in.

`src/pages/index.js` is the only module in this example (to keep things simple). All the steps from here on will just assume you are inside `src/page/index.js`.

## Adding Grommet

To add grommet you first need to install our packages

```bash
npm install grommet grommet-icons styled-components --save
```

You can now add the import of the `Grommet` component.

```diff
import { withStyles } from '@material-ui/core/styles';
+ import { Grommet } from 'grommet';
```

Typically, you should include Grommet only once as one of your top-level nodes.
Let's replace `React.Fragment` with `Grommet` inside `src/pages/index.js`.

```diff
- <React.Fragment>
+ <Grommet plain>
  <CssBaseline />
  ...
- </React.Fragment>
+ </Grommet>
```

Nothing should change by including Grommet with `plain` prop.
Everything in Grommet is self-contained with very minimal global settings.

You should be asking why you are including it if nothing is changing.
The answer for this question is simple. Although not strictly required,
we recommend you add `Grommet` from day one, so that you can customize it
in the future by using the theme.

Let's now remove `plain` from Grommet and add a custom font-family, font-size, and line-height.

```javascript
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

<Grommet theme={theme}>
```

This theme will propagate to all components under this given `Grommet` instance.
Keep in mind that this change would not affect most of the text inside this example since Material UI
is setting the styles for their typography. We intentially left a `p` tag where you can see
this change in action.

## Using Box

[Box](https://v2.grommet.io/box) is an abstraction over [Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and it is very likely you will be using it all over the place in your Grommet app.

To use Box we first need to import it:

```diff
- import { Grommet } from 'grommet';
+ import { Box, Grommet } from 'grommet';
```

We like to keep our imports in alphabetical order :smile:.

Let's replace `AppBar` and `Toolbar` with Grommet Boxes.

```diff
+const AppBar = (props) => (
+  <Box
+    tag='header'
+    direction='row'
+    align='center'
+    justify='between'
+    background='light-2'
+    pad={{ vertical: 'small', horizontal: 'medium' }}
+    elevation='medium'
+    {...props}
+  />
+);

-<AppBar position="static" color="default" className={classes.appBar}>
- <Toolbar>
+<AppBar>
- <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
+ <Typography variant="h6" color="inherit" noWrap>
    Company name
  </Typography>
+ <Box direction='row'>
    <Button>Features</Button>
    <Button>Enterprise</Button>
    <Button>Support</Button>
    <Button color="primary" variant="outlined">
      Login
    </Button>
+ </Box>
- </Toolbar>
</AppBar>
```

You are now in full control over AppBar since the component lives
in your application. AppBar is just a Box with `row` direction that has 2 children.
These elements are justified `between` (a space will be added in between them) so that the title is on the left and the buttons are on the right. We add an `elevation` to simulate the same box-shadow from the original example.

You can now start noticing a few differences in the header size, elevation, and colors. By default grommet comes with a 24px base spacing unit scale. So `small` is 12px and `medium` is `24px`. It seems that `small` in Material UI is `14px`. Let's change our theme object to align better with Material UI.

```diff
const theme = {
  global: {
+   colors: {
+     'light-2': '#f5f5f5',
+     'text': {
+       light: 'rgba(0, 0, 0, 0.87)',
+     },
+   },
+   edgeSize: {
+     small: '14px',
+   },
+   elevation: {
+     light: {
+       medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
+     },
+   },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};
```

We now have a 1:1 parity with the original example.

We change the app font color through the `colors.text` entry. Keep in mind that you can create colors with any name, `light-2` was just an example. You can also add new `edgeSize` and `elevation` names, for example:

```javascript
const anotherTheme = {
  global: {
    edgeSize: {
      smallish: '14px',
    },
    elevation: {
      depth5: '0 0 1px 0 rgba(0,0,0,0.10), 0 2px 4px 0 rgba(0,0,0,0.10)',
    },
  },
};

<Grommet theme={anotherTheme}>
  <Box margin={{ top: 'smallish' }} elevation='depth5'>
    Hello Grommet!
  </Box>
</Grommet>
```

We can now start cleaning up few unused variables:

```diff
- import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
- import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
- appBar: {
-   position: 'relative',
- },
- toolbarTitle: {
-   flex: 1,
- },
  ...
}
```
More to come...
