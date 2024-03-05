"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export const BackButton = () => {
  const { t } = useTranslation();

  return <Link href="/">{t("back")}</Link>;
};
