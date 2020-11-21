import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TwitterRowButtons from './TwitterRowButtons';
import ParlerRowButtons from './ParlerRowButtons';
import PlurkRowButtons from './PlurkRowButtons';
import MastodonRowButtons from './MastodonRowButtons';
import SNSTableRow from './SNSTableRow.js';
import { MainContext } from '~/context/MainContext';
import Link from './LinkElement';

const Container = ({children}) => {
  return (
    <div style={{width: '100%', maxWidth: '640px'}}>
      {children}
    </div>
  )
}

const OpenOnlyButtons = ({title, url}) => {
  return (
    <SNSTableRow title={title}
      openButton={
      (<Link href={url}>
        OPEN
      </Link>)}

    >
    </SNSTableRow>
  )
}

const GabButtons = () => {
  return (
    <OpenOnlyButtons title="gab" url="https://gab.com"></OpenOnlyButtons>
  )
}

const MeWeButtons = () => {
  return (
    <OpenOnlyButtons title="MeWe" url="https://mewe.com/myworld"></OpenOnlyButtons>
  )
}

const FacebookButtons = () => {
  return (
    <OpenOnlyButtons title="Facebook" url="https://facebook.com"></OpenOnlyButtons>
  )
}

function SNSTable() {
  const {
    message
  } = React.useContext(MainContext);

  return (
    <TableContainer component={Container}>
      <Table>
        <TableBody>
          <MastodonRowButtons/>
          <MeWeButtons/>
          <ParlerRowButtons message={message}/>
          <PlurkRowButtons message={message}/>
          <GabButtons/>
          <TwitterRowButtons message={message}/>
          <FacebookButtons/>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SNSTable;
