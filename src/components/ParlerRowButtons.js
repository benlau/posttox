import React from 'react';
import SNSTableRow from './SNSTableRow.js';
import { MainContext } from '~/context/MainContext';
import Link from './LinkElement';

function ParlerRowButtons() {

  const {
    message
  } = React.useContext(MainContext);

  const text = encodeURIComponent(message);
  const postUrl = `https://parler.com/new-post?message=${text}`
  const disabled = message.length === 0;

  return (
    <SNSTableRow title="Parler"
      openButton={
      (<Link href="https://parler.com/">
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

export default ParlerRowButtons;
