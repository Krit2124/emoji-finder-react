import { useEffect, useState } from 'react';
import './header.css';

function Header({filteredEmoji, setFilteredEmoji, data}) {
    const [findWords, setFindWords] = useState("")

    const filterByFindWords = () => {
        let newEmoji = []

        data.forEach((emoji) => {
            if((emoji.title.toLowerCase().includes(findWords.toLowerCase())) || (emoji.keywords.toLowerCase().includes(findWords.toLowerCase()))) {
                newEmoji.push(emoji)
            }
        });
        setFilteredEmoji(newEmoji)
    }

    useEffect(() => {
        if (findWords.length > 0) {
            filterByFindWords()
        } else {
            setFindWords("")
        }
    }, [findWords])

    return (
        <header>
            <div className="headerBackground"></div>

            <div className="headerTextPart">
                <div className="container">
                    <h1>Emoji Finder</h1>
                    <h3>Find emoji by keywords</h3>
                </div>
            </div>

            <div className="inputToFindPart">
                <div className="container">
                    <input type="text" placeholder="Placeholder" id="inputToFind" className="inputToFind" onChange={(findWords) => {setFindWords(findWords.target.value)}}/>
                </div>
            </div>
        </header>
    );
}

export default Header;