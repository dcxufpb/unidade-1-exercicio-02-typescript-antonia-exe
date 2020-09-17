const cupom = require('./cupom');

test('Exercício 1', () => {
  expect(cupom.imprime_dados_loja()).toBe(
    `Arcos Dourados Com. de Alimentos LTDA
Av. Projetada Leste, 500 EUC F32/33/34
Br. Sta Genebra - Campinas - SP
CEP:13080-395 Tel (19) 3756-7408
Loja 1317 (PDP)
CNPJ: 42.591.651/0797-34
IE: 244.898.500.113
`);
});

test('Exercício 2 - tudo vazio', () => {

  cupom.dados.nome_loja = "";
  cupom.dados.logradouro = "";
  cupom.dados.numero = 0;
  cupom.dados.complemento = "";
  cupom.dados.bairro = "";
  cupom.dados.municipio = "";
  cupom.dados.estado = "";
  cupom.dados.cep = "";
  cupom.dados.telefone = "";
  cupom.dados.observacao = "";
  cupom.dados.cnpj = "";
  cupom.dados.inscricao_estadual = "";

  let expected = "\n";
  expected += ", 0 \n"; 
  expected += " -  - \n"; 
  expected += "CEP: Tel \n"; 
  expected += "\n";
  expected += "CNPJ: \n"; 
  expected += "IE: \n"; 
  
  expect(cupom.imprime_dados_loja()).toBe(expected);

});

test('Exercício 2 - customizado', () => {

  // Defina seus próprios valores para as variáveis a seguir
  cupom.dados.nome_loja = "Magic Box";
  cupom.dados.logradouro = "Baker St";
  cupom.dados.numero = 221;
  cupom.dados.complemento = "EDA A24/25/26";
  cupom.dados.bairro = "Marylebone";
  cupom.dados.municipio = "Sunnydale";
  cupom.dados.estado = "CA";
  cupom.dados.cep = "79297";
  cupom.dados.telefone = "(213) 70374-7092";
  cupom.dados.observacao = "Loja TW (BTVS)";
  cupom.dados.cnpj = "98.650.809/0001-63";
  cupom.dados.inscricao_estadual = "55021852-1";

    
let expected = "Magic Box\n";
expected += "Baker St, 221 EDA A24/25/26\n";
expected += "Marylebone - Sunnydale - CA\n";
expected += "CEP:79297 Tel (213) 70374-7092\n";
expected += "Loja TW (BTVS)\n";
expected += "CNPJ: 98.650.809/0001-63\n";
expected += "IE: 55021852-1\n";

expect(cupom.imprime_dados_loja()).toBe(expected);

});
