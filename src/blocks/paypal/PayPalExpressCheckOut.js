import React from 'react';
import ReactDOM from 'react-dom';
import scriptLoader from 'react-async-script-loader';
import PropTypes from 'prop-types';
 
class PaypalButton extends React.Component {
  constructor(props) {
    super(props);
    window.React = React;
    window.ReactDOM = ReactDOM;
    debugger;
    this.state = {
      showButton: false,
      env: props.env, // Or 'production'
      client: {
        sandbox:    props.client.sandbox, // sandbox client ID
        production: props.client.production // production client ID
      },
      commit: true, // Show a 'Pay Now' button
    };
  }

  componentDidMount() {
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }

  componentWillReceiveProps({ isScriptLoaded, isScriptLoadSucceed }) {
    if (!this.state.show) {
      if (isScriptLoaded && !this.props.isScriptLoaded) {
        if (isScriptLoadSucceed) {
          this.setState({ showButton: true });
        } else {
          console.log('Cannot load Paypal script!');
          this.props.onError();
        }
      }
    }
  }
 
  render() {
    const payment = () => window.paypal.rest.payment.create(this.props.env, this.props.client, {
      transactions: [
        { amount: { total: this.props.total, currency: this.props.currency } },
      ],
    });
 
    const onAuthorize = (data, actions) => actions.payment.execute().then(() => {
      const payment = Object.assign({}, this.props.payment);
      payment.paid = true;
      payment.cancelled = false;
      payment.payerID = data.payerID;
      payment.paymentID = data.paymentID;
      payment.paymentToken = data.paymentToken;
      payment.returnUrl = data.returnUrl;
      this.props.onSuccess(payment);
    });
 
    let ppbtn = '';
    if (this.state.showButton) {
      const { paypal } = window;
      ppbtn = (<paypal.Button.react
        env={this.state.env}
        client={this.state.client}
        payment={payment}
        commit
        onAuthorize={onAuthorize}
        onCancel={this.props.onCancel}
      />);
    }
    return <div>{ppbtn}</div>;
  }
}
 
PaypalButton.propTypes = {
  currency: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  env: PropTypes.string.isRequired,
  client: PropTypes.shape({
      sandbox: PropTypes.string.isRequired,
      production: PropTypes.string.isRequired,
  }).isRequired
};
 
PaypalButton.defaultProps = {
  onSuccess: (payment) => {
    console.log('The payment was succeeded!', payment);
  },
  onCancel: (data) => {
    console.log('The payment was cancelled!', data);
  },
  onError: (err) => {
    console.log('Error loading Paypal script!', err);
  },
};
 
export default scriptLoader('https://www.paypalobjects.com/api/checkout.js')(PaypalButton);
