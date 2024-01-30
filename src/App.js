import { useState } from 'react';

import './App.css';
import EmojiList from './components/emojiList/emojiList';
import Header from './components/header/header';

import {data} from "./data/emoji.js"

function App() {
  const [filteredEmoji, setFilteredEmoji] = useState(data);

  return (
    <div className="App">
      <Header filteredEmoji={filteredEmoji} setFilteredEmoji={setFilteredEmoji} data={data}/>

      <main>
        <EmojiList data={filteredEmoji}/>
      </main>
    </div>
  );
}

export default App;
