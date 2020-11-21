import React from 'react';
import Link from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  disabled: {
    pointerEvents: 'none',
    color: theme.palette.action.disabled
  }
}));

function LinkElement({href, onClick, disabled, children}) {
  const classess = useStyles();

  const className = disabled ? classess.disabled : '';

  return (
    <Link
      href={href}
      onClick={onClick}
      target="_blank"
      className={className}
      underline="none"
      rel="noopener noreferrer" >
      {children}
    </Link>
  )
}

export default LinkElement;
