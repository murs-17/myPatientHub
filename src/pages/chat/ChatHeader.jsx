export default function ChatHeader({ contact }) {
  return (
    <header className="chat-header">
      <div className="chat-header-user">
        <div className="chat-avatar">{contact.avatar}</div>

        <div className="chat-profile-info">
          <strong>{contact.name}</strong>

          <span
            className={
              contact.online ? "chat-online" : "chat-offline"
            }
          >
            {contact.online ? "Online" : "Offline"}
          </span>
        </div>
      </div>

      <div className="chat-header-actions">
        <button
          type="button"
          aria-label="Video call"
          title="Video call"
          onClick={() =>
            window.alert("Video calling is not connected yet.")
          }
        >
          ▣
        </button>

        <button
          type="button"
          aria-label="Voice call"
          title="Voice call"
          onClick={() =>
            window.alert("Voice calling is not connected yet.")
          }
        >
          ♡
        </button>

        <button
          type="button"
          aria-label="More options"
          title="More options"
          onClick={() =>
            window.alert("More options are not available yet.")
          }
        >
          ⋮
        </button>
      </div>
    </header>
  );
}