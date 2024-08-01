import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox({ boxholder, boxSize });
    setBoxholder('')
    setBoxSize('Small');
    navigate('/mailboxes');
  };

  const handleBoxholderChange = ({ target }) => {
    setBoxholder(target.value);
  };

  const handleBoxSizeChange = ({ target }) => {
    setBoxSize(target.value);
  };

  return (
    <main>
     <h1>New Mailbox</h1>
     <form onSubmit={handleSubmit}>
      <label htmlFor='boxholder'>Enter a Boxholder:</label>
        <input 
        type="text" 
        id="boxholder"
        name="boxholder"
        value={boxholder} 
        onChange={handleBoxholderChange}
        />
        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          name="boxSize"
          value={boxSize}
          onChange={handleBoxSizeChange}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

      <button type="submit">Submit</button>
    </form>
    </main>
  );
};

export default MailboxForm;
