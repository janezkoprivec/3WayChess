import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface GreyRookProps {
  style?: ViewStyle;
}

const GreyRook: React.FC<GreyRookProps> = ({ style }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 45 45" style={style}>
      <G
        fill="gray"
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
          d="M9 39h27v-3H9Z"
          fill="gray"
        />
        <Path
          d="M12 36v-4h21v4z"
          fill="gray"
        />
        <Path
          d="M11 14V9h4v2h5V9h5v2h5V9h4v5"
          fill="gray"
          strokeLinecap="butt"
        />
        <Path
          d="m34 14-3 3H14l-3-3"
          fill="gray"
        />
        <Path
          d="M31 17v12.5H14V17"
          fill="gray"
          strokeLinecap="butt"
          strokeLinejoin="miter"
        />
        <Path
          d="m31 29.5 1.5 2.5h-20l1.5-2.5"
          fill="gray"
        />
        <Path
          d="M11 14h23"
          fill="gray"
          stroke="#000"
          strokeLinejoin="miter"
        />
      </G>
    </Svg>
  );
};

export default GreyRook; 