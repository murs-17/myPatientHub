import { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import MessageInput from "./MessageInput";
import "./Chat.css";

const initialContacts = [
  {
    id: 1,
    name: "noman khan",
    avatar: "NK",
    online: true,
    preview: "Hi hope you feel better",
    time: "2:30",
  },
  {
    id: 2,
    name: "ahmadi khan",
    avatar: "AK",
    online: true,
    preview: "How are you feeling today?",
    time: "2:35",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    avatar: "SA",
    online: false,
    preview: "Thank you, doctor.",
    time: "Yesterday",
  },
];

const initialMessages = {
  1: [
    {
      id: 101,
      sender: "noman khan",
      text: "Hi hope you feel better",
      time: "2:30",
      own: false,
    },
    {
      id: 102,
      sender: "noman khan",
      text: "Please let me know if you need anything.",
      time: "2:30",
      own: false,
    },
    {
      id: 103,
      sender: "noman khan",
      text: "Wishing you a speedy recovery!",
      time: "2:31",
      own: false,
    },
  ],
  2: [
    {
      id: 201,
      sender: "ahmadi khan",
      text: "How are you feeling today?",
      time: "2:35",
      own: false,
    },
  ],
  3: [
    {
      id: 301,
      sender: "Sara Ahmed",
      text: "Thank you, doctor.",
      time: "Yesterday",
      own: false,
    },
  ],
};

export default function Chat() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(1);
  const [messagesByContact, setMessagesByContact] =
    useState(initialMessages);

  const selectedContact =
    contacts.find((contact) => contact.id === selectedId) ??
    contacts[0];

  const messages = messagesByContact[selectedContact.id] ?? [];

  function handleSend(text) {
    const trimmedText = text.trim();

    if (!trimmedText) return;

    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMessage = {
      id: Date.now(),
      sender: "Pro Murtaza",
      text: trimmedText,
      time: now,
      own: true,
    };

    setMessagesByContact((previous) => ({
      ...previous,
      [selectedContact.id]: [
        ...(previous[selectedContact.id] ?? []),
        newMessage,
      ],
    }));

    setContacts((previous) =>
      previous.map((contact) =>
        contact.id === selectedContact.id
          ? { ...contact, preview: trimmedText, time: now }
          : contact
      )
    );
  }

  return (
    <section className="chat-page">
      <div className="chat-workspace">
        <ChatSidebar
          contacts={contacts}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        <main className="chat-conversation">
          <ChatHeader contact={selectedContact} />

          <ChatMessages
            messages={messages}
            contact={selectedContact}
          />

          <MessageInput onSend={handleSend} />
        </main>
      </div>

      <footer className="chat-footer">
        © 2026, made with ♥ by MyPiHUB for a better web.
      </footer>
    </section>
  );
}