var n = 0, n2=0;
var resultado2 = 0;
var resultado3 = 0;
n=parseInt(prompt("Ingrese el numero 1 a calcular"));
n2=parseInt(prompt("Ingrese el numero 2 a calcular"));

for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
        resultado2 = resultado2+i;
    }
}

for (let i = 1; i <= n2 / 2; i++) {
    if (n2 % i === 0) {
        resultado3 = resultado3+i;
    }
}
if (resultado2 === n2 && resultado3 === n) {
    alert("Los números " + n + " y " + n2 + " son amigos");
} else {
    alert("Los números " + n + " y " + n2 + " no son amigos");
}

alert("La suma de los divisores del numero " + n + " es: " + resultado2);

alert("La suma de los divisores del numero " + n2 + " es: " + resultado3);
