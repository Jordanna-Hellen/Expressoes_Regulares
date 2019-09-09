const nome = document.querySelector("#nomeId");
const end = document.querySelector("#endId");
const cidade = document.querySelector("#cidadeId");
const uf = document.querySelector("#ufId");
const tel = document.querySelector("#telId");
const cel = document.querySelector("#celId");
const email = document.querySelector("#emailId");
const prof = document.querySelector("#profId");
const motivo = document.querySelector(".motivo");
const rg = document.querySelector("#rgId");
const cnh = document.querySelector("#cnhId");
const cpf = document.querySelector("#cpfId");
const titulo = document.querySelector("#tituloId");
const passA = document.querySelector("#passAId");
const numP = document.querySelector("#numPId");
const erro = document.querySelector("#erro");
const ocuta = document.querySelector(".numP");
const erroEnd = document.querySelector("#erroEnd");
const erroCidade = document.querySelector("#erroCidade");
const erroProf = document.querySelector("#erroProf");
const erroMotivo = document.querySelector("#erroMotivo");
const erroNome = document.querySelector("#erroNome");
const form = document.querySelector("form");

maskJS(uf).mascararPadrao("AA");
maskJS(tel).mascararPadrao("(99) 9999-9999");
maskJS(cel).mascararPadrao("(99) 9-9999-9999");
maskJS(rg).mascararPadrao("9999999999-9");
maskJS(cnh).mascararPadrao("99999999999");
maskJS(cpf).mascararPadrao("999.999.999-99");
maskJS(titulo).mascararPadrao("9999 9999 9999");
maskJS(numP).mascararPadrao("AA999999");

let temErro = false;

const validarMotivo = valor =>{
	const padraoMotivo = ["Trabalho", "Turismo", "Estudo", "SairdoPaís"];
	if (padraoMotivo.indexOf(valor)) {
		erroMotivo.innerText = " ";
	} else {
		erroMotivo.innerText = "Motivo inválido!";
		temErro = true;
	}
}

const paraEnd = valor =>{
	const padraoEnd = /[^a-zA-Z0-9]{1,}[vf]+/gi;
	if (padraoEnd.test(valor)) {
		erroEnd.innerText = "Endereço inválido!";
		temErro = true;
	} else {
		erroEnd.innerText = " ";
	}
}

const paraNome = valor =>{
	const padraoNome = /[^a-zA-Z]+/gi;
	if (padraoNome.test(valor)) {
		erroNome.innerText = "Nome inválido!";
		temErro = true;
	} else {
		erroNome.innerText = " ";
	}
}

const paraCidade = valor =>{
	const padraoCidade = /[^a-zA-Z]{1,}[vf]+/gi;
	if (padraoCidade.test(valor)) {
		erroCidade.innerText = "Cidade inválida!";
		temErro = true;
	} else {
		erroCidade.innerText = " ";
	}
}

const paraProf = valor =>{
	const padraoProf = /[^a-zA-Z]+/gi;
	if (padraoProf.test(valor)) {
		erroProf.innerText = "Profissão inválida!";	
		temErro = true;	
	} else {
		erroProf.innerText = " ";
	}
}

const validarEmail = valor =>{
	let padrao = /[\w]{1,}[@]{1}[\w]{1,}[.]{1}[\w]{1,}/gi;
	if (padrao.test(valor)) {
		erro.innerText = " ";
	}else{
		erro.innerText = "E-mail inválido!";
		temErro = true;
	}
}

const validarPassaporte = valor =>{
	if(valor == "Sim"){
		ocuta.style.display = "block";
	}else{
		ocuta.style.display = "none";
	}
}

const validarTudo = function() {
	temErro = false;
	validarEmail(email.value);
	validarMotivo(motivo.value);
	paraProf(cidade.value);
	paraCidade();
	paraNome(nme.value);
	paraEnd(end.value);
}

form.onsubmit = function(e){
	validarTudo();
	if (temErro) {
		e.preventDefault();
	}
}

//1d0602f5d0a645419456573c9813acca