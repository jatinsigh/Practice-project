import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  let [online, isOnline] = useState(navigator.onLine);

  const setOnline = () => {
    console.log("We are online!");
    isOnline(true);
  };
  const setOffline = () => {
    console.log("We are offline!");
    isOnline(false);
  };

  // Register the event listeners
  useEffect(() => {
    window.addEventListener("offline", setOffline);
    window.addEventListener("online", setOnline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener("offline", setOffline);
      window.removeEventListener("online", setOnline);
    };
  }, []);

  return online;
};
