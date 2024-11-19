import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg";

export default function BulletIcon(props: SvgProps) {
  return (
    <Svg width={36} height={36} fill="#ffffff" viewBox="0 0 512 512" {...props}>
      <Path
        d="M495.212 16.785c-44.125-44.141-188.297 5.875-250.078 67.656S61.79 267.8 61.79 267.8l182.406 182.407s121.563-121.579 183.359-183.36c61.766-61.765 111.782-205.937 67.657-250.062zM.009 329.597l182.39 182.407 35.313-35.313L35.306 294.285z"
      />
    </Svg>
  );
}
