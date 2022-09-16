import React from "react";
import "./TrendCard.css";

import { Link } from "react-router-dom";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3 style={{ color: "red" }}>Hitni slučajevi</h3>
      <p>
        {" "}
        Ovaj djeljak sluši za POSTAVANJE/PREGLEDAVANJE hitnih slučajeva s ciljem
        davanja drugih mišljenja{" "}
      </p>

      <button className="button rr-button" to={`/emergency/`}>
        {" "}
        <Link
          to={"../emergency"}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          HITNO
        </Link>
      </button>
    </div>
  );
};

export default TrendCard;
