import React from "react";
import SplitScreenLayout from "../components/SplitScreenLayout";
import Page2 from "./Page2";
import Page1 from "./Page1";

const DispatchAppPage: React.FC = () => {
  return (
    <SplitScreenLayout>
      <Page1 />
      <Page2 />
    </SplitScreenLayout>
  );
};

export default DispatchAppPage;
