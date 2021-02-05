import React from "react";
import Card from "./Card.jsx";
import emojipedia from "../emojipedia";

function createCard(emojiItem) {
  return (
    <Card
      key={emojiItem.id}
      id={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      description={emojiItem.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
