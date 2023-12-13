import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="mx-0">
      <Header />

      {children}

      <Footer />
    </div>
  );
}
