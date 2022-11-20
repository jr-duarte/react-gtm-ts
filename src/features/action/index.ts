type TActionProps = { event: string; [key: string]: string };

export const action = ({ event, ...more }: TActionProps) => {
  if (typeof window === 'undefined') return;
  if (typeof window.dataLayer.push === 'undefined') return;

  window.dataLayer.push({
    event,
    ...more,
  });
};
