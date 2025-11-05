import { useState, useCallback } from 'react';

export function useCopyToClipboard(timeout = 2000): [boolean, (text: string) => void] {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = useCallback((text: string) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard API not available');
      return;
    }

    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }, [timeout]);

  return [isCopied, handleCopy];
}
