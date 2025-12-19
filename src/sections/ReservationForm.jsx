import { fetchAPI } from '../utils/fetchApi'
import { useEffect, useState } from "react";
import SelectInput from "../components/SelectInput";

const ReservationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timeOptions, setTimeOptions] = useState([]);
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      email,
      occasion,
      date,
      time,
      guests,
    };

    console.log(formData);
  };

  useEffect(() => {
    let temp = [];
    if(date != ''){
      temp = fetchAPI(new Date(date));
      setTime("")
    }
    setTimeOptions(temp);
  },[date])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <SelectInput
        options={["Birthday", "Date", "Friends outing", "Other"]}
        current={occasion}
        setCurrent={setOccasion}
        defaultValue="Birthday"
      />
      <div>
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <SelectInput
          options={[...timeOptions]}
          current={time}
          disabled={timeOptions.length < 1}
          setCurrent={setTime}
          defaultValue="__:__"
        />

        <input
          type="number"
          min={1}
          max={10}
          value={guests}
          onChange={e => setGuests(Number(e.target.value))}
        />
      </div>
      <input type="submit" value="RESERVE" />
    </form>
  );
};

export default ReservationForm;
