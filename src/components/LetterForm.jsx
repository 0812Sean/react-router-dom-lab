import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LetterForm = ({ mailboxes, addLetter }) => {
  const [mailboxId, setMailboxId] = useState(mailboxes[0]?._id || '');
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mailboxId') setMailboxId(value);
    if (name === 'recipient') setRecipient(value);
    if (name === 'message') setMessage(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLetter({ mailboxId: Number(mailboxId), recipient, message });
    navigate(`/mailboxes/${mailboxId}`);
  };

  console.log({
    mailboxId,
    recipient,
    message,
  })

  return (
    <main>
      <h1>New Letter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mailboxId">Select Mailbox:</label>
        <select
          id="mailboxId"
          name="mailboxId"
          value={mailboxId}
          onChange={handleChange}
        >
          {mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              {mailbox._id}
            </option>
          ))}
        </select>
        <label htmlFor="recipient">Recipient Name:</label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={recipient}
          onChange={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;
