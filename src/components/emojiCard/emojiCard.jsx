import './emojiCard.css';

function EmojiCard({symbol, title, keywords}) {
    return (
        <div className="emojiBox">
            <div className="emojiSymbol">{symbol}</div>
            <div className="emojiTitle">{title}</div>
            <div className="emojiKeywords">{keywords}</div>
        </div>
    );
}

export default EmojiCard;