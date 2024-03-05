"use client";

import { useTranslation } from "react-i18next";

export const ClientExample = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h3>{t("greeting")}</h3>
    </div>
  );
};
