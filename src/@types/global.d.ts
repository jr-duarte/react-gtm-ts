interface Window {
  dataLayer: {
    push: (params: { event: string; [key: string]: string }) => void;
  };
  react_gtm_ts: {
    debug: boolean;
  };
}
