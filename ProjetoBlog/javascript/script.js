document.getElementById('contatoForm').addEventListener('submit', function () {
    var opiniao = this.querySelector('input[name=opiniao]'), opiniao = opiniao.value;
    var texto = 'Olá Layane!, minha sugestão é ' + opiniao;
    this.querySelector('input[name=Body]').setAttribute('value', texto);
});