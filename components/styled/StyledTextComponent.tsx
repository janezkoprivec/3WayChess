import { Text, TextStyle } from "react-native";

import { Colors } from "@/constants/Colors";

export default function StyledText({ children, style }: { children: React.ReactNode, style?: TextStyle }) {
  return <Text style={{ color: Colors["dark"].text, ...style }}>{children}</Text>;
}
