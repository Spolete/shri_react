import { useLayoutEffect } from 'react';

export const useBodyScrollLock = (showModal: boolean) => {
  useLayoutEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyHeight = document.body.style.height;

    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.height = originalBodyHeight;
    }

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.height = originalBodyHeight;
    };
  }, [showModal]);
}
