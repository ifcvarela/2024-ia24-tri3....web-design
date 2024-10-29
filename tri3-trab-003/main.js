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


const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')

galleryImageModal.showModal()
galleryImageModal.addEventListener('click', () => {
  galleryImageModal.close()
})