import React from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

interface WhiteRookProps {
  style?: ViewStyle;
}

const WhiteRook: React.FC<WhiteRookProps> = ({ style }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 45 45" style={style}>
          <G
      style={{
        opacity: 1,
        fill: "#fff",
        fillOpacity: 1,
        fillRule: "evenodd",
        stroke: "#000",
        strokeWidth: 1.5,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",  
        strokeOpacity: 1,
      }}
    >
      <Path
        d="M9 39h27v-3H9Zm3-3v-4h21v4zm-1-22V9h4v2h5V9h5v2h5V9h4v5"
        strokeLinecap="butt"
      />
      <Path d="m34 14-3 3H14l-3-3" />
      <Path
        d="M31 17v12.5H14V17"
          strokeLinecap="butt"  
          strokeLinejoin="miter"
        />
      <Path d="m31 29.5 1.5 2.5h-20l1.5-2.5" />
      <Path
        d="M11 14h23"
        fill="none"
        stroke="#000"
        strokeLinejoin="miter"
      />
    </G>
    </Svg>
  );
};

export default WhiteRook; 