import React, { useState } from 'react';
import Emoji from './Emoji';

function Voting() {
    const [emojis, setEmojis] = useState([
        { id: 1, src: 'assets/images/1.jpg', alt: 'Emoji 1', votes: 0},
        { id: 2, src: 'assets/images/2.jpg', alt: 'Emoji 2', votes: 0},
        { id: 3, src: 'assets/images/3.jpeg', alt: 'Emoji 3', votes: 0},
        { id: 4, src: 'assets/images/4.jpeg', alt: 'Emoji 4', votes: 0},
        { id: 5, src: 'assets/images/5.jpeg', alt: 'Emoji 5', votes: 0},
    ]);

    const [winnerId, setWinnerId] = useState(null);
  
    const handleVote = id => {
      const updatedEmojis = emojis.map(emoji => {
        if (emoji.id === id) {
          return { ...emoji, votes: emoji.votes + 1 };
        }
        return emoji;
      });
      setEmojis(updatedEmojis);
    };
  
    const showResults = () => {
      const maxVotes = Math.max(...emojis.map(emoji => emoji.votes));
      const winner = emojis.find(emoji => emoji.votes === maxVotes);
      setWinnerId(winner.id);
    };
  
    return (
      <div className="voting-container">
        {emojis.map((emoji) => (
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


