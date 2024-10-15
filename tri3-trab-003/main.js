document.querySelectorAll("[data-folder]").forEach(el => {
  const total = el.dataset.total
  const folder = el.dataset.folder
  let html = ''
  for (let i = 1; i <= total; i++) {
    html += `
      <div>
        <img src="imgs/${folder}/${folder} (${i}).jpg">
      </div>    
    `
  }
  el.innerHTML = html
})