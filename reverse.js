/*Buatlah method pada string yang dapat mengembalikan nilai string itu sendiri dalam keadaan terbalik

Contoh:
thor -> roht
rusak -> kasur*/

String.prototype.reverse = function (n) {
    var terbalik = ""
    for(var i = this.length; i>=0; i--){
        terbalik += this[1]
    }
    return terbalik
}

console.log("INTEN".reverse);