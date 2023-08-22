type TInitProps = { code: string; debug?: boolean; performance?: boolean };

/**
 * This is the function responsible for adding the necessary scripts for GTM.
 *
 * @param {string} code - A string param.
 * @param  {boolean} [debug=false] - A boolean param.
 * @param  {boolean} [performance=false] - A boolean param.
 * @return - void
 *
 * See more https://github.com/jr-duarte/react-gtm-ts
 */

export const init = ({
  code,
  debug = false,
  performance = false,
}: TInitProps): void => {
  if (typeof window === 'undefined') return;
  if (window?.react_gtm_ts?.init) return;

  window.react_gtm_ts = {
    debug,
    performance,
  };

  if (performance) {
    document.addEventListener('scroll', () => {
      GTMInit(code);
    });
    document.addEventListener('mousemove', () => {
      GTMInit(code);
    });
    document.addEventListener('touchstart', () => {
      GTMInit(code);
    });
  } else {
    GTMInit(code);
  }
};

const GTMInit = (code: string) => {
  if (typeof window === 'undefined') return;
  if (window?.react_gtm_ts?.init) return;
  window.react_gtm_ts.init = true;

  const elScript = document.createElement('script');
  const script = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${code}');`;
  elScript.innerHTML = script;

  const elNoscript = document.createElement('noscript');
  const noscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${code}"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  elNoscript.innerHTML = noscript;

  document.head.insertBefore(elScript, document.head.childNodes[0]);
  document.body.insertBefore(elNoscript, document.body.childNodes[0]);

  if (window.react_gtm_ts.debug) {
    console.log(`🟢 react-gtm-ts - init - ${code}`);
  }
};
