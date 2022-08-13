import { Box } from '@mui/material';
import './styles/index.css';
import { Header, Hero } from 'components';
import CreativeDesign from 'components/CreativeDesign/CreativeDesign';

const App = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <CreativeDesign />
    </Box>
  );
};

export default App;
