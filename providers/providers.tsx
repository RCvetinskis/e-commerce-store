"use client";
import { PreviewModal } from "@/components/preview-modal";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PreviewModal></PreviewModal>
    </>
  );
};

export const ToastProvider = () => {
  return <Toaster></Toaster>;
};
