import { Component } from "react";
import { Box, Toolbar, AppBar, Typography } from "@mui/material";
import { URLContext } from "../../nonview/base";

export default class AbstractCustomPage extends Component {
  constructor(props) {
    super(props);
    const contextValues = URLContext.getValues();
    this.state = {
      contextValues,
    };
  }

  static getPageID() {
    throw new Error("Not implemented");
  }

  get title() {
    return "title: Not implemented";
  }

  renderBody() {
    return "renderBody: Not implemented";
  }

  render() {
    return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">{this.title}</Typography>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            position: "fixed",
            top: 100,
            bottom: 64,
            left: 0,
            right: 0,
            zIndex: 1000,
            overflow: "scroll",
          }}
        >
          {this.renderBody()}
        </Box>
      </Box>
    );
  }
}
