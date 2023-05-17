import { useContext, useState } from "react";
import AuthContext from "../../store/AuthContext";
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
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";


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
const url = import.meta.env.VITE_API_CREATE_USER

export default function SignUp() {
  const { state, setState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState(false);
  const [isShow,setIsShow] = useState(false);

  React.useEffect(() => {
    setState({ ...state, isAuthenticated: false, error: "" });
    setInputFields(false);
    setIsShow(false)
    }, []);


  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setInputFields(false);
      const data = new FormData(event.currentTarget);
      const user = {
        username: data.get("username"),
        fullname: data.get("fullname"),
        email: data.get("email"),
        password: data.get("password"),
      };
      // if (
      //   (data.get("firstName") &&
      //     data.get("lastName") &&
      //     data.get("password") &&
      //     data.get("email")) === ""
      // ) {
      //   setInputFields(true);
      //   return;
      // }
      const res = await axios.post(url, user);
      setState({ ...state, user: res.data.user, isAuthenticated: true });
      setIsShow(false)
      navigate("/");
    } catch (error) {
      setIsShow(true)
      setState({ ...state, isAuth: false, error: error.response.data.message });
    }
  };
    


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
          {inputFields && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="warning">Warnung! — Überprüfen Sie alle Felder!</Alert>
            </Stack>
          )}
          {(state.error && isShow) && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">Fehler — {state.error}</Alert>
            </Stack>
          )}
          {state.isAuth && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success">
              Erfolg – Sie haben sich erfolgreich registriert!
              </Alert>
            </Stack>
          )}
          <Typography component="h1" variant="h5">
          Registrieren
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            required
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  name="fullname"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} className="">
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="secondary"/>
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                  className="text-sm text-gray-400"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrieren
            </Button>

            <div></div>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/signIn" className="text-sm text-blue-500">
                 
                Sie haben bereits ein Konto? Anmelden
                  
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}