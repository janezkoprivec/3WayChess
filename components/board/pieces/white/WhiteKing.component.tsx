import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface WhiteKingProps {
  style?: ViewStyle;
}

const WhiteKing: React.FC<WhiteKingProps> = ({ style }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 45 45" style={style}>
      <G
        fill="none"
        fillOpacity={1}
        fillRule="evenodd"
        stroke="#000000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      >
        <Path d="M 22.5,11.63 V 6" fill="none" stroke="#000000" strokeLinejoin="miter" />
        <Path d="m 20,8 h 5" fill="none" stroke="#000000" strokeLinejoin="miter" />
        <Path
          d="m 22.5,25 c 0,0 4.5,-7.5 3,-10.5 0,0 -1,-2.5 -3,-2.5 -2,0 -3,2.5 -3,2.5 -1.5,3 3,10.5 3,10.5"
          fill="#ffffff"
          stroke="#000000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <Path
          d="m 11.5,37 c 5.5,3.5 15.5,3.5 21,0 v -7 c 0,0 9,-4.5 6,-10.5 -4,-6.5 -13.5,-3.5 -16,4 V 27 23.5 C 19,16 9.5,13 6.5,19.5 c -3,6 5,10 5,10 z"
          fill="#ffffff"
          stroke="#000000"
        />
        <Path d="M 11.5,30 C 17,27 27,27 32.5,30" fill="none" stroke="#000000" />
        <Path d="m 11.5,33.5 c 5.5,-3 15.5,-3 21,0" fill="none" stroke="#000000" />
        <Path d="M 11.5,37 C 17,34 27,34 32.5,37" fill="none" stroke="#000000" />
      </G>
    </Svg>
  );
};

export default WhiteKing;
