import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";
import FormContainer from "../../components/FormContainer/FormContainer";
import PaymentStyled from "./PaymentStyled";
import { savePaymentMethod } from "../../redux/actions/cartActions";

const PaymentView = ({ history }) => {
  const { shippingAddress } = useSelector((state) => state.cart);

  useEffect(() => {
    if (shippingAddress.length === 0) {
      history.push("/dostawa");
    }
  }, [history, shippingAddress]);

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/podsumowanie");
  };

  return (
    <PaymentStyled>
      <h2 className="section-header">Płatność</h2>
      <CheckoutSteps step2 step3 />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h4>Wybierz metodę płatności</h4>
          <div className="checks">
            <Form.Check
              type="radio"
              label=" PayPal / Karta / Blik / Przelew"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              onChange={(e) => setPaymentMethod(e.target.value)}
              checked
            ></Form.Check>
            <Form.Check
              type="radio"
              label=" Blik"
              id="Blik"
              name="paymentMethod"
              value="Blik"
              onChange={(e) => setPaymentMethod(e.target.value)}
              disabled
            ></Form.Check>
            <Form.Check
              type="radio"
              label=" Karta kredytowa/debetowa"
              id="Karta"
              name="paymentMethod"
              value="Karta kredytowa/debetowa"
              onChange={(e) => setPaymentMethod(e.target.value)}
              disabled
            ></Form.Check>
          </div>
          <button type="submit" variant="primary" disabled={!paymentMethod}>
            <div className="slide" />
            <span>Przejdź dalej</span>
          </button>
        </form>
      </FormContainer>
    </PaymentStyled>
  );
};

export default PaymentView;
