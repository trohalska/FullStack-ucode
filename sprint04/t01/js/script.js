'use strict';

function correctErrors(chr, attr) {
  let classAttr, dataAttr;

  classAttr = chr.getAttribute('class');
  if (!attr || attr.length === 0
    || (classAttr !== 'good'
    && classAttr !== 'evil'
    && classAttr !== 'unknown')) {
    chr.setAttribute('class', 'unknown');
  }

  dataAttr = chr.getAttribute('data-element');
  if (!dataAttr || dataAttr.length === 0) {
    chr.setAttribute('data-element', 'none');
  }
}

function createDivs(chr, dataAttr) {
  let node, arrPowers;

  arrPowers = dataAttr.split(' ');

  for (let i = 0; i < arrPowers.length; ++i) {
    node = document.createElement('div');
    node.className = `elem ${arrPowers[i]}`;
    if (arrPowers[i] === 'none') {
      let line = document.createElement('div');
      line.className = `line`;
      node.appendChild(line);
    }
    chr.appendChild(node);
  }
}

function addPowers() {
  let chr, attr;

  for (let i = 0; (chr = document.getElementsByTagName('li')[i]); ++i) {
    attr = chr.attributes;
    correctErrors(chr, attr);
    chr.appendChild(document.createElement('br'));
    createDivs(chr, chr.getAttribute('data-element'));
  }
}

addPowers();
