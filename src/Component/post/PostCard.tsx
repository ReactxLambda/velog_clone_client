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
    },
    grid: {
      flexGrow: 1,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: red[500],
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
    key: number;
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
      <CardMedia className={classes.media} image="/static/images/cards/paella.jpg" title="Paella dish" />
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
        {/* <IconButton aria-label="share">
        <ShareIcon />
      </IconButton> */}
      </CardActions>
    </Card>
  );
};
export default PostCard;
