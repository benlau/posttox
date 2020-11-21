import React from 'react';
import Typography from '@material-ui/core/Typography';
import GraphemeSplitter from 'grapheme-splitter';

const splitter = new GraphemeSplitter();


function WordCounter ({message}) {
  const count = splitter.countGraphemes(message);

  return (
    <Typography display="inline" variant="body1">{count}</Typography>
  )
}

export default WordCounter;
