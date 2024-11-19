import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function RapidIcon(props: SvgProps) {
  return (
    <Svg width={36} height={36} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        fill="#ffffff"
        fillRule="evenodd"
        d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75ZM9.25 2a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 2Z"
        clipRule="evenodd"
      />
    </Svg>
  );
}
