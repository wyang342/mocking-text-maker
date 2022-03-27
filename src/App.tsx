import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { MockingText } from './components/MockingText';
import { setTextRange } from 'typescript';

function App() {
  const [text, setText] = useState<string>("");

  return (
    <main>
      <h1>Mocking Spongebob Text Maker</h1>

      <div className="App">
        <InputField setText={setText}></InputField>
        <MockingText text={text}></MockingText>
        <img src={require(".//assets/mocking-spongebob.png")} alt="mocking spongebob" />
      </div>
    </main>
  );
}

export default App;
