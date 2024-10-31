import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface BlackKingProps {
  style?: ViewStyle;
}

const BlackKing: React.FC<BlackKingProps> = ({ style }) => {
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
        <Path
          d="M 22.5,11.63 V 6"
          fill="none"
          stroke="#000000"
          strokeLinejoin="miter"
          id="path80"
        />
        <Path
          d="m 22.5,25 c 0,0 4.5,-7.5 3,-10.5 0,0 -1,-2.5 -3,-2.5 -2,0 -3,2.5 -3,2.5 -1.5,3 3,10.5 3,10.5"
          fill="#000000"
          fillOpacity={1}
          strokeLinecap="butt"
          strokeLinejoin="miter"
          id="path82"
        />
        <Path
          d="m 11.5,37 c 5.5,3.5 15.5,3.5 21,0 v -7 c 0,0 9,-4.5 6,-10.5 -4,-6.5 -13.5,-3.5 -16,4 V 27 23.5 C 19,16 9.5,13 6.5,19.5 c -3,6 5,10 5,10 z"
          fill="#000000"
          stroke="#000000"
          id="path84"
        />
        <Path
          d="m 20,8 h 5"
          fill="none"
          stroke="#000000"
          strokeLinejoin="miter"
          id="path86"
        />
        <Path
          d="m 32,29.5 c 0,0 8.5,-4 6.03,-9.65 C 34.15,14 25,18 22.5,24.5 l 0.01,2.1 -0.01,-2.1 C 20,18 9.906,14 6.997,19.85 c -2.497,5.65 4.853,9 4.853,9"
          fill="none"
          stroke="#ffffff"
          id="path88"
        />
        <Path
          d="m 11.5,30 c 5.5,-3 15.5,-3 21,0 m -21,3.5 c 5.5,-3 15.5,-3 21,0 m -21,3.5 c 5.5,-3 15.5,-3 21,0"
          fill="none"
          stroke="#ffffff"
          id="path90"
        />
      </G>
    </Svg>
  );
};

export default BlackKing; 