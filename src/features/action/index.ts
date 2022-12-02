type TActionProps = { event: string; [key: string]: string | number };

/**
 * This is the function responsible for triggering the event.
 *
 * @param {string} event - A string param.
 * @param {Object.<string, string | number>} ...more - A object param [key: string]: string | number
 * @returns void
 * See more https://github.com/jr-duarte/react-gtm-ts
 */

export const action = ({ event, ...more }: TActionProps): void => {
  if (typeof window?.dataLayer?.push !== 'undefined') {
    window.dataLayer.push({
      event,
      ...more,
    });
    if (window?.react_gtm_ts?.debug) {
      console.log('🟢 react-gtm-ts - action - ', {
        event,
        ...more,
      });
    }
  } else {
    console.error(
      '🛑 react-gtm-ts - Add ReactTagManager.init passing GTM code in app or _app (nextjs), see more in the documentation https://github.com/jr-duarte/react-gtm-ts',
    );
  }
};
