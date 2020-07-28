import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useTheme, StylesProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const App = () => {
  return (
    <StylesProvider>
      <CssBaseline />
      <Container>
        <Paper>
          <Box padding={5} textAlign="center">
            <Typography m={5} component="h1" variant="h3">
              CheckOut
            </Typography>
            <form noValidate autoComplete="off">
              <Grid spacing={3} container>
                <Grid item xs={6}>
                  <TextField fullWidth id="standard-basic" label="Standard" />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </StylesProvider>
  );
};

export default App;
