import React from "react";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardForm from "../CardForm/CardForm";

const stripePromise = loadStripe(
  "pk_test_51J1GeEAVW8NSBbZiWQxTrT9UP0g6WIpdwEXAMycgz6yLj370Vl3rZVdin1QJrfH3Okh0p7cVTpPKMvSxG6VrjXWw00aR2TH9jw"
);

const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CardForm></CardForm>
    </Elements>
  );
};

export default ProcessPayment;
