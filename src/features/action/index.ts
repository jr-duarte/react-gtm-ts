type GTMActionProps = { event: string; [key: string]: string };

export const GTMAction = ({ event, ...more }: GTMActionProps) => {
  if (typeof document !== 'undefined') return;
  window.dataLayer.push({
    event,
    ...more,
  });
};
