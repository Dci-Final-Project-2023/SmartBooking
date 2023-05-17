import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AuthContext from "../../../store/AuthContext";

export default function PaymentForm() {
  const { state, setState } = React.useContext(AuthContext);

  const [input, setInput] = React.useState({
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    saveCard: false,
  });

  React.useEffect(() => {
    if (state.buchung.payment !== null) {
      setInput(state.buchung.payment);
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
    setState({ ...state, buchung: { ...state.buchung, payment: input } });
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3} required>
        <Grid item xs={12} md={6} required>
          <TextField
            required
            id="cardName"
            name="cardName"
            label={input.cardName === "" ? "Name on card" : input.cardName}
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.cardName}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            name="cardNumber"
            label={input.cardNumber === "" ? "Card number" : input.cardNumber}
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.cardNumber}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            name="expDate"
            label={input.expDate === "" ? "Expiry date" : input.expDate}
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.expDate}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            name="cvv"
            label={input.cvv === "" ? "CVV" : input.cvv}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={(event) => handleChange(event)}
            value={input.cvv}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
            onChange={(event) => handleChange(event)}
            name="saveCard"
            value={input.saveCard}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
