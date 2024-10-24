import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 184.751 184.751"
    {...props}
  >
    <Path d="m0 92.375 46.188-80h92.378l46.185 80-46.185 80H46.188L0 92.375z" />
  </Svg>
)
export default SvgComponent;
