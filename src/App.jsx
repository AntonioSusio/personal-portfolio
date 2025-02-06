import React from "react"
import Header from "../components/Header";
import Main from "../components/Sections/Main";
import Footer from "../components/Footer";
import './i18n';

export default function App() {

  return (
    <div className="site-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
