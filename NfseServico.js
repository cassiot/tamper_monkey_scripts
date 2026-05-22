/* globals changeEvent, keyDownEventEnter, keyUpEvent, mouseDownEvent, sleep */
// ==UserScript==
// @name         NFS-e Serviço
// @namespace    http://tampermonkey.net/
// @version      2025-11-28
// @description  NFS-e
// @author       You
// @match        https://*.nfse.gov.br/EmissorNacional/DPS/Servico*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gov.br
// @grant        none
// @require      https://raw.githubusercontent.com/cassiot/tamper_monkey_scripts/refs/heads/main/main.js
// ==/UserScript==

(function() {
    //'use strict';
    fillForm();
})();

async function fillForm(){
    var selections = document.getElementsByClassName('select2-selection select2-selection--single');
    const selectMunicipio = selections[0]
    selectMunicipio.dispatchEvent(mouseDownEvent);
    const inputMunicipio = document.getElementsByClassName('select2-search__field')[0];
    inputMunicipio.value = 'Belo Horizonte/MG';
    inputMunicipio.dispatchEvent(keyUpEvent);
    await sleep(1000);
    // var bhOption = document.getElementsByClassName('select2-results__option select2-results__option--selectable select2-results__option--highlighted')[0];
    inputMunicipio.dispatchEvent(keyDownEventEnter);

    await sleep(500);

    const selectCodigoTributacao = selections[1];
    selectCodigoTributacao.dispatchEvent(mouseDownEvent);
    await sleep(500);
    const inputCodigoTributacao = document.getElementsByClassName('select2-search__field')[0];
    inputCodigoTributacao.value = '010701';
    inputCodigoTributacao.dispatchEvent(keyUpEvent);
    await sleep(1000);
    inputCodigoTributacao.dispatchEvent(keyDownEventEnter);

    const selectCodigoComplementar = document.getElementById('ServicoPrestado_CodigoComplementarMunicipal');
    // selectCodigoComplementar.dispatchEvent(mouseDownEvent);
    // selectCodigoComplementar.dispatchEvent(keyDownEventEnter);
    selectCodigoComplementar.selectedIndex = 0;
    selectCodigoComplementar.dispatchEvent(changeEvent);

    await sleep(500);

    const optionNaoServicoPrestadoISSQN = document.getElementById('ServicoPrestado_HaExportacaoImunidadeNaoIncidencia');
    optionNaoServicoPrestadoISSQN.click();

    await sleep(500);

    const inputServicoPrestadoDescricao = document.getElementById('ServicoPrestado_Descricao');
    inputServicoPrestadoDescricao.value = 'Prestação de serviços de manutenção em sistemas de informática';

    const selectNBS = document.getElementById('ServicoPrestado_CodigoNBS');
    selectNBS.value = 115013000;
    selectNBS.dispatchEvent(changeEvent);

    await sleep(500);

    const selectModoPrestacao = document.getElementById('ComercioExterior_ModoPrestacao');
    selectModoPrestacao.selectedIndex = 1; //Transfonteiriço
    selectModoPrestacao.dispatchEvent(changeEvent);

    const selectVinculoPrestacao = document.getElementById('ComercioExterior_VinculoPrestacao');
    selectVinculoPrestacao.value = 0; //Sem vínculo com o tomador/ Prestador
    selectVinculoPrestacao.dispatchEvent(changeEvent);

    const inputMoeda = document.getElementsByName('ComercioExterior.TipoMoeda')[0];
    inputMoeda.value = 220;

    const selectApoioPrestador = document.getElementById('ComercioExterior_MecanismoApoioPrestador');
    selectApoioPrestador.value = 1; //Nenhum
    selectApoioPrestador.dispatchEvent(changeEvent);

    const selectVinculoTomador = document.getElementById('ComercioExterior_MecanismoApoioTomador');
    selectVinculoTomador.value = 1; //Nenhum
    selectVinculoTomador.dispatchEvent(changeEvent);

    const selectMovimentacaoBens = document.getElementById('ComercioExterior_MovimentacaoTempBens');
    selectMovimentacaoBens.value = 1; //Não
    selectMovimentacaoBens.dispatchEvent(changeEvent);

    const optionCompartilharMDIC = document.getElementsByName('ComercioExterior.CompartilharComMDIC')[1];
    optionCompartilharMDIC.click();
}
