import React, { useState } from 'react';
import "./textmani.css"

const TextManipulator = () => {
  const [inputText, setInputText] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const convertToUpperCase = () => {
    setInputText(inputText.toUpperCase());
  };

  const convertToLowerCase = () => {
    setInputText(inputText.toLowerCase());
  };

  const clearText = () => {
    setInputText('');
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inputText);
    setCopied(true);
  };

  const removeExtraSpaces = () => {
    setInputText(inputText.replace(/\s+/g, ' '));
  };

  return (
    <div className='cont'>
      <h1>Text Manipulator</h1>
      <input
        type="paragraph"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text here"
      />
      
      <div>
      <button onClick={convertToUpperCase}>Convert to Upper Case</button>
      <button onClick={convertToLowerCase}>Convert to Lower Case</button>
      <button onClick={clearText}>Clear Text</button>
      <button onClick={copyToClipboard}>
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
      <button onClick={removeExtraSpaces}>Remove Extra Spaces</button>
      </div>
    </div>
  );
};

export default TextManipulator;
