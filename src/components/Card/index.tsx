import { TouchableOpacity } from 'react-native';
import { Fonts, Text } from '../Text';
import { CardContainer, Container } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export type RootStackParamList = {
    Graphics: { id: string } | undefined;
  };

export default function Card() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <>
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Graphics')}>
                <CardContainer>
                    <Text size={20} font={Fonts.Inter_700Bold} color='#fff'>
                        ICMS
                    </Text>
                </CardContainer>
            </TouchableOpacity>
            <TouchableOpacity>
                <CardContainer>
                    <Text size={20} font={Fonts.Inter_700Bold} color='#fff'>
                        IPI
                    </Text>
                </CardContainer>
            </TouchableOpacity>
            <TouchableOpacity>
                <CardContainer>
                    <Text size={20} font={Fonts.Inter_700Bold} color='#fff'>
                        IPVA
                    </Text>
                </CardContainer>
            </TouchableOpacity>
            <TouchableOpacity>
                <CardContainer>
                    <Text size={20} font={Fonts.Inter_700Bold} color='#fff'>
                        Royalties
                    </Text>
                </CardContainer>
            </TouchableOpacity>
        </Container>
        
    </>
  );
}