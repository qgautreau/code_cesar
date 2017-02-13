var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var decalage = 2;
var messageCrypte = document.getElementById('messagecrypte');

function crypter(element) {
    var messageClair = document.getElementById('messageclair').value;
    for (var i = 0; i < messageClair.length; i++) {
        var indexLettreDansAlphabet = alphabet.indexOf(messageClair[i]);
        var indexLettreDecaleDansAlphabet = indexLettreDansAlphabet + decalage;
        var lettreDecalee = alphabet[indexLettreDecaleDansAlphabet];
        messageCrypte.value += lettreDecalee;
    }

}
