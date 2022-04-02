import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import SummarizeIcon from '@mui/icons-material/Summarize';
import InfoIcon from '@mui/icons-material/Info';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

const Header = () =>  {
	const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'75%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
	};
	const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
		return (
		<>

			<Typography  sx={{
	    fontSize: {
	      lg: 65,
	      md: 60,
	      sm: 55,
	      xs: 40
	    }
	  }} variant = "h2" component = "div">
				Anirudh Venkataramanan
			</Typography>
	     	<ButtonGroup variant = "text" aria-label = "text button group">
		        <Button target="_blank" href = "https://www.linkedin.com/in/anirudhvenkataramanan/"><LinkedInIcon color = "action" fontSize = "large" /></Button>
		        <Button target="_blank" href = "https://twitter.com/anirudhvenky"><TwitterIcon color = "action" fontSize = "large" /></Button>
		        <Button target="_blank" href = "https://github.com/anirudhv"><GitHubIcon color = "action" fontSize = "large" /></Button>
		        <Button target="_blank" href = "mailto:anirudhv@purdue.edu"><EmailIcon color = "action" fontSize = "large" /></Button>
		        <Button target="_blank" href = "Anirudh_Resume.pdf"><SummarizeIcon color = "action" fontSize = "large" /></Button>
		        <Button href = {null} onClick={handleOpen}><InfoIcon color = "action" fontSize = "large" /></Button>
	     	</ButtonGroup>
	     	<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              About Me
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Hello! My name is Anirudh Venkataramanan. <br /> I am an undergraduate senior at Purdue University
              majoring in Computer Graphics Technology and minoring in Computer Science and Information Technology.
              I have been accepted to multiple universities for graduate school, including UC Santa Cruz, Purdue
              University, University of Maryland - College Park, San Jose State University, and Rochester Institute of Technology. I will be a 
              Master's student starting this fall. <br /> I am currently actively looking for summer 2022 internship opportunities.
            </Typography>
          </Box>
        </Fade>
      </Modal>
			<Typography variant = "h4" gutterBottom component = "div">
				Project Portfolio
			</Typography>
			<hr />
		</>
	);
}

export default Header;