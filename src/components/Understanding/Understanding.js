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

class Understanding extends Component {

    state = {
        understanding: 0
    }

    handleClick = () => {
        console.log('clicked next!', this.state)
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/support')
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
        })
    }
    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>How well are you understanding the content?</h2>
                    </div>
                    <div className="component">
                        <TextField
                            id="standard-number"
                            label="Understanding?"
                            // value={values.age}
                            // onChange={handleChange('age')}
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
export default connect()(Understanding);