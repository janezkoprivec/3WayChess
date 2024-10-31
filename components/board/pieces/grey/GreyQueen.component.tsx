import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';

interface GreyQueenProps {
  style?: ViewStyle;
}

const GreyQueen: React.FC<GreyQueenProps> = ({ style }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 45 45" style={style}>
      <G
        fill="gray"
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path
          d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
          strokeLinecap="butt"
        />
        <Path
          d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 11,36 11,36 C 9.5,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
          strokeLinecap="butt"
        />
        <Path d="M 11.5,30 C 15,29 30,29 33.5,30" fill="none" />
        <Path d="M 12,33.5 C 18,32.5 27,32.5 33,33.5" fill="none" />
        <Circle cx="6" cy="12" r="2" />
        <Circle cx="14" cy="9" r="2" />
        <Circle cx="22.5" cy="8" r="2" />
        <Circle cx="31" cy="9" r="2" />
        <Circle cx="39" cy="12" r="2" />
      </G>
    </Svg>
  );
};

export default GreyQueen; 