var db = window.openDatabase("OrganicFood Banco", "2.0", "Mybase", 4048);

db.transaction(function(criar){
    criar.executeSql("CREATE TABLE users (ID PRIMARY KEY, nome TEXT, email TEXT, senha TEXT)");
    criar.executeSql("CREATE TABLE hortas (ID PRIMARY KEY, nome TEXT, endereco TEXT, horarios TEXT, contato, TEXT");
    criar.executeSql("CREATE TABLE agricultor (ID PRIMARY KEY, cnpj INTEGER, nomeProp TEXT, logradouro TEXT, cep INTEGER, numCasa INTEGER, fone INTEGER, email TEXT");
});

function salvarUsuario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    db.transaction(function(armazenar){
        armazenar.executeSql("INSERT INTO users (nome, email, senha) VALUES (?,?,?)", [nome, email, senha]);
    });
}

function salvarHorta() {
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var horarios = document.getElementById('horarios').value;
    var contato = document.getElementById('contato').value;

    db.transaction(function(armazenar){
        armazenar.executeSql("INSERT INTO hortas (nome, endereco, horarios, contato) VALUES (?,?,?,?)", [nome, endereco, horarios, contato])
    });
}

function cadastrarse() {
    var cnpj = document.getElementById('cnpj').value;
    var senha = document.getElementById('senha').value;
    var nomeProp = document.getElementById('nomeProp').value;
    var logradouro = document.getElementById('logradouro').value;
    var cep = document.getElementById('cep').value;
    var numCasa = document.getElementById('numCasa').value;
    var fone = document.getElementById('fone').value;
    var email = document.getElementById('email').value;

    db.transaction(function(armazenar) {
        armazenar.executeSql("INSERT INTO agricultor (ID PRIMARY KEY, cnpj INTEGER, senha, TEXT, nomeProp TEXT, logradouro TEXT, cep INTEGER, numCasa INTEGER, fone INTEGER, email TEXT VALUES (?,?,?,?,?,?,?,?)", [cnpj, senha, nomeProp, logradouro, cep, numCasa, fone, email])
    })

}

function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    db.find()
}

function buscarHorta() {
    db.find()

}