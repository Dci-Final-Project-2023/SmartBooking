import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import AuthContext from "../../../store/AuthContext";
import { useState } from "react";

export default function AddressForm() {
  const { state, setState } = useContext(AuthContext);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    payment: false,
  });

  React.useEffect(() => {
    if (state.buchung.customer !== null) {
      setInput(state.buchung.customer);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    setState({ ...state, buchung: { ...state.buchung, customer: input } });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Persönliche Daten
      </Typography>
      <Grid container spacing={3} required>
        <Grid item xs={12} sm={6} required>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.address1}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.address2}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.country}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="payment" value="yes" />}
            label="Use this address for payment details"
            onChange={(event) => handleChange(event)}
            value={input.payment}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
