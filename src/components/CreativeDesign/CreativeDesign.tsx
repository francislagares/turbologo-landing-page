import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from 'components/Card/Card';

const data = [
  { title: 'Strategy' },
  { title: 'Product Design' },
  { title: 'Development' },
];

const CreativeDesign = () => {
  return (
    <Box>
      <Box>
        {' '}
        <Typography variant='h2'>Creative Design Solution</Typography>
        <Typography variant='body1'>
          Professional Design Agency to Provide Solutions
        </Typography>
        <Stack>
          {data.map(item => (
            <Card title={item.title} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default CreativeDesign;
