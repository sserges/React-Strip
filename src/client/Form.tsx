import * as React from "react";
import {
  CardElement,
  injectStripe,
  ReactStripeElements
} from "react-stripe-elements";

class Form extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props);
    this.state = {
      name: "",
      amount: "",
      public_key: "",
      account_name: "",
      alert_message: ""
    };
  }

  handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !this.state.name &&
      !this.state.account_name &&
      !this.state.public_key
    ) {
      this.setState({ alert_message: "All the fields are required" });
    }
    // try {
    //   let { token } = await this.props.stripe.createToken({
    //     name: this.state.name
    //   });
    //   let amount = this.state.amount;
    //   await fetch("/api/donate", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify({ token, amount })
    //   });
    //   // redirect, clear inputs, thank alert
    //   // console.log(token);
    // } catch (e) {
    //   throw e;
    // }
  };

  render() {
    return (
      <main className="container">
        <h1 style={{ textAlign: "center", fontFamily: "calibri light" }}>
          <img src="" />
          EOS Account Creation
        </h1>
        {this.state.alert_message ? (
          <div className="alert alert-danger" role="alert">
            {this.state.alert_message}
          </div>
        ) : null}

        <form
          className="form-group mt-3 border border-primary rounded shadow-lg p-3"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label>Public Key</label>
            <input
              value={this.state.public_key}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ public_key: e.target.value })
              }
              className="form-control"
              type="text"
              placeholder="Enter your public key"
            />
          </div>

          <div className="form-group">
            <label>Account Name</label>
            <input
              value={this.state.account_name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ account_name: e.target.value })
              }
              className="form-control"
              type="text"
              placeholder="Enter your account name"
            />
          </div>

          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ name: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              value={this.state.amount}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.setState({ amount: e.target.value })
              }
            />
          </div>

          <div className="form-group">
            <label>CC Number -- Exp. Date -- CVC</label>
            <CardElement className="form-control" />
          </div>

          <button className="btn btn-primary">Charge It!</button>
        </form>
      </main>
    );
  }
}

interface IFormProps extends ReactStripeElements.InjectedStripeProps {}

interface IFormState {
  name: string;
  amount: string;
  public_key: string;
  account_name: string;
  alert_message: string;
}

export default injectStripe(Form);
