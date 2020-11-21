import React, { useState, createContext } from "react";
const Context = createContext();
const defaultMastodon = 'https://g0v.social';

function openUrl(url) {
  window.open(url, 'posttox_target');
}


export function MainContextProvider({children}) {
  const [mastodonInstance, setMastodonInstance] = useState(localStorage.mastodonInstance ?? defaultMastodon);
  const [message, setMessage] = useState(localStorage.message ?? '');
  const [copiedSnackBarOpen, setCopiedSnackBarOpen] = useState(false);

  const setMastodonInstanceWrapper = (instance) => {
    localStorage.mastodonInstance = instance;
    setMastodonInstance(instance);
  }

  const setMessageWrapper = (message) => {
    localStorage.message = message;
    setMessage(message);
  }

  const copyToClipboard = () => {
    const tmp = document.createElement("textarea");
    tmp.style = "position: absolute; left: -10000px; top: -10000px";
    tmp.value = message;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    setCopiedSnackBarOpen(true);
  }

  const value = {
    mastodonInstance,
    setMastodonInstance: setMastodonInstanceWrapper,
    message,
    setMessage: setMessageWrapper,
    copiedSnackBarOpen,
    setCopiedSnackBarOpen,
    openUrl,
    copyToClipboard
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export const MainContextConsumer = Context.Consumer;
export const MainContext = Context;
