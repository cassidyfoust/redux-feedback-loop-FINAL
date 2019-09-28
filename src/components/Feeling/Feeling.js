import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Button, createMuiTheme , MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme ({
    overrides: {
        MuiButton: {
            root: {
                margin: "10px",
                padding: "10px"
            }
        }
    }
});

class Feeling extends Component {

    state = {
        feeling: ''
    }

    handleClick = () => {
        console.log(this.state)
        if (this.state.feeling === ''){
            alert('You must evaluate your feelings.')
        }
        else {
            this.props.dispatch({ type: 'ADD_FEELING', payload: this.state })
            this.props.history.push('/understanding')
        }
    }

    handleChange = (event) => {
            this.setState({
                feeling: event.target.value})
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
            <div className="component">
                <h2>How are you feeling today?</h2>
                </div>
            <div className="component">
                <TextField
                    id="standard-number"
                    label="Feeling?"
                    // value={values.age}
                    onChange={(event) => this.handleChange(event)}
                    type="number"
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
export default connect()(Feeling);