import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface ContainerTypes extends TouchableOpacityProps {
  marginHorizontal: number;
}

export const Container = styled.TouchableOpacity<ContainerTypes>`
  background-color: whitesmoke;
  box-shadow: 1px 2px 3px black;
  flex: 1;
  height: 120px;
  border-radius: 6px;
  overflow: hidden;
  margin: 10px ${(props) => props.marginHorizontal}px;
  elevation: 3;
`;
