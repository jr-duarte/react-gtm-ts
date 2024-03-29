interface Window {
  dataLayer: {
    push: (params: { event: string; [key: string]: string | number }) => void;
  };
  react_gtm_ts: {
    init?: boolean;
    debug?: boolean;
    performance?: boolean;
  };
}
