export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <article
          className={`chat-message ${
            message.own ? "chat-message-own" : ""
          }`}
          key={message.id}
        >
          {!message.own && (
            <img
              className="chat-avatar chat-message-avatar"
              src="https://i.pravatar.cc/100?img=12"
              alt=""
            />
          )}

          <div className="chat-message-content">
            <span className="chat-message-sender">
              {message.sender}
            </span>
            <p className="chat-message-bubble">{message.text}</p>
          </div>

          <time className="chat-message-time">{message.time}</time>
        </article>
      ))}
    </div>
  );
}