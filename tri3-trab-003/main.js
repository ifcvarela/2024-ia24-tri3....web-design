//
// Lógica para criar as galerias de imagens
//

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


// 
// Lógica para abrir e fechar o modal com a imagem
// 

const galleryImageModal = document.querySelector('.gallery-image-modal')
const galleryBtClose = galleryImageModal.querySelector('.bt-close')
const galleryContent = galleryImageModal.querySelector('.content')
const imgs = document.querySelectorAll('.gallery img')

galleryImageModal.addEventListener('click', () => {
  galleryImageModal.close()
})

imgs.forEach((img) => {
  img.addEventListener('click', () => {
    galleryContent.innerHTML = `<img src="${img.src}" alt="${img.alt}">`
    galleryImageModal.showModal()
  })
})