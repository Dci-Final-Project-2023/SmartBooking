import { useContext, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import AuthContext from "../../store/AuthContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        SmartBooking
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const { state, setState } = useContext(AuthContext);

  console.log(state.isAuthenticated)

  React.useEffect(() => {
    if (state.isAuthenticated) return Navigate("/");
    setState({ ...state, isAuthenticated: false, error: "" });
  }, []);

  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState(false);

  const url = import.meta.env.VITE_API_LOGIN_USER;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setInputFields(false);
      const data = new FormData(event.currentTarget);
      const user = {
        email: data.get("email"),
        password: data.get("password"),
      };
      // if ((data.get("password") && data.get("email")) === "") {
      //   setInputFields(true);
      //   return;
      // }
      const res = await axios.post(url, user);
      setState({
        ...state,
        user: res.data.user,
        token: res.data.token,
        isAuthenticated: true,
      });
      localStorage.setItem("token", res.data.token);
    } catch (error) {

      console.log(error.response);
      setState({ ...state, isAuthenticated: false, error: error.response.data.message });

    }
  };

  if (state.isAuthenticated) {
    setTimeout(() => {
      navigate("/dashboard/übersicht");
    }, 1000);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          {state.error && (
            <Stack sx={{ width: "100%" }} spacing={2}>

              <Alert severity="error">Error — {JSON.stringify(state.error)}</Alert>

            </Stack>
          )}
          {state.isAuth && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
                Erfolg – Sie haben sich erfolgreich angemeldet!
              </Alert>
            </Stack>
          )}
          <Typography component="h1" variant="h5">
            Anmelden
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Mich erinnern"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Anmelden{" "}
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to="/" className="text-sm text-blue-500">
                Passwort vergessen?
                </NavLink>
              </Grid>
              <Grid item>
                <NavLink to="/signUp" className="text-sm text-blue-500">
                  {"Sie haben noch kein Konto? Registrieren"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
