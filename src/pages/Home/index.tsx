import Card from '../../components/Card';
import Header from '../../components/Header';

export default function Home() {
  return(
      <>
          <Header
            title='Repasse aos Municípios' 
            description='Esta seção contém a parcela das receitas arrecadadas pelo Estado de Sergipe que é repassada aos Municípios. Dentre os principais repasses legais e constitucionais fornecidos aos municípios estão: Imposto sobre Circulação de Mercadorias e Serviços – ICMS, Imposto sobre a Propriedade de Veículos Automotores – IPVA, Imposto sobre Produtos Industrializados – IPI, Royalties e Fundo de Desenvolvimento do Ensino Fundamental – FUNDEB.'
            goBack={false}
          
          />
          <Card />
      </>
  )
}