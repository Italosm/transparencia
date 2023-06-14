
import { Text } from '../Text';
import { Container, ContainerText } from './styles';
import {Feather} from '@expo/vector-icons'
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Fonts } from '../Text';

interface HeaderProps {
  goBack: boolean;
  title: string;
  description: string; 
}


export default function Header(props: HeaderProps) {
  const { goBack, title, description } = props
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
          {title}
        </Text>
      </ContainerText>
      <ContainerText>
        <Text size={12} font={Fonts.Inter_400Regular}>
          {description}
        </Text>
    </ContainerText>
    </>
  );
}