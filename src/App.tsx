import { Box } from '@mui/material';
import {
  ContactUs,
  CreativeDesign,
  Experience,
  Footer,
  Header,
  Hero,
} from 'components';

const App = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <CreativeDesign />
      <Experience />
      <ContactUs />
      <Footer />
    </Box>
  );
};

export default App;
