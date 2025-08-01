let matrice = [
    [],
    [],
    []
]

let nombres = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(matrice);
console.log(nombres);

let k = 0
for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < 3; j++) {
        matrice[i][j] = nombres[k]
        k++
    }
}

console.log(matrice);