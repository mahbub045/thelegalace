"use client";

import Footer from "@/components/Layout/Footer/Footer";
import NavBar from "@/components/Layout/NavBar/NavBar";
import { useEffect, useState } from "react";
import TapTop from "../TapTop/TapTop";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
  const [hideLayout, setHideLayout] = useState(false);

  useEffect(() => {
    const checkHideLayout = () => {
      setHideLayout(document.body.classList.contains("hide-layout"));
    };

    // Initial check
    checkHideLayout();

    // Set up a MutationObserver to watch for class changes
    const observer = new MutationObserver(checkHideLayout);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <NavBar />
      <TapTop />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ConditionalLayout;
