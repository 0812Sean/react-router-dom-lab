import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
  const [boxholder, setBoxholder] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(boxholder);
    setBoxholder([])
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setBoxholder({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
     <h1>New Mailbox</h1>
     <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Enter a Boxholder</label>
        <input 
        type="text" 
        id='name'
        name='name'
        value={boxholder} 
        onChange={handleChange}
        />
      <label>
        Box Size:
        <select value={boxSize}           
        onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
    </main>
  );
};

export default MailboxForm;
