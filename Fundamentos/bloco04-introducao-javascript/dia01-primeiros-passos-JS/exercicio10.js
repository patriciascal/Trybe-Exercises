const custoProduto = 2;
const venda = -5;

if (custoProduto >= 0 && venda >= 0) {
  const custoTotal = custoProduto * 1.2;
  const lucro = (venda - custoTotal) * 1000;
  console.log(lucro);
} else {
  console.log("Error. Valor negativo");
};