import * as React from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import Form from "./Form";

import "./scss/app";

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
  }

  render() {
    return (
      <>
        <StripeProvider apiKey="pk_test_NfCCjHYNsgmWsabzNGfsFE8g00A6F78Vsp">
          <Elements>
            <Form />
          </Elements>
        </StripeProvider>
      </>
    );
  }
}

export interface IAppProps {}

export interface IAppState {}

export default App;
