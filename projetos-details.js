   const details = document.getElementById('ver-mais')
    const textoExtra = document.getElementById('texto-extra')

    details.addEventListener('toggle', () =>{
        if (details.open) {
            textoExtra.style.display = 'inline'
            details.style.display = 'none'
        }
       
    })