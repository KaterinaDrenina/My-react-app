import React, { useState } from 'react';
import Emoji from './Emoji';

function Voting({ emojis }) {

    const [localEmojis, setLocalEmojis] = useState(emojis);
  
    const [winnerId, setWinnerId] = useState(null);
    
    const handleVote = id => {
      const updatedEmojis = localEmojis.map(emoji => {
        if (emoji.id === id) {
          return { ...emoji, votes: emoji.votes + 1 };
        }
        return emoji;
      });

      setLocalEmojis(updatedEmojis);
    };
  
    const showResults = () => {
      const maxVotes = Math.max(...localEmojis.map(emoji => emoji.votes));
      const winner = localEmojis.find(emoji => emoji.votes === maxVotes);
      setWinnerId(winner.id);
    };
  
    return (
      <div className="voting-container">
        {localEmojis.map((emoji) => (
          <div key={emoji.id} style={{ display: winnerId && winnerId !== emoji.id ? 'none' : 'block' }}>
            <Emoji 
              src={emoji.src} 
              alt={emoji.alt} 
              onVote={() => handleVote(emoji.id)} 
              votes={emoji.votes} 
            />
          </div>
        ))}
        <button onClick={showResults}>Show Results</button>
      </div>
    );
}

export default Voting;


