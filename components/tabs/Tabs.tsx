import { categories } from "../../constants/categories";
import Tab from "./Tab";
import { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("viewAll");

  return (
    <div className="tabs">
      {categories.map((category, index) => (
        <Tab
          key={`${category}-${index}`}
          onClick={() => setActiveTab(category)}
          isActive={activeTab === category}
        >
          {category}
        </Tab>
      ))}
    </div>
  );
}
export default Tabs;
