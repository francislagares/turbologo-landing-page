import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import arrowRight from 'assets/img/arrow-right.svg';
import strategy_svg from 'assets/img/strategy.svg';

const Card = () => {
  return (
    <MuiCard>
      <CardContent>
        <Box component='img' src={strategy_svg} />
        <Typography variant='h3'>Strategy</Typography>
        <List>
          <ListItem>
            <Box component='img' src={arrowRight} />
            Product Management
          </ListItem>
          <ListItem>
            <Box component='img' src={arrowRight} />
            MVP Definition
          </ListItem>
          <ListItem>
            <Box component='img' src={arrowRight} />
            Product Strategy
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        Read More
        <Box component='img' src={arrowRight} />
      </CardActions>
    </MuiCard>
  );
};

export default Card;
