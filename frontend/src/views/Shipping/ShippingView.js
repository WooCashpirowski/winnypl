import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../redux/actions/cartActions";
import ShippingStyled from "./ShippingStyled";
import FormContainer from "../../components/FormContainer/FormContainer";
import CheckoutSteps from "../../components/CheckoutSteps/CheckoutSteps";

const ShippingView = ({ history }) => {
  const { shippingAddress: shipping } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shipping.address || "");
  const [city, setCity] = useState(shipping.city || "");
  const [postalCode, setPostalCode] = useState(shipping.postalCode || "");
  const [country, setCountry] = useState(shipping.country || "");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/platnosc");
  };

  return (
    <ShippingStyled>
      <h2 className="section-header">Dane do dostawy</h2>
      <CheckoutSteps step2 />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h4>Podaj adres dostawy</h4>
          <input
            type="text"
            placeholder="Adres"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            autoComplete="true"
          ></input>
          <input
            type="text"
            placeholder="Miasto"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            autoComplete="true"
          ></input>
          <input
            type="text"
            placeholder="Kod pocztowy"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            autoComplete="true"
          ></input>
          <input
            type="text"
            placeholder="Kraj"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            autoComplete="true"
          ></input>
          <button type="submit" variant="primary">
            <div className="slide" />
            <span>Przejdź dalej</span>
          </button>
        </form>
      </FormContainer>
    </ShippingStyled>
  );
};

export default ShippingView;
