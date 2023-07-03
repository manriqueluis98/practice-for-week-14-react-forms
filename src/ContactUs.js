import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const contactUsInformation = {
      name,
      email,
      phone,
      submittedOn: new Date()
    };

    console.log(contactUsInformation);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="name"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            id="phone"
            value={phone}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
