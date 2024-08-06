import React from "react";
import { Tabs, Tab as TabButton } from "./styled";

const Tab = () => {
  return (
    <Tabs>
      <TabButton>All</TabButton>
      <TabButton>Nearby</TabButton>
      <TabButton>In store</TabButton>
      <TabButton>Deals</TabButton>
    </Tabs>
  );
};

export default Tab;
