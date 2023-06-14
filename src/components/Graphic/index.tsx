import { Container } from "./styles";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory-native';
import { repasse } from '../../mock/Repasse2018';
import { calcularSomaTotal } from '../../utils';



export default function Graphic() {
  const repasseModificado = repasse.map(({ municipio, total }) => ({ municipio, total }));
  repasseModificado.sort((a, b) => b.total - a.total);
  const dezMaioresArrecadacoes = repasseModificado.slice(0, 10);
  return(
      <Container>
        <VictoryChart height={400}>
          <VictoryAxis
            style={{ tickLabels: { fontSize: 8 } }}
            dependentAxis
            tickFormat={(tick) => tick.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          />
          <VictoryAxis 
             style={{ tickLabels: { fontSize: 8 } }}
             tickLabelComponent={
              <VictoryLabel angle={-45} textAnchor="end" verticalAnchor="middle" />
            }
             
          />
          
          <VictoryBar
            
            style={{
              data: { fill: "#00A8FF" }
            }}
            data={dezMaioresArrecadacoes}
            x="municipio"
            y="total"
          />
        </VictoryChart>
      </Container>
)}