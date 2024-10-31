import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface BlackRookProps {
  style?: ViewStyle;
}

const BlackRook: React.FC<BlackRookProps> = ({ style }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 45 45" style={style}>
      <G
        opacity={1}
        fillOpacity={1}
        fillRule="evenodd"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={4}
        strokeDasharray="none"
        strokeOpacity={1}
      >
        <Path
          d="M9 39h27v-3H9Zm3.5-7 1.5-2.5h17l1.5 2.5zm-.5 4v-4h21v4z"
          strokeLinecap="butt"
        />
        <Path
          d="M14 29.5v-13h17v13z"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <Path
          d="M14 16.5 11 14h23l-3 2.5zM11 14V9h4v2h5V9h5v2h5V9h4v5z"
          strokeLinecap="butt"
        />
        <Path
          d="M12 35.5h21v0m-20-4h19m-18-2h17m-17-13h17M11 14h23"
          fill="none"
          stroke="#fff"
          strokeWidth={1}
          strokeLinejoin="miter"
        />
      </G>
    </Svg>
  );
};

export default BlackRook; 