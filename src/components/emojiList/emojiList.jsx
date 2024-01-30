import EmojiCard from '../emojiCard/emojiCard';
import './emojiList.css';

function EmojiList({data}) {
    return (
        <div class="emojiList">
            <div class="container emojiListContainer">
                {data.map((card)=>{
                    // Избавление от повторяющихся ключевых слов
                    let cleanKeywords = ""
                    let actualWord = ""
                    let lastIndex = 0
                    for (let i=0; i<card.keywords.length; i++) {
                        if ((card.keywords[i] === " ")||(i === card.keywords.length - 1)) {
                            // Если это последний i, то нужно добавить последний символ
                            if (i === card.keywords.length - 1) {
                                actualWord = card.keywords.slice(lastIndex, i+1)
                            } else actualWord = card.keywords.slice(lastIndex, i)

                            if (!(cleanKeywords.includes(actualWord + " "))) {
                                cleanKeywords += actualWord + " "
                            }
                        lastIndex = i
                        }
                    }
                    return <EmojiCard 
                        symbol={card.symbol}
                        title={card.title}
                        keywords={cleanKeywords}
                    />
                })}
            </div>
        </div>
    );
}

export default EmojiList;