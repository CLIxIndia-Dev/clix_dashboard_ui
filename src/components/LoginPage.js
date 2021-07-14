import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
//import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tooltip from '@material-ui/core/Tooltip'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import { userActions } from '../redux/useractions';
import { userActionsLogin} from '../redux/fetchmodeactions'
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Redirect } from 'react-router-dom';
const school_image = require('../shared/school_image.jpg');
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

const useStyles = theme => ({
  root: {
    // height: '80vh',

  },
  image: {
    backgroundImage: `url(${school_image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: { 
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class LoginPage extends Component {
  constructor(props) {
         super(props);

         // reset login status
         this.props.dispatch(userActions.logout());

         this.state = {
             username: '',
             password: '',
             errorCall:'',
             errorCallUser:'',
             errorMessage: ' Username or Password is Incorrect!',
             submitted: false
         };

         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
    handleChange(e) {
            const { name, value } = e.target;
            this.setState({ [name]: value , errorMessage: "",errorCall: "", errorCallUser: null});
        }

    handleSubmit(e) {
            e.preventDefault();
            this.setState({ submitted: true });
            
            const { username, password , errorCall,errorCallUser,errorMessage } = this.state;
            const { dispatch } = this.props;
            //const { from } = this.props.location.state || { from: { pathname: '/' } };
            //const { loggedIn } = this.props;

            if (username && password) {
               dispatch(userActionsLogin.removeUser());

                dispatch(userActions.login(username, password,errorCall,errorCallUser));
            }
            if( password == !password || password === ''   ){
               this.setState({
     
                 errorCall: "Please choose valid password"
               })
            }
            if( username == !username || username === ''){
              this.setState({
                errorCallUser: "Please choose valid username "
              })
            }
            if(this.props.loginFailed){
              this.setState({
                errorMessage: "Username or Password is incorrect"
              })
            }
           
        }

 render(){

  
   const { classes } = this.props;
   
   const { loggingIn, loggedIn, loginFailed } = this.props;
   const { username, password, submitted, errorCall } = this.state;
   const { from } = this.props.location.state || { from: { pathname: '/schoolviz' } };

   if (loggedIn) return <Redirect to={from.pathname} />
  
   return (
     <MuiThemeProvider theme = {theme}>
     <Grid container component="main" className={classes.root}>
     <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              // errorCall = {this.state.errorCallUser.length === 0 ? false : true}
              helperText = { this.state.errorCallUser }
              required
              fullWidth
              id="username"
              label="CLIx School Id"
              name="username"
              autoComplete="username"
              autoFocus
              onChange = {this.handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              // errorCall ={this.state.errorCall.length === 0 ? false : true }
              helperText={this.state.errorCall} 
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            
              error={this.state.error}
            />
        
            {loginFailed ? <div style= {{color: 'red'}} e> {this.state.errorMessage}</div> : ""}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Tooltip title="Sign In">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit} 
            >
              Sign In
            </Button>
            </Tooltip>
            <p>Note: Don't have login ID? Please write to us at <a href="mailto:contact@clix.tiss.edu" target="_blank"> contact@clix.tiss.edu </a> </p> 
          </form>
        </div>
      </Grid>
    </Grid>
    </MuiThemeProvider>
  );
 }
}

function mapStateToProps(state) {
    const { loggingIn, loggedIn, loginFailed } = state.authenticate;
    return {
        loggingIn,
        loggedIn,
        loginFailed
    };
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(useStyles),
	connect(mapStateToProps))(LoginPage);

//const connectedLoginPage = connect(mapStateToProps)(LoginPage);
//export { connectedLoginPage as LoginPage };
//export default withStyles(useStyles)(LoginPage);
