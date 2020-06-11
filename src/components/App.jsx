import React from "react";
import Table from "./Table";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <Grid
      co
      ntainer
      justify="flex-end"
      style={{
        width: "70%",
        alignSelf: "center",
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "4%",
      }}
    >
      <Table />
    </Grid>
  );
};
export default App;
