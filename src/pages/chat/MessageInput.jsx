import { useRef, useState } from "react";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");
  const fileInputRef = useRef(null);

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
        className="chat-input-icon emoji-button"
        aria-label="Add emoji"
        title="Add emoji"
        onClick={() => setText((previous) => previous + " 😊")}
      >
        ☻
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

      <button
        type="button"
        className="chat-input-icon"
        aria-label="Voice message"
        title="Voice message"
        onClick={() => window.alert("Voice messages are not connected yet.")}
      >
        ♩
      </button>

      <button
        type="button"
        className="chat-input-icon"
        aria-label="Attach image"
        title="Attach image"
        onClick={() => fileInputRef.current?.click()}
      >
        ▧
      </button>

      <input
        ref={fileInputRef}
        className="chat-file-input"
        type="file"
        accept="image/*"
        aria-label="Choose an image"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            window.alert(`Selected image: ${file.name}`);
          }
          event.target.value = "";
        }}
      />
    </form>
  );
}