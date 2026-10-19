import { useState } from "react";

export default function ChatSidebar({
  contacts,
  selectedId,
  onSelect,
}) {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="chat-sidebar">
      <div className="chat-my-profile">
        <img
          className="chat-avatar chat-avatar-large"
          src="https://i.pravatar.cc/100?img=13"
          alt="Pro Murtaza"
        />

        <div className="chat-profile-info">
          <strong>Pro Murtaza</strong>
          <span className="chat-online">online</span>
        </div>

        <button
          type="button"
          className="chat-icon-button"
          aria-label="Edit profile"
          title="Edit profile"
          onClick={() => window.alert("Profile editing is not connected yet.")}
        >
          ✎
        </button>
      </div>

      <label className="chat-search">
        <input
          type="search"
          placeholder="Search Contacts"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          aria-label="Search contacts"
        />
        <span aria-hidden="true">⌕</span>
      </label>

      <div className="chat-contact-list">
        {filteredContacts.map((contact) => (
          <button
            key={contact.id}
            type="button"
            className={`chat-contact ${
              selectedId === contact.id ? "selected" : ""
            }`}
            onClick={() => onSelect(contact.id)}
          >
            <img
              className="chat-avatar"
              src={contact.avatar}
              alt=""
            />

            <div className="chat-contact-details">
              <strong>{contact.name}</strong>
              <span>{contact.preview}</span>
            </div>

            <time>{contact.time}</time>
          </button>
        ))}

        {filteredContacts.length === 0 && (
          <p className="chat-empty-search">No contacts found.</p>
        )}
      </div>
    </aside>
  );
}