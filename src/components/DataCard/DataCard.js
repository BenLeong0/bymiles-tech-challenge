import React from "react";
import "./DataCard.css";

function DataCard(props) {
  const { address, policy_ref, cover } = props.resp.data.policy;
  const vehicle = props.resp.data.vehicle;

  const vehicleInfo =
    vehicle.make +
    " " +
    vehicle.model +
    " " +
    vehicle.colour +
    " -" +
    vehicle.reg;

  const fullAddress =
    address.line_1 + ", " + address.line_2 + ", " + address.postcode;
  return (
    <div className="card centred">
      <div className="card-title">My Policy</div>
      <div className="policy-ref info-field">
        <span>Policy reference:</span>
        <pre>{policy_ref.replaceAll("-", " ")}</pre>
      </div>
      <div className="cover-type info-field">
        <span>Cover type:</span>
        <pre>{cover}</pre>
      </div>
      <div className="car-type info-field">
        <span>Car:</span>
        <pre>{vehicleInfo}</pre>
      </div>
      <div className="address info-field">
        <span>Address:</span>
        <pre>{fullAddress}</pre>
      </div>
      <button className="btn-return astext" onClick={props.changeToLogin}>
        Return to sign in page
      </button>
    </div>
  );
}

export default DataCard;
