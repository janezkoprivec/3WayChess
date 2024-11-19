import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

export default function BlitzIcon(props: SvgProps) {
  return (
    <Svg width={36} height={36} fill="#ffffff" viewBox="0 0 24 24" {...props}>
      <Path d="M18 11.74a1 1 0 0 0-.52-.63l-3.39-1.68.91-6.29a1 1 0 0 0-1.78-.75l-7 9a1 1 0 0 0-.17.87 1 1 0 0 0 .59.67l4.27 1.71-.91 6.22a1 1 0 0 0 .63 1.07.92.92 0 0 0 .37.07 1 1 0 0 0 .83-.45l6-9a1 1 0 0 0 .17-.81Z" />
    </Svg>
  );
}
