"use client";

import { FC, useEffect, useRef, useState } from "react";
import { useCookie } from "../../hooks";
import { Button } from "../button";
import { Container } from "../container";
import { Wrapper } from "../wrapper";

export type PrivacyNoticeProps = {};

const COOKIE_NAME = "privacy-notice";

export const PrivacyNotice: FC<PrivacyNoticeProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [cookieValue, setCookie] = useCookie(COOKIE_NAME, false);

  useEffect(() => {
    if (!ref) return;

    setHeight(ref.current?.offsetHeight || 0);
  });

  const handleAcceptAll = () => {
    setCookie(true);
  };

  const handleRejectAll = () => {
    setCookie(true, { expires: 1 });
  };

  return cookieValue ? null : (
    <>
      <Wrapper
        ref={ref}
        className="fixed inset-x-0 bottom-0 border-t border-border bg-background py-6"
      >
        <Container className="flex flex-col justify-between gap-x-8 gap-y-4 md:flex-row md:items-center">
          <p className="text-background-foreground max-w-4xl text-sm leading-6">
            This website uses cookies to supplement a balanced diet and provide
            a much deserved reward to the senses after consuming bland but
            nutritious meals. Accepting our cookies is optional but recommended,
            as they are delicious. See our{" "}
            <a
              href="#"
              className="font-semibold text-hue-700 dark:text-hue-400"
            >
              cookie policy
            </a>
            .
          </p>
          <div className="flex flex-none items-center gap-x-5">
            <Button type="button" onClick={handleAcceptAll}>
              Accept all
            </Button>
            <Button type="button" variant="outline" onClick={handleRejectAll}>
              Reject all
            </Button>
          </div>
        </Container>
      </Wrapper>
      <div style={{ height }} />
    </>
  );
};
