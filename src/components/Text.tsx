import {TextProps} from 'react-native';
import styled from 'styled-components/native';

export enum Fonts {
  Inter_400Regular = 'Inter_400Regular',
  Inter_600SemiBold = 'Inter_600SemiBold',
  Inter_700Bold = 'Inter_700Bold',
  Inter_800ExtraBold = 'Inter_800ExtraBold'

}
interface LabelProps extends TextProps {
  font?: Fonts;
  color?: string;
  size?: number;
  opacity?: number;
}
export const Text = styled.Text<LabelProps>`
  font-family: ${({ font }) => font ? `${font}` : Fonts.Inter_400Regular};
  color: ${({ color }) => color || '#fff'};
  font-size: ${({ size }) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }) => opacity || 1};
`;