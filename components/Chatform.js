import { useState, useEffect } from 'react';

async function fetchChatMessages() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/chats/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items;
}

async function saveChatMessage(message) {
  const res = await fetch('http://127.0.0.1:8090/api/collections/chats/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });
  return res.ok;
}

export default function ChatForm({ customerId }) {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await fetchChatMessages();
      setMessages(data);
    }
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = {
      text: messageText,
      timestamp: new Date().toISOString(),
      customerId: customerId,

    };
    if (await saveChatMessage(message)) {
      setMessageText('');
      setMessages(await fetchChatMessages());
    } else {
      console.error('Failed to save message');
    }
  };

  return (
    <div className="chat-form-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={messageText}
          onChange={(event) => setMessageText(event.target.value)}
          placeholder="Type your message here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
