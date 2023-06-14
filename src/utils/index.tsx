interface Arrecadacao {
  municipio: string;
  noMes: number;
  ateMes: number;
  total: number;
}

export const calcularSomaTotal = (arrecadacoes: Arrecadacao[]): number => {
  let somaTotal = 0;
  arrecadacoes.forEach(arrecadacao => {
    somaTotal += arrecadacao.total;
  });
  return somaTotal;
};