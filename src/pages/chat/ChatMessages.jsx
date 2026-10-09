import { useEffect, useRef } from "react";

export default function ChatMessages({ messages, contact }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <div className="chat-messages" aria-live="polite">
      {messages.map((message) => (
        <article
          key={message.id}
          className={`chat-message ${
            message.own ? "chat-message-own" : ""
          }`}
        >
          {!message.own && (
            <div className="chat-avatar chat-message-avatar">
              {contact.avatar}
            </div>
          )}

          <div className="chat-message-content">
            {!message.own && (
              <strong className="chat-message-sender">
                {message.sender}
              </strong>
            )}

            <p className="chat-message-bubble">
              {message.text}
            </p>
          </div>

          <time className="chat-message-time">
            {message.time}
          </time>
        </article>
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}