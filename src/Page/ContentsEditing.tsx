import React, {useEffect, useState} from 'react'
import InnerHTML from '../Component/InnerHTML';
import DropZoneTextArea from '../Component/DropZoneTextArea';
import highlighting from '../Common/highlighting'
import './Style/ContentsEditing.css'
const ContentsEditing : React.FC = ()=>{
    const [contents, setContents] = useState(''); // Text contents
    const [viewerContents, setViewerContents] = useState(''); // view contents

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

    return (
        <div>
            <DropZoneTextArea 
                contents={contents}
                setContents={setContents}
            />
            <InnerHTML 
                contents={viewerContents}
            />
        </div>
    )
}

export default ContentsEditing;