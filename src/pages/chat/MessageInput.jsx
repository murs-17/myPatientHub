import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  function submitMessage(event) {
    event.preventDefault();

    if (!text.trim()) return;

    onSend(text);
    setText("");
  }

  return (
    <form className="chat-message-form" onSubmit={submitMessage}>
      <button
        type="button"
        className="chat-input-icon"
        aria-label="Emoji"
        title="Emoji"
        onClick={() => setText((previous) => previous + " 😊")}
      >
        ☺
      </button>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter Message"
        aria-label="Enter message"
      />

      <button
        type="submit"
        className="chat-send-button"
        aria-label="Send message"
        title="Send message"
        disabled={!text.trim()}
      >
        ➤
      </button>
    </form>
  );
}