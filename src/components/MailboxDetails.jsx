import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const selectedBox = props.find(mailbox => mailbox._id === Number(mailboxId));
  return (
    <>
      <h2>Details</h2>
      <dl>
      <dt>Boxholder:</dt>
      <dd>{selectedBox.boxholder}</dd>
      <dt>Box Size:</dt>
      <dd>{selectedBox.boxSize}</dd>
      </dl>
    </>
  );
};

export default MailboxDetails;
