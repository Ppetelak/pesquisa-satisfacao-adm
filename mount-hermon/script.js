var botaoEnviar = document.getElementById('enviarPesquisa');

botaoEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    let aguarde = document.getElementById('aguarde');
    aguarde.classList.remove('d-none');
    console.log('Clicou em enviar');
    enviaDados();
});

function enviaDados() {
    let formulario = document.getElementById('formulario');
    let inlineError = document.getElementById('inline-error');
    let errorDiv = document.getElementById('erro');
    let sucess = document.getElementById('obrigado');
    let aguarde = document.getElementById('aguarde');
    var formData = new FormData(formulario);

    // Obter o valor do parâmetro "nome" da URL
    let nomeBeneficio = getParameterByName('nome');

    // Adicionar o parâmetro ao FormData
    if (nomeBeneficio) {
        formData.append('nome', nomeBeneficio);
    }

    if (!formulario.checkValidity()) {
        aguarde.classList.add('d-none');
        inlineError.classList.remove('d-none');
        inlineError.scrollIntoView({ behavior: 'smooth', block: 'end' });
    } else {
        $.ajax({
            url: '', //coloque aqui o link do seu link de api gerado lá no Google
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data, textStatus, xhr) {
                if (xhr.status === 200) {
                    console.log('Requisição bem-sucedida:', data);
                    inlineError.classList.add('d-none');
                    aguarde.classList.add('d-none');
                    sucess.classList.remove('d-none');
                    sucess.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    formulario.reset();
                    setTimeout(function() {
                        window.location.href = 'https://mounthermon.com.br/pesquisa-de-satisfacao-obrigado/';
                    }, 2000);
                } else {
                    console.log('Requisição concluída, mas com status diferente de 200:', data);
                }
            },
            error: function (xhr, status, error) {
                console.error('Erro ao enviar os dados:', status, error);
                errorDiv.classList.remove('d-none');
                inlineError.classList.add('d-none');
                sucess.classList.add('d-none');
                errorDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        });
    }
}

function setupContadorCaracteres(textAreaId, contadorId, maxCaracteres) {
    $('#' + textAreaId).on('input', function () {
        var contador = $(this).val().length; // Obtém o número atual de caracteres

        // Atualiza o span de contagem
        $('#' + contadorId).text(contador + '/' + maxCaracteres);

        // Limita o número de caracteres no textarea
        if (contador > maxCaracteres) {
            $(this).val($(this).val().substring(0, maxCaracteres));
            $('#' + contadorId).text(maxCaracteres + '/' + maxCaracteres);
        }
    });
}

$(document).ready(function () {
    setupContadorCaracteres('q8', 'contador1', 250);
});

function getParameterByName(name) {
    const url = new URL(window.location.href);
    const param = url.searchParams.get(name);
    return param ? decodeURIComponent(param) : null;
}
