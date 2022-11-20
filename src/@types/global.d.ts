interface Window {
  dataLayer: {
    push: (params: { event: string; [key: string]: string }) => void;
  };
}
