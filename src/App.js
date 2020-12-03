import Axios from "axios";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("jYlIyJNi03tsAyGIGdtQZAB7KPPK6CGo");

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();

    Axios.get(
      "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=" +
        apiKey +
        "&maxResults=40"
    ).then((data) => {
      console.log(data.data.results);
      setResult(data.data.results);
    });
  }
  return (
    <div class="container">
      <br></br>
      <h1>New York Times Book Search App</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input
            type="text"
            onChange={handleChange}
            className="form-control"
            placeholder="Search Required Books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-info">
          Search
        </button>
      </form>

      <table>
        {result.map((book) => (
       
          <tr>
            <a href=""><td>{book.display_name}</td></a>
          </tr>
        
        ))}
      </table>
    </div>
  );
}
