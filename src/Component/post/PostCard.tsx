import { Fragment } from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  FormControlLabel,
  Checkbox,
  Box,
} from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 320,
      height: 366,
    },
    grid: {
      flexGrow: 1,
    },
    media: {
      //paddingTop: '50%', // 16:9
      flex: '1 1 40%',
    },
    avatar: {
      backgroundColor: red[500],
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    header: {
      height: '12%',
      borderTop: '1px solid #F8F9FA',
    },
    contents: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      height: '88%',
    },
    cardcontent: {
      //paddingTop: '50%', // 16:9
      flex: '1 1 40%',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
    content: { height: '90%', width: '290px', wordBreak: 'break-all' },
    info: { height: '10%' },
    like: {
      marginTop: '-5px',
    },
  }),
);

const changeFavorite = (e: any) => {
  console.log(e.target.value);
  console.log(e.target.checked);
  // console.log(e);
};
type PostCardProps = {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
    CntCmmt: number;
    fileURL: string;
  };
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const classes = useStyles();
  const value = post;
  return (
    <div>
      <Box m={2}>
        <Card key={value.id} className={classes.root}>
          <Box className={classes.contents}>
            <CardMedia image="/images/sunflower.jpg" title="Paella dish" className={classes.media} />
            <CardContent className={classes.cardcontent}>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.content}>
                {value.content}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" className={classes.info}>
                2021년 9월 7일 ● 10개의 댓글
              </Typography>
            </CardContent>
          </Box>
          {/* <CardActions disableSpacing> */}
          {/* <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton> */}
          {/* <FormControlLabel
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
              label=""
              onChange={changeFavorite}
              value={value.key}
            /> */}
          {/* <IconButton aria-label="share">
        <ShareIcon />
      </IconButton> */}
          {/* </CardActions> */}
          {/* <Box borderTop={1} borderColor="grey.100" className={classes.boxheader}> */}
          <CardHeader
            avatar={<Avatar aria-label="recipe" className={classes.avatar} src="" />}
            action={
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<FavoriteBorder fontSize={'small'} />}
                    checkedIcon={<Favorite fontSize={'small'} />}
                    name="checkedH"
                  />
                }
                label="50"
                onChange={changeFavorite}
                value={value.id}
                className={classes.like}
              />
              /*label = 좋아요 수 넣기*/
            }
            title={value.title}
            className={classes.header}
          />
          {/* </Box> */}
        </Card>
      </Box>
    </div>
  );
};
export default PostCard;
