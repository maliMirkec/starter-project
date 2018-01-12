let FontFaceObserver;

// =include fontfaceobserver/fontfaceobserver.js

(function () {
  // Optimization for Repeat Views
  if (window.sessionStorage.criticalFoftDataUriFontsLoaded) {
    document.documentElement.className += ' fonts-stage-1 fonts-stage-2'
    return
  }

  const fontASubset = new FontFaceObserver('LatoSubset')

  Promise.all([fontASubset.load()]).then(() => {
    document.documentElement.className += ' fonts-stage-1'
    const fontA = new FontFaceObserver('Lato')
    const fontB = new FontFaceObserver('LatoBold')
    const fontC = new FontFaceObserver('LatoItalic')
    const fontD = new FontFaceObserver('LatoBoldItalic')
    Promise.all([fontA.load(), fontB.load(), fontC.load(), fontD.load()]).then(() => {
      document.documentElement.className += ' fonts-stage-2'
      // Optimization for Repeat Views
      window.sessionStorage.criticalFoftDataUriFontsLoaded = true
    })
  })
})()
