import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import styles from './styles';
import arrowRight from 'assets/img/arrow-right.svg';
import development_svg from 'assets/img/code-coding-development-programming-web-webpage-svgrepo-com.svg';
import strategy_svg from 'assets/img/strategy.svg';
import design_svg from 'assets/img/vector-art-and-design-svgrepo-com.svg';

interface ICardProps {
  title: string;
}

const Card = ({ title }: ICardProps) => {
  let svg = null;

  switch (title) {
    case 'Strategy':
      svg = strategy_svg;
      break;
    case 'Product Design':
      svg = design_svg;
      break;
    case 'Development':
      svg = development_svg;
      break;
    default:
      return null;
  }

  return (
    <MuiCard sx={styles.card}>
      <CardContent sx={{ padding: 0 }}>
        <Box component='img' src={svg} />
        <Typography variant='h3' sx={styles.title}>
          {title}
        </Typography>
        <List>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} />
            Product Management
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} />
            MVP Definition
          </ListItem>
          <ListItem sx={styles.listItem}>
            <Box component='img' src={arrowRight} />
            Product Strategy
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ padding: 0 }}>
        <Button sx={styles.btn}>Read More</Button>
        <Box component='img' src={arrowRight} />
      </CardActions>
    </MuiCard>
  );
};

export default Card;
