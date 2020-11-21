import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function SNSTableRow({title, openButton, postButton}) {
  return (
    <TableRow>
      <TableCell align="left">
        {title}
      </TableCell>
      <TableCell align="right">
        {openButton}
      </TableCell>
      <TableCell align="right">
        {postButton}
      </TableCell>
    </TableRow>
  )
}

export default SNSTableRow;
