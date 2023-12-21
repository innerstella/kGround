const shareUrl = (url: string) => {
  const baseUrl = "https://kground.web.app";
  navigator.clipboard.writeText(`${baseUrl}${url}`);
};

export default shareUrl;
