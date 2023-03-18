import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import "../../Css/customerpage.css";
import NavBar from '@/components/NavBar';

export default function ChatsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState(null);
  const [chatData, setChatData] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    async function fetchChats() {
      try {
        const res = await fetch(
          `http://127.0.0.1:8090/api/collections/conversations/records/${id}?populate=chat`
        );
        if (!res.ok) {
          throw new Error('Failed to fetch chats');
        }
        const data = await res.json();
        setComplaint(data);

        const chatPromises = data.chat.map((chatId) =>
          fetch(`http://127.0.0.1:8090/api/collections/chats/records/${chatId}`)
        );
        const chatResponses = await Promise.all(chatPromises);
        const chatData = await Promise.all(
          chatResponses.map((response) => response.json())
        );
        setChatData(chatData);
      } catch (err) {
        setError(err.message);
      }
    }

    if (id) {
      fetchChats();
    }
  }, [id]);

  function renderChatData() {
    if (!complaint || !complaint.chat || chatData.length === 0) return null;

    const sortedChatData = [...chatData].sort((a, b) => {
      return new Date(a.created) - new Date(b.created);
    });

    return sortedChatData.map((chat, index) => {
      const isCustomerMessage = chat.customer !== '';
      const messageClass = isCustomerMessage
        ? 'customer-message'
        : 'support-message';
      const sender = isCustomerMessage ? 'Customer' : 'Support';

      return (
        <div key={index} className={`chat-info ${messageClass}`}>
          <p>
            {sender}: {chat.message}
          </p>
        </div>
      );
    });
  }

  async function sendMessage(e) {
    e.preventDefault();

    try {
      const supportMemberId = localStorage.getItem('supportTeamId');
      const response = await fetch(`http://127.0.0.1:8090/api/collections/chats/records`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: newMessage,
          customer: '',
          support: supportMemberId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const newChat = await response.json();
      setChatData([...chatData, newChat]);
      setNewMessage('');

      const requestBody = JSON.stringify({
        chat: [...complaint.chat, newChat.id],
      });

      const updateConversationResponse = await fetch(`http://127.0.0.1:8090/api/collections/conversations/records/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });

      if (!updateConversationResponse.ok) {
        throw new Error('Failed to update conversation');
      }

      const updatedConversation = await updateConversationResponse.json();
      setComplaint(updatedConversation);
  
    } catch (error) {
      console.error(error);
    }
  }
  
  
  

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!complaint) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <NavBar />
    <div className="container">
      {/* ... other content ... */}
      <div className="complaint-info">
        {/* ... other information ... */}
        <div className="chat-data">{renderChatData()}</div>

        {/* Add a form to send messages */}
        <form onSubmit={sendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </div>
);
}