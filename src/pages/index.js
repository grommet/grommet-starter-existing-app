import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button as GrommetButton, Grommet } from 'grommet';
import { rgba } from 'polished';
import { normalizeColor } from 'grommet/utils';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

const theme = {
  global: {
    colors: {
      'light-2': '#f5f5f5',
      'text': {
        'light': 'rgba(0, 0, 0, 0.87)',
      },
      'primary': '#3f51b5',
    },
    edgeSize: {
      small: '14px',
    },
    elevation: {
      light: {
        medium: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      },
    },
    font: {
      size: '14px',
      height: '20px',
    },
  },
  button: {
    border: {
      width: '1px',
      radius: '4px',
    },
    padding: {
      vertical: '8px',
      horizontal: '16px',
    },
    extend: props => `
      text-transform: uppercase;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: normal;

      ${!props.primary && `
        border-color: ${rgba(normalizeColor(props.colorValue, props.theme), 0.5)};
        color: ${normalizeColor(props.colorValue, props.theme)};
        :hover {
          box-shadow: none;
          background-color: ${rgba(normalizeColor(props.colorValue, props.theme), 0.08)};
        }
      `}

    `,
  },
};

const AppHeader = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='light-2'
    pad={{ vertical: 'small', horizontal: 'medium' }}
    elevation='medium'
    {...props}
  />
);

function Pricing(props) {
  const { classes } = props;

  return (
    <Grommet theme={theme}>
      <CssBaseline />
      <AppHeader>
        <Typography variant="h6" color="inherit" noWrap>
          Company name
        </Typography>
        <Box direction='row'>
          <Button>Features</Button>
          <Button>Enterprise</Button>
          <Button>Support</Button>
          <GrommetButton color="primary" label='Login' />
        </Box>
      </AppHeader>
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Pricing
          </Typography>
          <p style={{ color: 'rgba(0, 0, 0, 0.54)', textAlign: 'center' }}>
            Quickly build an effective pricing table for your potential customers with this layout.
            It&apos;s built with default Material-UI components with little customization.
          </p>
        </div>
        {/* End hero unit */}
        <Grid container spacing={40} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <div /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  {tier.description.map(line => (
                    <Typography variant="subtitle1" align="center" key={line}>
                      {line}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions className={classes.cardActions}>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
      {/* Footer */}
      <footer className={classNames(classes.footer, classes.layout)}>
        <Grid container spacing={32} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              {footer.description.map(item => (
                <Typography key={item} variant="subtitle1" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </footer>
      {/* End footer */}
    </Grommet>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pricing);