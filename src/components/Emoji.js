function Emoji({ src, alt, onVote, votes }) {
    return (
      <div className="emoji" onClick={onVote} >
        <img src={src} alt={alt} />
        <div>{votes}</div>
      </div>
    );
}
  
export default Emoji;

