/* globals changeEvent */
// ==UserScript==
// @name         NFS-e Valores
// @namespace    http://tampermonkey.net/
// @version      2026-05-22
// @description  NFS-e
// @author       You
// @match        https://*.nfse.gov.br/EmissorNacional/DPS/Tributacao*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gov.br
// @grant        none
// @require      https://raw.githubusercontent.com/cassiot/tamper_monkey_scripts/refs/heads/main/main.js
// ==/UserScript==

    const selectSituacaoTributaria = document.getElementById('TributacaoFederal_PISCofins_SituacaoTributaria');
    selectSituacaoTributaria.selectedIndex = 1;
    selectSituacaoTributaria.dispatchEvent(changeEvent);
    selectSituacaoTributaria.dispatchEvent(new Event("chosen:updated", { bubbles: true }));

    const optionNaoISSQNHaRetencao = document.getElementById('ISSQN_HaRetencao');
    optionNaoISSQNHaRetencao.click();

    const selectTipoRetencao = document.getElementById('TributacaoFederal_PISCofins_TipoRetencao');
    selectTipoRetencao.selectedIndex = 1;
    selectTipoRetencao.dispatchEvent(changeEvent);
    selectTipoRetencao.dispatchEvent(new Event("chosen:updated", { bubbles: true }));
