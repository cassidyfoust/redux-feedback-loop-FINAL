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

class Comments extends Component {

    state = {
        comments: ''
    }

    handleClick = () => {
        console.log('clicked next!', this.state)
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
        this.props.history.push('/review')
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>Any comments you want to leave?</h2>
                    </div>
                    <div className="component">
                        <TextField
                            required
                            id="standard-required"
                            label="Comments?"
                            defaultValue=" "
                            onChange={(event) => this.handleChange(event)}
                            margin="normal"
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
export default connect()(Comments);