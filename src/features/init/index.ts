type GTMInitProps = { GTMCode: string };

export const GTMInit = ({ GTMCode }: GTMInitProps) => {
  const elScript = document.createElement('script');
  const script = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTMCode}');`;
  elScript.innerHTML = script;

  const elNoscript = document.createElement('noscript');
  const noscript = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTMCode}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
  elNoscript.innerHTML = noscript;

  document.head.insertBefore(elScript, document.head.childNodes[0]);
  document.body.insertBefore(elNoscript, document.body.childNodes[0]);
};
