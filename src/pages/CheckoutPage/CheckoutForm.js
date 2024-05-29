import React from "react";
import { ElementsConsumer, PaymentElement } from "@stripe/react-stripe-js";

class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/store",
      },
    });

    if (result.error) {
      console.log(result.error.message);
    } else {
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <PaymentElement />
        <div className="flex justify-center">
          <button
            disabled={!this.props.stripe}
            className="bg-green-600 text-white rounded-lg py-2 px-4 my-2"
          >
            Pay
          </button>
        </div>
      </form>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
