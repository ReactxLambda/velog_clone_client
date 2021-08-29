import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import ContentsEditing from './Page/ContentsEditing'
function App() {
  const markdownTextArea = true;
  const [textContents, setTextContents] =  useState('');
  const markdownViewer = false;
  return (
    <div className="App">
      <ContentsEditing />
    </div>
  );
}

export default App;
