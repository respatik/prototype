/*Buatlah method pada number bernama ‘isPrima()’ yang dapat mengembalikan nilai boolean ‘true’ jika number tersebut merupakan bilangan prima

Contoh:
7.isPrima() -> true
6.isPrima() -> false*/

Number.prototype.isPrima = function() {
    if (this.valueOf()==2){
        return true;
    } else {
        for (var i=2; i<this.valueOf(); i++) {
            if (this.valueOf()%i == 0){
                return false
            }
        }
    }
    return true;
}
let n = 7;
console.log(n.isPrima())

