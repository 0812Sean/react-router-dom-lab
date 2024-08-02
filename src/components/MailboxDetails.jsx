import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes = [], letters = [] }) => {
  const { mailboxId } = useParams();
  const selectedBox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));
  const selectedLetters = letters.filter(letter => letter.mailboxId === Number(mailboxId));

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <div>
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxholder}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
      <h2>Letters</h2>
      {selectedLetters.length > 0 ? (
        <ul>
          {selectedLetters.map((letter, index) => (
            <li key={index}>
              <h4>To: {letter.recipient}</h4>
              <p>{letter.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No letters found for this mailbox.</p>
      )}
    </div>
  );
};

export default MailboxDetails;
