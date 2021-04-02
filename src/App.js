import React, { useState } from "react";
import "./styles.css";

// var username = prompt("Pls tell your name");
// var color = "blue";

const emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "🙂": "Smile",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Heart-Eyes",
  "🤩": "Star-Eyes",
  "😘": "Face Blowing a Kiss",
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [inputEmoji, setinputEmoji] = useState("");

  function emojiHandler(event) {
    var takeInput = event.target.value;
    var takeEmoji = emojiDictionary[takeInput];
    if (takeInput in emojiDictionary) {
      setinputEmoji(takeEmoji);
    } else {
      setinputEmoji("We don't have this emoji as of now !!");
    }
  }

  function emojiDef(emoji) {
    var takeEmoji = emojiDictionary[emoji];
    setinputEmoji(takeEmoji);
  }

  return (
    <div className="App">
      <h1>
        <a
          style={{ color: "purple", textDecoration: "none" }}
          href="https://vishalkumar.netlify.app"
        >
          Vishal's
        </a>{" "}
        emoji interpreter
      </h1>
      <input onChange={emojiHandler} />
      <h2> {inputEmoji} </h2>

      <h3>emojis we know :-</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            onClick={() => emojiDef(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
