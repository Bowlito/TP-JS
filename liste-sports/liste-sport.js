const bouttons = document.querySelectorAll('button')
const dispos = document.querySelector('#dispos')
let dispSports = document.querySelectorAll('#dispos>option')
const pref = document.querySelector('#pref')
let prefSports;



bouttons.forEach(boutton => {
    boutton.addEventListener('click', () => {
        switch (boutton.innerText) {
            case '>':
                if (dispos.selectedOptions.length > 1) {
                    alert('Trop de sélection');

                } else {
                    dispSports.forEach(sport => {

                        if (sport.selected) {


                            const op = document.createElement('option')
                            op.innerHTML = sport.innerHTML
                            op.value = sport.value
                            pref.appendChild(op)
                            sport.remove()
                            sport.selected = false;
                            prefSports = document.querySelectorAll('#pref>option')
                        }
                    }
                    )
                };

                break;
            case '>>':
                dispSports.forEach(sport => {

                    const op = document.createElement('option')
                    pref.appendChild(op)
                    op.innerHTML = sport.innerHTML
                    op.value = sport.value
                    sport.remove()
                    prefSports = document.querySelectorAll('#pref>option')


                }
                )
                console.log('Tous à droite');

                break;
            case '>>*':
                console.log('Sélectionnés à droite');
                favSelectedSports();


                break;
            case '<':

                console.log("1 à gauche");
                if (pref.selectedOptions.length > 1) {
                    alert('Trop de sélection');

                } else {
                    prefSports.forEach(sport => {

                        if (sport.selected) {


                            const op = document.createElement('option')
                            op.innerHTML = sport.innerHTML
                            op.value = sport.value
                            dispos.appendChild(op)
                            sport.remove()
                            sport.selected = false;
                            dispSports = document.querySelectorAll('#dispos>option')
                        }
                    }
                    )
                };



                break;
            case '<<':
                console.log('Tous à gauche');
                prefSports.forEach(sport => {

                    const op = document.createElement('option')
                    dispos.appendChild(op)
                    op.innerHTML = sport.innerHTML
                    op.value = sport.value
                    sport.remove()
                    dispSports = document.querySelectorAll('#pref>option')


                }
                )

                break;
            case '<<*':
                console.log('Sélectionnés à gauche');

                unfavSelectedSports()

                break;

            default:
                break;
        }
    })

});


function favSelectedSports() {
    dispSports.forEach(sport => {

        if (sport.selected) {


            const op = document.createElement('option')
            pref.appendChild(op)
            op.innerHTML = sport.innerHTML
            op.value = sport.value
            sport.remove()
            sport.selected = false;
            prefSports = document.querySelectorAll('#pref>option')

        }
    })
};

function unfavSelectedSports() {
    prefSports.forEach(sport => {

        if (sport.selected) {


            const op = document.createElement('option')
            dispos.appendChild(op)
            op.innerHTML = sport.innerHTML
            op.value = sport.value
            sport.remove()
            sport.selected = false;
            dispSports = document.querySelectorAll('#dispos>option')

        }
    })
};


