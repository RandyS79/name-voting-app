
import { useState } from 'react';

export default function NameVotingApp() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  const [votes, setVotes] = useState({});

  const addName = () => {
    const trimmed = newName.trim();
    if (trimmed && !names.includes(trimmed)) {
      setNames([...names, trimmed]);
      setVotes({ ...votes, [trimmed]: 0 });
      setNewName('');
    }
  };

  const voteForName = (name) => {
    setVotes({ ...votes, [name]: votes[name] + 1 });
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Name Suggestion and Voting App</h1>

      <div style={{ marginBottom: '2rem' }}>
        <input
          style={{ padding: '0.5rem', width: '70%', marginRight: '1rem' }}
          placeholder='Enter a name suggestion'
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button style={{ padding: '0.5rem 1rem' }} onClick={addName}>Add Name</button>
      </div>

      <h2>Vote for your favorite name:</h2>
      {names.length === 0 && <p>No names added yet.</p>}
      {names.map(name => (
        <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}>
          <span>{name}</span>
          <div>
            <span style={{ marginRight: '1rem' }}>{votes[name]} votes</span>
            <button onClick={() => voteForName(name)}>Vote</button>
          </div>
        </div>
      ))}
    </div>
  );
}
