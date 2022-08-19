import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function populateNotes(entry) {
  return <Note title={entry.title} content={entry.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(populateNotes)}
      <Footer />
    </div>
  );
}

export default App;
