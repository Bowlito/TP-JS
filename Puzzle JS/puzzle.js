const container = document.getElementById('container')
let full;
let empty;
let stand;
//console.log(container);
container.addEventListener('mouseover', () => {
    const pieces = container.children
    console.log(typeof pieces);
    for (let i = 0; i < pieces.length; i++) {
        const piece = pieces[i];
        const sendData = (e) => {
            e.dataTransfer.setData('text/plain', piece.textContent)
        }
        const receiveData = (e) => {
            const data = e.dataTransfer.getData('text/plain')
            if (!piece.textContent.includes(data)) {
                piece.textContent = `${data} ${piece.textContent}`
            }
        }

        const makeDropper = (e) => {
            e.preventDefault()
        }

        piece.removeEventListener('dragover', makeDropper)
        piece.addEventListener('dragover', makeDropper)

        if (piece.innerHTML != '') {
            
            piece.setAttribute('draggable', true);

            piece.addEventListener('dragstart', sendData)
            
            piece.addEventListener('dragend', () => {
                piece.style['background-color'] = 'white'
                piece.innerHTML = "";
            })
           
        

        }

        if (piece.innerHTML == '') {
            
            
            piece.addEventListener('drop', () => {
                piece.style['background-color'] = 'red'
                piece.style['color'] = 'white'
            })
            
            piece.addEventListener('drop', receiveData)

            
        }
    }


})











// pieces.forEach(piece => {
//     if (piece.innerText != "") {
//         piece.setAttribute("dragable", true)
//         console.log(piece);
//     }
// })


// let matrice = [
//     [],
//     [],
//     []
// ]

