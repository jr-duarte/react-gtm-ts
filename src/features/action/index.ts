type TActionProps = { event: string; [key: string]: string };

export const action = ({ event, ...more }: TActionProps) => {
  if (typeof window === 'undefined') return;

  window.dataLayer.push({
    event,
    ...more,
  });
};
