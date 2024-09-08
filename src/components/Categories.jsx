import React from "react";
import { useTranslation } from "react-i18next";
import { useTabStore } from "../zustand/tabStore";
import { useTabs } from "../api/tab";

function Categories() {
  const { t } = useTranslation();
  const { activeTab, setActiveTab } = useTabStore();
  const items = useTabs();

  console.log(activeTab);
  // Use the raw activeTab to match with item.title
  const isActive = (tab) => activeTab === tab;

  return (
    <div className="container mx-auto lg:pt-12 py-6">
      <p className="text-secondary flex items-center gap-4 lg:text-lg">
        <span className="bg-secondary h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">{t("categories.title")}</span>
      </p>
      <h2 className="lg:text-4xl text-2xl font-medium text-center lg:text-left lg:mt-4 lg:mb-9 mt-3 mb-7">
        {t("categories.browse_by_category")}
      </h2>
      <div className="grid xl:grid-cols-6 md:grid-cols-3 grid-cols-3 gap-6 lg:pb-16 pb-10 border-b-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`lg:py-6 py-2 border-2 flex flex-col items-center justify-evenly lg:gap-3 gap-2 rounded-lg cursor-pointer
              ${
                isActive(item.title.toLowerCase())
                  ? "bg-secondary text-white"
                  : ""
              }`}
            onClick={() => setActiveTab(item.title.toLowerCase())}
          >
            <p className="lg:text-4xl">{item.icon}</p>
            <p className="text-sm lg:text-base text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
