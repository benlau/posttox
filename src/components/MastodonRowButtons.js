import React, {useState, useContext} from 'react';
import SNSTableRow from './SNSTableRow.js';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { MainContext } from '~/context/MainContext';
import makeStyles from '@material-ui/core/styles/makeStyles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Link from './LinkElement';

const mastodonEncodedLengthLimit= 700;

const useStyles = makeStyles(() => ({
  configBar: {
    borderBottom: '0px'
  }
}));

function MastodonRowButtons() {
  const classess = useStyles();

  const [configBarOpen, setConfigBarOpen] = useState(false);

  const {
    mastodonInstance,
    setMastodonInstance,
    message
  } = useContext(MainContext);
  const encodedMessage = encodeURIComponent(message);

  const postDisabled = message.length === 0 || encodedMessage.length > mastodonEncodedLengthLimit || mastodonInstance === '';
  const openDisabled = mastodonInstance === '';

  const text = encodeURIComponent(message);
  const postUrl = `${mastodonInstance}/share?text=${text}`

  const handleChange = (event) => {
    setMastodonInstance(event.target.value);
  };

  const randomPick = () => {

    const pick = () => {
      const examples = [
        "https://g0v.socal",
        "https://mastodon.social",
        "https://pawoo.net/"
      ]
      const index = Math.floor(Math.random() * Math.floor(examples.length));
      return examples[index];
    }

    let picked = pick();
    while (picked === mastodonInstance) {
      picked = pick();
    }

    setMastodonInstance(picked);
  }

  return (
    <React.Fragment>
      <SNSTableRow title={
          <React.Fragment>
            Mastodon
            <IconButton aria-label="expand row" size="small" onClick={() =>setConfigBarOpen(!configBarOpen)}>
            {configBarOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </React.Fragment>
        }
        openButton={(
          <Link href={mastodonInstance} disabled={openDisabled}>
            OPEN
          </Link>
        )}

        postButton={(
          <Link href={postUrl} disabled={postDisabled}>
            POST
          </Link>
          )}
      >
      </SNSTableRow>
      <TableRow>
        <TableCell className={classess.configBar} style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={configBarOpen} timeout="auto" unmountOnExit>
            <Box display="flex" alignItems="flex-end">
              <Box clone flexGrow={1}>
                <TextField
                  autoFocus
                  margin="dense"
                  value={mastodonInstance}
                  fullWidth
                  label="Address"
                  onChange={handleChange}
                >
                </TextField>
              </Box>
              <Button style={{marginLeft: '16px'}} onClick={randomPick}>
              Random</Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default MastodonRowButtons;
