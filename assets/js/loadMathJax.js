function loadScript(url, bAsync, idScript ) {
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = bAsync;
  s.src = url;
  if ( idScript !== "" ) s.id = idScript;
  var x = document.getElementsByTagName('head')[0];
  x.appendChild(s);
}

loadScript( "https://polyfill.io/v3/polyfill.min.js?features=es6", false, "" );
loadScript( "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js", false, "MathJax-script" );