"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { buttonVariants } from "@repo/ui/components";

export const BackButton = () => {
  const { t } = useTranslation();

  return (
    <Link href="/" className={buttonVariants()}>
      {t("back")}
    </Link>
  );
};
