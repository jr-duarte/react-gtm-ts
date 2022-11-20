// src/features/init/index.ts
var init = ({ code, debug = false }) => {
  if (typeof window === "undefined")
    return;
  const elScript = document.createElement("script");
  const script = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${code}');`;
  elScript.innerHTML = script;
  const elNoscript = document.createElement("noscript");
  const noscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${code}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  elNoscript.innerHTML = noscript;
  document.head.insertBefore(elScript, document.head.childNodes[0]);
  document.body.insertBefore(elNoscript, document.body.childNodes[0]);
  if (debug) {
    console.log(`\u{1F7E2} react-gtm-ts - init - ${code}`);
    window.react_gtm_ts = {
      debug: true
    };
  }
};

// src/features/action/index.ts
var action = ({ event, ...more }) => {
  var _a, _b;
  if (typeof ((_a = window == null ? void 0 : window.dataLayer) == null ? void 0 : _a.push) !== "undefined") {
    window.dataLayer.push({
      event,
      ...more
    });
    if ((_b = window == null ? void 0 : window.react_gtm_ts) == null ? void 0 : _b.debug) {
      console.log("\u{1F7E2} react-gtm-ts - action - ", {
        event,
        ...more
      });
    }
  } else {
    console.error(
      "\u{1F6D1} react-gtm-ts - Add ReactTagManager.init passing GTM code in app or _app (nextjs), see more in the documentation https://github.com/jr-duarte/react-gtm-ts"
    );
  }
};

// src/features/index.ts
var ReactTagManager = {
  init,
  action
};
export {
  ReactTagManager
};
