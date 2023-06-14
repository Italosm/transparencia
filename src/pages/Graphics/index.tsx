import Graphic from '../../components/Graphic';
import Header from '../../components/Header';


export default function Graphics() {
  return(
      <>
          <Header
            title='ICMS'
            description='Os 10 Maiores repasses de ICMS do Estado de Sergipe aos seus municípios' 
            goBack={true}
          />
          <Graphic />    
      </>
  )
}