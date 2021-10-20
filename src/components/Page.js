import React from "react";
import { Footer, MainContent, Nav, Sidebar, SocialMedia } from "./PageLayout";
import "./Page.css";
const Page = () => {
  return (
    <div className="layout">
      <Nav />
      <MainContent />
      <Sidebar />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Page;
