export default function ChatHeader({ contact }) {
  return (
    <header className="chat-header">
      <div className="chat-header-user">
        <img
          className="chat-avatar chat-header-avatar"
          src={contact.avatar}
          alt=""
        />

        <div className="chat-profile-info">
          <strong>{contact.name}</strong>
          <span className={contact.online ? "chat-online" : "chat-offline"}>
            {contact.online ? "online" : "offline"}
          </span>
        </div>
      </div>

      <div className="chat-header-actions">
        <button
          type="button"
          aria-label="Video call"
          title="Video call"
          onClick={() => window.alert("Video calling is not connected yet.")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6.5h12a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5Z" />
            <path d="m16.5 10 6-3v10l-6-3" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Voice call"
          title="Voice call"
          onClick={() => window.alert("Voice calling is not connected yet.")}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 2.5 10 6.7 7.8 9.2c1.2 2.4 2.9 4.1 5.3 5.3l2.5-2.2 4.2 3.4-.8 4.1c-.2.9-1 1.5-1.9 1.5C8.4 20.7 3.3 15.6 2.7 6.9c-.1-.9.6-1.7 1.5-1.9Z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="More options"
          title="More options"
          onClick={() => window.alert("More options are not available yet.")}
        >
          ⋮
        </button>
      </div>
    </header>
  );
}