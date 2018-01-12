const loadDeferredStyles = function () {
  const addStylesNode = document.getElementById('deferredStyles')
  const replacement = document.createElement('div')

  replacement.innerHTML = addStylesNode.textContent
  document.body.appendChild(replacement)
  addStylesNode.parentElement.removeChild(addStylesNode)
}

if (window.requestAnimationFrame) {
  window.requestAnimationFrame(() => {
    window.setTimeout(loadDeferredStyles, 0)
  })
} else {
  window.addEventListener('load', loadDeferredStyles)
}
