import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Typography from '@mui/material/Typography';

import styles from './styles';
import photo_send from 'assets/img/photo_send_2.png';
import Button from 'components/Button/Button';

const ContactUs = () => {
  return (
    <Box sx={styles.contactUs}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.form}>
          <Typography variant='h2'>Mind! Contact Us</Typography>
          <Typography variant='body1' sx={{ margin: '24px 0' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum,
            sagittis eget facilisi in in urna tristique risus. Tortor
            consectetur nulla pretium malesuada porttitor.
          </Typography>
          <Box sx={styles.info}>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <MailOutlineIcon sx={styles.imgInfo} /> email us
              </Box>
              <Box sx={styles.titleValue}>support@gmail.com</Box>
            </Box>
            <Box sx={styles.itemBlockInfo}>
              <Box sx={styles.titleInfo}>
                <LocalPhoneIcon sx={styles.imgInfo} /> phone us
              </Box>
              <Box sx={styles.titleValue}>+012 (345) 67 89</Box>
            </Box>
          </Box>

          <Box sx={styles.inputs}>
            <TextField placeholder='Full name' sx={styles.textField} />
            <TextField placeholder='Email address' sx={styles.textField} />
          </Box>
          <TextareaAutosize
            minRows={6}
            placeholder='Write message'
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            style={styles.textareaAutosize}
          />
          <Button>
            send us message <ArrowForwardIosIcon />
          </Button>
        </Box>
        <Box>
          <Box component='img' src={photo_send} sx={styles.photo} />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
