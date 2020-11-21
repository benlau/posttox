import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import WordCounter from '~/components/WordCounter';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SNSTable from '~/components/SNSTable';
import { MainContext } from '~/context/MainContext';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '20px',
    margin: '0px',
    maxWidth: '640px',
  },
  full: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  page: {
    width: '100vw',
    height: '100vh'
  },
  appBar: {
    position: 'relative',
    margin: 0,
    padding: 0,
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  link: {
    textDecoration: "none",
    '&, &:visited, &:active' : {
      color: 'inherit'
    }
  }
}));

const Content = ({children}) => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" className={classes.content}>
      <Box flexGrow={1} clone>
          <Paper className={classes.paper}>
            {children}
          </Paper>
        </Box>
    </Box>
  )
}

function Base() {
  const classes = useStyles();

  const {
    message,
    setMessage,
    copyToClipboard,
    copiedSnackBarOpen,
    setCopiedSnackBarOpen,
  } = useContext(MainContext);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const closeSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCopiedSnackBarOpen(false);
  }

  return (
    <Content>
      <Box display="flex" flexDirection="column" className={classes.full}>

        <Box display='flex'  alignItems="center" >
          <Typography gutterBottom display="inline" variant="h5">
            PostToX
          </Typography>
        </Box>

        <Typography gutterBottom variant="subtitle1">
          Write something and post to X SNS platforms.
          &nbsp;
          <a href="https://github.com/benlau/posttox" className={classes.link} target="_blank">Learn more.</a>
        </Typography>
        <Box clone>
          <TextField
            label="Message"
            multiline
            variant="filled"
            rows={10}
            onChange={handleChange}
            defaultValue={message}
            className={classes.textField}
          />
        </Box>
        <Box display="flex" alignItems="flex-start">
          <Tooltip title="Copy to Clipboard">
            <IconButton aria-label="Copy" onClick={copyToClipboard} disabled={message.length === 0}>
              <FileCopyIcon/>
            </IconButton>
          </Tooltip>

          <Box flexGrow={1}></Box>
          <WordCounter message={message}></WordCounter>
        </Box>
        <SNSTable>
        </SNSTable>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        message="Copied to Clipboard"
        open={copiedSnackBarOpen}
        autoHideDuration={800}
        onClose={closeSnackBar}
        >
      </Snackbar>
    </Content>
  );
}

export default Base;
