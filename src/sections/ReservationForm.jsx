import { fetchAPI, submitAPI } from '../utils/fetchApi'
import { useEffect, useState } from "react";
import SelectInput from "../components/SelectInput";

const ReservationForm = ({setErrors, setIsSent}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [occasion, setOccasion] = useState("Birthday");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [timeOptions, setTimeOptions] = useState([]);
  const [guests, setGuests] = useState(1);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(null);
    setIsSent(false);

    const temp = [];

    if(name == ""){
      temp.push('Name has to be at least 2 letters long');
    }
    if(phone == ""){
      temp.push("Phone field cannot be empty");
    }
    if(email == ""){
      temp.push("Email field cannot be empty");
    }
    else if(!emailRegex.test(email)){
      temp.push("Email has to have correct format");
    }
    if(date == "" || time == "" || time == "__:__"){
      temp.push("Date and time fields cannot be empty");
    }
    if(guests < 0 || guests > 10){
      temp.push("guests filed has to be more value between 0 and 10")
    }

    if(temp.length < 1){
      const formData = {
        name,
        phone,
        email,
        occasion,
        date,
        time,
        guests,
      };
      const res = submitAPI(formData);
      setIsSent(res);

      setName("");
      setEmail("");
      setPhone("")
      setDate("");
      setTime("");
      setGuests(1);
      setTimeOptions([]);
      setOccasion('Birthday');
       
    }else{
      setErrors([...temp])
    }
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
    <form onSubmit={handleSubmit} aria-label="Reservation Form">
      <div>
        <label className="sr-only" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <label className="sr-only" htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>

      <label className="sr-only" htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
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
        <label className="sr-only" htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
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

        <label className="sr-only" htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          min={1}
          max={10}
          value={guests}
          onChange={e => setGuests(Number(e.target.value))}
        />
      </div>

      <button type="submit">RESERVE</button>
    </form>
  );
};

export default ReservationForm;
