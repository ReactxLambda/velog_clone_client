import React, {useEffect, useState} from 'react'
import MarkdownViewer from '../Component/MarkdownViewer';
import DropZoneTextArea from '../Component/DropZoneTextArea';
import highlighting from '../Common/highlighting'
import Input from '../Component/Input'
import './Style/ContentsEditing.css'

const ContentsEditing : React.FC = ()=>{
    const [contents, setContents] = useState(''); // Text contents
    const [viewerContents, setViewerContents] = useState(''); // view contents
    const [header, setHeader] = useState(''); // set view header
    const hljs = require('highlight.js');

    const markdown = require('markdown-it')({
        highlight: function (str : string, lang : string) {
          return highlighting(str, lang, hljs, markdown);
        }
    });

    useEffect(() => {
        console.log(contents);
        setViewerContents(markdown.render(contents))
    }, [contents]);
    
    useEffect(() => {
        console.log(viewerContents);
        const markdown_viewer : any = document.getElementById('markdown-viewer');
        markdown_viewer.innerHTML = viewerContents; 
    }, [viewerContents]);

    useEffect(() => {
        console.log(header)
        const markdown_header : any = document.getElementById("markdown-header");
        markdown_header.innerText = header
    }, [header])

    return (
        <div className='markdown-contents'>
            <div className='contents-editor'>
                <Input
                    type={'text'} 
                    contents={header}
                    setContents={setHeader}
                    hint={''} 
                    disabled={false}
                    label={'Header'} 
                />
                <DropZoneTextArea 
                    contents={contents}
                    setContents={setContents}
                />
            </div>
            <div className='contents-viewer'>
                <MarkdownViewer/>
            </div>
        </div>
    )
}

export default ContentsEditing;