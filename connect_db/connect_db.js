var db = window.openDatabase("OrganicFood Banco", "2.0", "Mybase", 4048);
db.transaction(function(criar){
    criar.executeSql("CREATE TABLE IF NOT EXISTS hortas(nome, senha, email, endereco)");
});

function salvarHorta() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email').value;
    var endereco = document.getElementById('logradouro').value;
    var values = [nome,senha,email,endereco];
    db.transaction(function(armazenar){
        armazenar.executeSql("INSERT INTO hortas(nome, senha, email, endereco) VALUES (?,?,?,?)", values );
    });
}