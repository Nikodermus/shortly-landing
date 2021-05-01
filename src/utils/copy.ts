const fallbackCopy = (originalText: string): void => {
  const text = document.createElement('textarea');
  text.value = originalText;
  text.style.display = 'none';

  document.body.appendChild(text);
  text.focus();
  text.select();

  document.execCommand('copy');
  text.remove();
};

const copyToClipboard = (text: string): void => {
  try {
    navigator.clipboard.writeText(text);
  } catch {
    fallbackCopy(text);
  }
};

export default copyToClipboard;
