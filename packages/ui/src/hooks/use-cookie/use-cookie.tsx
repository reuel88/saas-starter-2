import { useState, useCallback } from "react";
import Cookies from "js-cookie";

export const useCookie = (name: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    const cookie = Cookies.get(name);
    if (cookie) return JSON.parse(cookie)?.value;
    Cookies.set(name, JSON.stringify({ value: defaultValue }));
    return defaultValue;
  });

  const setCookie = useCallback(
    (newValue: any, options?: Cookies.CookieAttributes) => {
      Cookies.set(name, JSON.stringify({ value: newValue }), options);
      setValue(newValue);
    },
    [name],
  );

  const removeCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, setCookie, removeCookie];
};
