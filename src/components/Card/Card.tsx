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
import strategy_svg from 'assets/img/strategy.svg';

const Card = () => {
  return (
    <MuiCard sx={styles.card}>
      <CardContent>
        <Box component='img' src={strategy_svg} />
        <Typography variant='h3' sx={styles.title}>
          Strategy
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
