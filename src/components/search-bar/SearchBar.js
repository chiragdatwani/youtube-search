import React from "react";

import TextField from "@material-ui/core/TextField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

class SearchBar extends React.Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div className="search-bar">
        <ThemeProvider theme={darkTheme}>
          <form
            action="submit"
            onSubmit={(e) => {
              e.preventDefault();
              this.props.handleSubmit(this.state.value);
            }}
          >
            <TextField
              id="filled-secondary"
              label="Search Video"
              variant="outlined"
              color="primary"
              value={this.state.value}
              onChange={(e) => {
                this.setState({ value: e.target.value });
              }}
            />
          </form>
        </ThemeProvider>
      </div>
    );
  }
}

export default SearchBar;
