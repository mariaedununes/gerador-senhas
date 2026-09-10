const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const LetrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LetrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '@#$%&*?!';
const botoes = document.querySelectorAll('.parametro-senha_botao');
const campSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checknox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclik = aumentaTamanho;