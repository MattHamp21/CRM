import { useState, useEffect } from 'react';
import Link from 'next/link';
import '../Css/ComplaintCard.css'

async function getComplaint() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/conversations/records?page=1&perPage=30',
  { cache: 'no-store' });
  const data = await res.json()
  return data?.items;
}

export default function ComplaintCard(){
  const [convos, setConvos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getComplaint();
      setConvos(data);
    }
    fetchData();
  }, []);

  return (
    <div className="complaint-card-container">
      {convos?.map((convo) => (
        <Convo key={convo.id} convo={convo} />
      ))}
    </div>
  )
}

function Convo({ convo }) {
  const { id, messages, date_started, resolved, issue, customer_id } = convo || {};

  const isResolved = () =>{
    if (resolved === true){
      return <span className="resolved-true">True</span>
    } else {
      return <span className="resolved-false">False</span>
    }
  }

  const formattedDate = new Date(date_started).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Link href={`/Conversation/${id}`}>
      <div className='complaint-card'>
        <h3>Issue: {issue}</h3>
        <h3>Message: {messages}</h3>
        <h3>Date started: {formattedDate}</h3>
        <h3>Resolved: {isResolved()}</h3>
        <h3>Cus ID: {customer_id}</h3>
      </div>
    </Link>
  )
}
