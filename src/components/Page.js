import React from "react";
import { Footer, MainContent, Nav, Sidebar, SocialMedia } from "./PageLayout";

const Page = () => {
  return (
    <div>
      <Sidebar />
      <Footer />
      <MainContent />
      <Nav />
      <SocialMedia />
    </div>
  );
};

export default Page;
