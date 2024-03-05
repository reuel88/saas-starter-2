"use client";

// TODO: move to ui components

import i18nConfig from "@repo/i18n/config";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";

export const LanguageChanger = () => {
  const router = useRouter();
  const currentPathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <div>
      <select
        className="text-black"
        onChange={handleChange}
        value={currentLocale}
      >
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  );
};
