import React from 'react';
import SNSTableRow from './SNSTableRow.js';
import { MainContext } from '~/context/MainContext';
import Link from './LinkElement';

function PlurkRowButtons() {

  const {
    message,
  } = React.useContext(MainContext);

  const disabled = message.length === 0;

  const text = encodeURIComponent(message);
  const postUrl = `http://plurk.com/?qualifier=shares&status=${text}`

  return (
    <SNSTableRow title="Plurk"
      openButton={
      (<Link href="https://plurk.com">
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

export default PlurkRowButtons;
