import React from 'react';
import SNSTableRow from './SNSTableRow.js';
import { MainContext } from '~/context/MainContext';
import Link from './LinkElement';

function TwitterRowButtons() {

  const {
    message,
  } = React.useContext(MainContext);

  const disabled = message.length === 0;

  const text = encodeURIComponent(message);
  const postUrl = `https://twitter.com/intent/tweet?text=${text}`

  return (
    <SNSTableRow title="Twitter"
      openButton={
      (<Link href="https://twitter.com/">
        OPEN
      </Link>)}

      postButton={
        (<Link href={postUrl} disabled={disabled}>
          POST
        </Link>)
      }

    >
    </SNSTableRow>
  )
}

export default TwitterRowButtons;
