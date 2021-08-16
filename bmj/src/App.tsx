import React, {useState,useCallback} from 'react';
//import logo from './logo.svg';
//import './App.css';


import Chip from '@material-ui/core/Chip';
import {useDropzone} from 'react-dropzone';
import { Avatar, CardHeader, IconButton, Button,TextField,Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

//https://material-ui.com/components/dividers/#vertical-dividers : 에디터 위에 아이콘 추가
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 330,
    },
    grid: {
      flexGrow: 1,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
  

function App() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const data  = ()=>{
    let array = [
      {
        key : 1,
        title : "title1",
        content : "content1",
        date : "date1",
        CntCmmt : 1,
        fileURL : "fileURL1"
      },
        {
          key : 2,
          title : "title2",
        content : "content2",
        date : "date2",
        CntCmmt :2,
        fileURL : "fileUR2"
      },
        {
          key : 3,
          title : "title3",
        content : "content3",
        date : "date3",
        CntCmmt :3,
        fileURL : "fileUR3"
      },
        {
          key : 4,
          title : "title4",
        content : "content4",
        date : "date4",
        CntCmmt :4,
        fileURL : "fileUR4"
      },
        {
          key : 5,
          title : "title5",
        content : "content5",
        date : "date5",
        CntCmmt :5,
        fileURL : "fileUR5"
      },
        {
          key : 6,
          title : "title6",
        content : "content6",
        date : "date6",
        CntCmmt :6,
        fileURL : "fileUR6"
      },
        {
          key : 7,
          title : "title7",
        content : "content7",
        date : "date7",
        CntCmmt :71,
        fileURL : "fileUR71"
      },
        {
          key : 8,
          title : "title8",
        content : "content8",
        date : "date8",
        CntCmmt :81,
        fileURL : "fileUR81"
      },
       
        {
          key : 9,
          title : "title9",
        content : "content9",
        date : "date9",
        CntCmmt :91,
        fileURL : "fileUR91"
      },
        {
          key : 10,
          title : "title10",
        content : "content10",
        date : "date10",
        CntCmmt : 10,
        fileURL : "fileURL10"
      },
        {
          key :11,
          title : "title11",
        content : "content11",
        date : "date11",
        CntCmmt :111,
        fileURL : "fileUR111"
      },
        {
          key :12,
          title : "title12",
        content : "content12",
        date : "date12",
        CntCmmt :121,
        fileURL : "fileUR121"
      },
        
        {
          key : 13,
          title : "title13",
        content : "content13",
        date : "date13",
        CntCmmt :131,
        fileURL : "fileUR131"
      },
        {
          key : 14,
          title : "title14",
        content : "content14",
        date : "date14",
        CntCmmt :141,
        fileURL : "fileUR141"
      },
        {
        
          key : 15,
          title : "title15",
        content : "content15",
        date : "date15",
        CntCmmt :151,
        fileURL : "fileUR151"
      },
        {
        
          key : 16,
          title : "title16",
        content : "content16",
        date : "date16",
        CntCmmt :161,
        fileURL : "fileUR161"
      }
    
  ];
   
  return array;
    
  };
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let [dataArray, setDataArray] = React.useState(data);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  
    const onDrop = useCallback(acceptedFiles => {
      // Do something with the files
      acceptedFiles.forEach((file :any) => {
        const reader = new FileReader()
  
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
        // Do whatever you want with the file contents
          const binaryStr = reader.result
         
          console.log(binaryStr);
        
        }
    //    reader.readAsArrayBuffer(file)
        reader.readAsDataURL(file);
      })
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});
  


  // Actual default values

  const hljs = require('highlight.js'); // https://highlightjs.org/
  const md = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str: String, lang: any) {
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

  
  let [mdText,setMdText] = useState<String>("");
  ///let [mdHtml,setMdHtml] = useState<String>("");


  const onChange = (e: any) => {
    setMdText(e.target.value);
    // var result = md.render(mdText);
    const name: HTMLElement = document.getElementById('markdown') as HTMLElement
    name.innerHTML = md.render(mdText);
  };

  const changeFavorite = (e: any)=>{
    console.log(e.target.value);
    console.log(e.target.checked);
    // console.log(e);
  }


 const style= {
  
   width : "100%"
 }


  return (
    <div className="App">
      <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/default.min.css"/>

      <header className="App-header">
        <Button color="secondary">버튼이야</Button>
        <Button variant="contained" color="primary">
          Secondary
        </Button>

        <Chip
        icon={<FaceIcon />}
        label="Deletable secondary"
        onDelete={handleDelete}
        color="secondary"
      />
 <div {...getRootProps()}>
        <TextField
          //error
          
          label="Multiline"
          multiline
          rows={4}
         /// defaultValue="Default Value"
          variant="outlined"
          onChange={onChange}
          style={style}
        >{mdText}
         <input {...getInputProps()} />
        </TextField>
        </div>

        <div id="markdown"></div>
      </header>   

      {/* <Grid container className={classes.grid} spacing={1}> */}
      <Box display="flex" flexWrap="wrap">
       { dataArray.map(value =>{
         return(
          // <Grid item xs={2}>
          // <Grid container justifyContent="center" spacing={1} className={classes.paper}>
          <Box m={1}>
    <Card key={value.key} className={classes.root}>
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={value.title}
      subheader="September 14, 2016"
    />
    <CardMedia
      className={classes.media}
      image="/static/images/cards/paella.jpg"
      title="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        {value.content}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      {/* <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton> */}
       <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label=""
        onChange={changeFavorite}
        value={value.key}
      />
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      {/* <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton> */}
    </CardActions>
    {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>Method:</Typography>
        <Typography paragraph>
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
          minutes.
        </Typography>
        <Typography paragraph>
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
          heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
          browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
          and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
          pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
          saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
        <Typography paragraph>
          Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
          without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
          medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
          again without stirring, until mussels have opened and rice is just tender, 5 to 7
          minutes more. (Discard any mussels that don’t open.)
        </Typography>
        <Typography>
          Set aside off of the heat to let rest for 10 minutes, and then serve.
        </Typography>
      </CardContent>
    </Collapse> */}
  </Card> 
  </Box> 

         );
  })}
  {/* </Grid> */}
  </Box>
    </div>
  );
}
export default App;