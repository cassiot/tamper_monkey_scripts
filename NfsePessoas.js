/* globals changeEvent */
// ==UserScript==
// @name         NFS-e Pessoas
// @namespace    http://tampermonkey.net/
// @version      2025-11-28
// @description  NFS-e
// @author       You
// @match        https://*.nfse.gov.br/EmissorNacional/DPS/Pessoas*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gov.br
// @grant        none
// @require      https://raw.githubusercontent.com/cassiot/tamper_monkey_scripts/refs/heads/main/main.js
// ==/UserScript==


(function() {
    'use strict';

    const selectRegimeApuracao = document.getElementById('SimplesNacional_RegimeApuracaoTributosSN');
    selectRegimeApuracao.selectedIndex = 1;
    selectRegimeApuracao.dispatchEvent(new Event("change", { bubbles: true }));
    selectRegimeApuracao.dispatchEvent(new Event("chosen:updated", { bubbles: true }));

    //TOMADOR DO SERVIÇO
    const radioTomadorExterior = document.getElementsByName('Tomador.LocalDomicilio');
    radioTomadorExterior[2].click(); // Must be click. .checked = true; doesn't work

    const radioNifSeraInformado = document.getElementsByName('Tomador.NIFInformado');
    radioNifSeraInformado[0].click();

    const inputTomadorNif = document.getElementById('Tomador_NIF');
    inputTomadorNif.value = '27-3834760';

    const inputTomadorNome = document.getElementById('Tomador_Nome');
    inputTomadorNome.value = 'Toptal LLC';

    const inputTomadorLogradouro = document.getElementById('Tomador_EnderecoExterior_Logradouro');
    inputTomadorLogradouro.value = 'N. Church Street';

    const inputTomadorNumero = document.getElementById('Tomador_EnderecoExterior_Numero');
    inputTomadorNumero.value = '2810';

    const inputTomadorBairro = document.getElementById('Tomador_EnderecoExterior_Bairro');
    inputTomadorBairro.value = '-';

    const inputTomadorCidade = document.getElementById('Tomador_EnderecoExterior_Cidade');
    inputTomadorCidade.value = 'Wilmington';

    const inputTomadorCEP = document.getElementById('Tomador_EnderecoExterior_CodigoEnderecamentoPostal');
    inputTomadorCEP.value = '36879';

    const inputTomadorEstado = document.getElementById('Tomador_EnderecoExterior_EstadoProvinciaRegiao');
    inputTomadorEstado.value = 'Delaware';

    const selectTomadorPais = document.getElementById('Tomador_EnderecoExterior_CodigoPais');
    selectTomadorPais.value = 'US';
    selectTomadorPais.dispatchEvent(new Event("change", { bubbles: true }));
    selectTomadorPais.dispatchEvent(new Event("chosen:updated", { bubbles: true }));
})();
