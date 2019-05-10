import React, { Component } from 'react';
import firebase from "firebase";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Redirect } from 'react-router-dom'

const styles = theme => ({
    main: {
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400
        },
    },
    paper: {
        marginTop: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
        color: 'white'
    },
    remind: {
        marginTop: theme.spacing.unit * 2,
        textAlign: 'center',
        color: 'rgb(130, 181, 201)',
        cursor: 'pointer'
    }
});

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        redirect: false,
    };

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/user-panel'/>
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.name]: event.target.value,
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(this.setRedirect)
            .catch(error => { alert(error.message) })
    };

    resetPassword = () => {
        var auth = firebase.auth();
        var emailAddress = this.state.email;

        this.state.email 
            ? auth.sendPasswordResetEmail(emailAddress)
                .then(() => alert('Link to password reset sent. Check your e-mail.'))
                .catch(error => alert(error))
            : alert('Wrong email address.')
    }

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input 
                                id="email" 
                                name="email"
                                onChange={this.handleChange} 
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                                name="password" 
                                type="password" 
                                id="password"
                                onChange={this.handleChange} 
                            />
                        </FormControl>
                        {this.renderRedirect()}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                        <Typography 
                            className={classes.remind}
                            onClick={this.resetPassword}
                        >
                            I don't remember my password.
                        </Typography>
                    </form>
                </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn); 