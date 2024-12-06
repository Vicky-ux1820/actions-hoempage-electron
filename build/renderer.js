// Listen for the `update-css` event and dynamically update the stylesheet
window.electron.onUpdateCSS((cssPath) => {
    const dynamicCSS = document.getElementById('dynamic-css');
    if (dynamicCSS) {
      // Reload the stylesheet by appending a query string to bypass caching
      dynamicCSS.href = `${cssPath}?v=${new Date().getTime()}`;
    }
  });
  