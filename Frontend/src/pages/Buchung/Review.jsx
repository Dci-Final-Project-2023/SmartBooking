import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AuthContext from "../../../store/AuthContext";

export default function Review() {
  const { state } = React.useContext(AuthContext);
  const { customer } = state?.buchung;
  const { payment } = state?.buchung;

  const cardNumber2 = payment?.cardNumber.slice(-4);

  const booking = state?.buchung?.booking;

  const { hotel, newBooking, user } = booking;

  const payments = [
    { name: "Card type", detail: "Visa" },
    { name: "Card holder", detail: payment?.cardName?.toUpperCase() },
    { name: "Card number", detail: `xxxx-xxxx-xxxx-${cardNumber2}` },
    { name: "Expiry date", detail: payment?.expDate },
  ];

  const addresses = [
    customer?.address1,
    customer?.address2,
    customer?.zip,
    customer?.state,
    customer?.city,
    customer?.country,
  ];
  return (
    <React.Fragment>
      <Typography className="text-center" variant="h5" gutterBottom>
        Buchungdetails
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Billing Address
          </Typography>
          <Typography
            gutterBottom
          >{`${customer?.firstName} ${customer?.lastName}`}</Typography>
          <Typography gutterBottom>{addresses.join(" ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments?.map((payment) => (
              <React.Fragment key={payment?.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment?.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment?.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Buchung Details
          </Typography>
          <Typography gutterBottom> Hotel Name : {hotel?.name}</Typography>
          <Typography gutterBottom>Hotel City : {hotel?.city}</Typography>
          <Typography gutterBottom>Hotel Address : {hotel?.address}</Typography>
          <Typography gutterBottom>Hotel Rating : {hotel?.rating}</Typography>
          <Typography gutterBottom>Total Preis : {state?.billing} €</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
