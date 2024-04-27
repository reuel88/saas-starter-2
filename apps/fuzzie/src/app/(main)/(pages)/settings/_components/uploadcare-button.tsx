"use client";

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import * as LR from "@uploadcare/blocks";

type Props = {
  onUpload: (e: string) => any;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };

    ctxProvider.addEventListener("file-upload-success", handleUpload);

    return () => {
      ctxProvider.removeEventListener("file-upload-success", handleUpload);
    };
  }, []);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="c9c31eff1dd80f2e738e" />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
