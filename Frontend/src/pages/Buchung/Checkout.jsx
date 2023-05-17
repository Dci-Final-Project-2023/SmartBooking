import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import AuthContext from "../../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        SmartBooking
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Persönliche Daten", "Zahlungsdetails", "Buchungsdetails"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Checkout() {
  const { state } = React.useContext(AuthContext);
  const hotel = state?.buchung?.booking?.hotel;
  const user = state?.user;
  const buchungDetails = state?.buchung?.booking?.newBooking?.buchungDetails

  const navigate = useNavigate();
  React.useEffect(() => {
    if (state.user === null) {
      return navigate("/signIn");
    }
  }, []);

  const { customer, payment } = state.buchung;

  const buchungObect = {
    hotel,
    user,
    customer,
    payment,
    buchungDetails
  };


  const [activeStep, setActiveStep] = React.useState(0);

  const hotelBuchungURL = import.meta.env.VITE_API_NEW_BUCHUNG;
  const handleBooking = async (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);

    try {
      const res = await axios.post(`${hotelBuchungURL}`, buchungObect);
    } catch (error) {
    }
  };

  const handleNext = (e) => {
    e.preventDefault();

    if (activeStep === 0) {
      if (customer === null) {
        alert("Bitte füllen Sie alle Felder aus!");
        return;
      }
      if (
        (customer.firstName === "" ||
          customer.lastName === "" ||
          customer.address1 === "" ||
          customer.city === "" ||
          customer.zip === "" ||
          customer.country === "") === true
      ) {
        alert("Bitte füllen Sie alle Felder aus!");
        return;
      }
    }

    if (activeStep === 1) {
      if (payment === null) {
        alert("Bitte füllen Sie alle Felder aus!");
        return;
      }

      if (
        (payment.cardName === "" ||
          payment.cardNumber === "" ||
          payment.expDate === "" ||
          payment.cvv === "") === true
      ) {
        alert("Bitte füllen Sie alle Felder aus!");
        return;
      }
    }

    setActiveStep(activeStep + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        {/* <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            SmartBooking2
          </Typography>
        </Toolbar> */}
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your booking!
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2023-{`${user._id.slice(15)}`.toUpperCase()} We
                have emailed your order confirmation, and will send you an
                update!
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                {activeStep !== steps.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {"Next"}
                  </Button>
                )}

                {activeStep === steps.length - 1 && (
                  <Button onClick={handleBooking} sx={{ mt: 3, ml: 1 }}>
                    Buchen
                  </Button>
                )}
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
