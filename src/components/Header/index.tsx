
import { Text } from '../Text';
import { Container, ContainerText } from './styles';
import {Feather} from '@expo/vector-icons'
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../Text';

interface HeaderProps {
  goBack: boolean; 
}


export default function Header(props: HeaderProps) {
  const { goBack } = props
  const  navigation = useNavigation();
  const voltarPagina = () => {
    navigation.goBack();
  };
  let back;
  if (goBack) {
    back = <TouchableOpacity
              onPress={voltarPagina} 
              activeOpacity={0.7}
            >
              <Feather 
                name='home'
                color='white'
                size={20}
              />
            </TouchableOpacity>
  } else {
    back = ''
  }
  return (
    <>
    <Container>
      {/* <ContainerImage>
        <Image 
          source={require('../../../assets/Logo.png')}
        />
      </ContainerImage> */}
        <Text size={24} font={Fonts.Inter_800ExtraBold}>
          De Olho no Repasse
        </Text>
        {back}     
    </Container>
    <ContainerText>
        <Text size={18} font={Fonts.Inter_700Bold}>
          Tranferências Aos Municípios
        </Text>
      </ContainerText>
      <ContainerText>
        <Text size={12} font={Fonts.Inter_400Regular}>
          Esta seção contém a parcela das receitas arrecadadas pelo Estado de Sergipe que é repassada aos Municípios. Dentre os principais repasses legais e constitucionais fornecidos aos municípios estão: Imposto sobre Circulação de Mercadorias e Serviços – ICMS, Imposto sobre a Propriedade de Veículos Automotores – IPVA, Imposto sobre Produtos Industrializados – IPI, Royalties e Fundo de Desenvolvimento do Ensino Fundamental – FUNDEB.
        </Text>
    </ContainerText>
    </>
  );
}