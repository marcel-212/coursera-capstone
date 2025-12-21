import { useState } from "react";
import ReservationForm from '../sections/ReservationForm'

const Reservation = () => {
  const [errors, setErrors] = useState(null);
  const [isSent, setIsSent] = useState(false);

  return (
    <section className="reservation" aria-label="Reservation section">
      <div className="box">
        <h1>RESERVATION</h1>

        <ReservationForm setErrors={setErrors} setIsSent={setIsSent} />

        {errors != null && (
          <div className="form-message form-error" role="alert">
            {errors.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        )}

        {isSent && (
          <div className="form-message form-success" role="alert">
            <p>
              Your table has been successfully reserved. Please check your email address.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reservation;