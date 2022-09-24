import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import { IPost } from '../../types/item';
declare interface Props {
  item: IPost;
}

export const Item = ({ item }: Props) => {
  function randomColor() {
    const hex = Math.floor(Math.random() * 0xffffff);
    const color = '#' + hex.toString(16);

    return color;
  }

  const navigate = useNavigate();

  return (
    <Card key={item.id}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            style={{
              backgroundColor: randomColor(),
            }}
          >
            {item.owner.firstName[0]}
          </Avatar>
        }
        title={`${item.owner.firstName} ${item.owner.lastName}`}
        subheader="September 14, 2016"
      />
      <CardActionArea onClick={() => navigate(`/posts/${item.id}`)}>
        <CardMedia component="img" image={item.image} alt="Paella dish" />
      </CardActionArea>

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
