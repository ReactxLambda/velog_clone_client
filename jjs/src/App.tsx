import React, { useState, useEffect,useCallback } from 'react';
import {useDropzone} from 'react-dropzone'
import './App.css';
import {TextField, Snackbar} from '@material-ui/core';
import { SnackbarProvider, useSnackbar } from 'notistack';
// or
function App() {
  const style = {
    margin: "10px",
    display : "flex"
    
  }
  const textAreaStyle = {
    flex : 1,
    height: "97vh", 
    marginRight : "10px",
    overflow : "scroll"
  }
  const [md_value, setMd_value] = useState('');

  const hljs = require('highlight.js');
  const md = require('markdown-it')({
    highlight: function (str : string, lang : string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
                 hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                 '</code></pre>';
        } catch (__) {}
      }
  
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
  });
  const onChangeMdInput = (e: any) => {
    setMd_value(e.target.value);
  };
  useEffect(()=>{
    const innerHTML_value : HTMLElement = document.getElementById('markdown') as HTMLElement
    innerHTML_value.innerHTML = md.render(md_value)
  },[md_value])

  

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file : File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(reader);
      }
      reader.readAsArrayBuffer(file);
      console.log(file);
    })
    
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop});
  return (
    <div style={style} 
    {...getRootProps()}
    >
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.5.0/styles/default.min.css"/>
      { /** 
        <TextField
      
        id="outlined-multiline-static"
        style={textAreaStyle}
        value={md_value} onChange={onChangeMdInput}
        label="Multiline"
        multiline
        variant="outlined"
      
      >
        <input 
        {...getInputProps()}
        />
        
      </TextField>
      <div style={textAreaStyle}  id='markdown'>
      </div>*/
      }
      
      <textarea
        value={md_value} 
        onChange={onChangeMdInput}
        style={
          {
            marginRight : "10px",
            width: "510px",
            height: "97vh",
            /* min-height: 100%; */
            resize: "none",
            flex: 1  
          }
        }
      >
        <input 
        {...getInputProps()}
        />
      </textarea>
      <div style={textAreaStyle}  id='markdown'>
      </div>
    </div>
    
  );
}

export default App;
