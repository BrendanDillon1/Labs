import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./App.css";

type Shoutout = {
  to: string;
  from: string;
  message: string;
};

function App() {
  const [shoutouts, setShoutouts] = useState<Shoutout[]>([]);
  const [newShoutout, setNewShoutout] = useState<Shoutout>({ to: "", from: "", message: "" });

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    fetch(`${apiUrl}/shoutouts`)
      .then((response) => response.json())
      .then((data) => {
        setShoutouts(data);
      })
      .catch((error) => {
        console.error("Error fetching shoutouts:", error);
      });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewShoutout({ ...newShoutout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const apiUrl = import.meta.env.VITE_API_URL;
    try {
      const response = await fetch(`${apiUrl}/shoutouts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShoutout),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const createdShoutout = await response.json();
      setShoutouts((prevShoutouts) => [...prevShoutouts, createdShoutout]);
      setNewShoutout({ to: "", from: "", message: "" });
    } catch (error) {
      console.error("Error posting shoutout:", error);
    }
  };

  return (
    <div>
      <h1>Shoutouts</h1>
      {shoutouts.map((shoutout, index) => (
        <div key={index}>
          <p>To: {shoutout.to}</p>
          <p>From: {shoutout.from}</p>
          <p>Message: {shoutout.message}</p>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input name="to" value={newShoutout.to} onChange={handleInputChange} placeholder="To" />
        <input name="from" value={newShoutout.from} onChange={handleInputChange} placeholder="From" />
        <textarea name="message" value={newShoutout.message} onChange={handleInputChange} placeholder="Your message" />
        <button type="submit">Send Shoutout</button>
      </form>
    </div>
  );
}

export default App;
