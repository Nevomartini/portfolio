import "../styles/globals.css";
import Navbar from "../Components/navbar";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
