import React from "react";
import { useTranslation } from "react-i18next";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine, RiVerifiedBadgeFill } from "react-icons/ri";

const items = [
  {
    key: "delivery",
    icon: <TbTruckDelivery />,
  },
  {
    key: "customer_service",
    icon: <RiCustomerServiceLine />,
  },
  {
    key: "money_back",
    icon: <RiVerifiedBadgeFill />,
  },
];

function Services() {
  const { t } = useTranslation();

  return (
    <div id="services" className="container mx-auto lg:mb-16 mb-12">
      <p className="text-secondary flex items-center gap-4 lg:text-lg">
        <span className="bg-secondary h-8 w-3 rounded-sm"></span>
        <span className="font-semibold">{t("services.title")}</span>
      </p>
      <h2 className="lg:text-4xl text-2xl font-medium lg:mt-4 lg:mb-9 mt-3 mb-7 text-center lg:text-left">
        {t("services.heading")}
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {items.map((item, index) => (
          <div
            className="flex flex-col lg:gap-4 gap-2 items-center"
            key={index}
          >
            <div className="bg-gray-400 text-4xl rounded-full p-4">
              {item.icon}
            </div>
            <h3 className="lg:text-2xl text-base font-bold">
              {t(`services.items.${item.key}.title`)}
            </h3>
            <p className="lg:text-base text-sm text-center">
              {t(`services.items.${item.key}.desc`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
