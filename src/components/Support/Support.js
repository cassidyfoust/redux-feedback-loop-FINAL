import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: "10px",
                padding: "10px"
            }
        }
    }
});

class Support extends Component {

    state = {
        support: 0
    }

    handleClick = () => {
        console.log('clicked next!', this.state)
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
        this.props.history.push('/comments')
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
        })
    }
    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>How well are you being supported?</h2>
                    </div>
                    <div className="component">
                        <TextField
                            id="standard-number"
                            label="Support?"
                            // value={values.age}
                            onChange={(event) => this.handleChange(event)}
                            type="number"
                            // className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            required={true}
                        />
                        <Button className="btn" variant="contained" color="primary" onClick={this.handleClick}>
                            Next
                    </Button>
                    </div>
                </MuiThemeProvider>
            </>
        )
    };
}
export default connect()(Support);