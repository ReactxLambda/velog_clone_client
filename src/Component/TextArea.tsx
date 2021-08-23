import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

type TextAreaProp = {
    enableDropZone : boolean
}
const TextArea : React.FC<TextAreaProp> = ({enableDropZone})=>{
    // DropZone set up start
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
    // DropZone set up end


    return (
        <div>
            
        </div>
    )
}

export default TextArea;