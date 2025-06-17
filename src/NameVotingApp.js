
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NameVotingApp() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('');
  const [votes, setVotes] = useState({});

  const addName = () => {
    if (newName.trim() && !names.includes(newName.trim())) {
      setNames([...names, newName.trim()]);
      setVotes({ ...votes, [newName.trim()]: 0 });
      setNewName('');
    }
  };

  const voteForName = (name) => {
    setVotes({ ...votes, [name]: votes[name] + 1 });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">Name Suggestion and Voting App</h1>

      <Card>
        <CardContent className="space-y-4 p-4">
          <div className="flex space-x-2">
            <Input
              placeholder="Enter a name suggestion"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <Button onClick={addName}>Add Name</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">Vote for your favorite name:</h2>
          <div className="space-y-2">
            {names.map((name) => (
              <div key={name} className="flex items-center justify-between border p-2 rounded-md">
                <span>{name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{votes[name]} votes</span>
                  <Button size="sm" onClick={() => voteForName(name)}>
                    Vote
                  </Button>
                </div>
              </div>
            ))}
            {names.length === 0 && <p className="text-gray-500">No names added yet.</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
