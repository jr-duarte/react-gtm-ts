type GTMActionProps = { event: string; [key: string]: string };

export const GTMAction = ({ event, ...more }: GTMActionProps) => {
  window.dataLayer.push({
    event,
    ...more,
  });
};
