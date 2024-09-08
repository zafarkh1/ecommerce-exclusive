import { useTranslation } from "react-i18next";
import {
  MdPhoneAndroid,
  MdComputer,
  MdWatch,
  MdOutlineFitnessCenter,
  MdCoffeeMaker,
  MdOutlineClearAll,
} from "react-icons/md";

export const useTabs = () => {
  const { t } = useTranslation();

  return [
    { title: t("tabs.all"), icon: <MdOutlineClearAll /> },
    { title: t("tabs.electronics"), icon: <MdComputer /> },
    { title: t("tabs.phones"), icon: <MdPhoneAndroid /> },
    { title: t("tabs.fitness"), icon: <MdOutlineFitnessCenter /> },
    { title: t("tabs.accessories"), icon: <MdWatch /> },
    { title: t("tabs.appliances"), icon: <MdCoffeeMaker /> },
  ];
};
