import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import BulletIcon from "../svg-icons/bullet";
import StyledText from "./StyledTextComponent";
import BlitzIcon from "../svg-icons/blitz";
import RapidIcon from "../svg-icons/rapid";

export interface TimeControl {
  name: string;
  time: number; // Time in minutes
  increment: number; // Increment in seconds
  category: "bullet" | "blitz" | "rapid" | "classical";
}

const bulletTimeControls: TimeControl[] = [
  { name: "1+0", time: 1, increment: 0, category: "bullet" },
  { name: "1+1", time: 1, increment: 1, category: "bullet" },
  { name: "2+1", time: 2, increment: 1, category: "bullet" },
];

const blitzTimeControls: TimeControl[] = [
  { name: "3+0", time: 3, increment: 0, category: "blitz" },
  { name: "3+2", time: 3, increment: 2, category: "blitz" },
  { name: "5+0", time: 5, increment: 0, category: "blitz" },
];

const rapidTimeControls: TimeControl[] = [
  { name: "10+0", time: 10, increment: 0, category: "rapid" },
  { name: "15+10", time: 15, increment: 10, category: "rapid" },
  { name: "30+0", time: 30, increment: 0, category: "rapid" },
];

interface SelectTimeControlComponentProps {
  selectedTimeControl: TimeControl;
  onTimeControlSelect: (timeControl: TimeControl) => void;
}

export default function SelectTimeControlComponent({
  selectedTimeControl,
  onTimeControlSelect,
}: SelectTimeControlComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.timeControlContainer}>
        <View style={styles.titleContainer}>
          <BulletIcon height={20} width={20} />
          <StyledText style={styles.title}>Bullet</StyledText>
        </View>
        <View style={styles.optionsContainer}>
          {bulletTimeControls.map((timeControl) => (
            <TouchableOpacity
              key={timeControl.name}
              style={[
                styles.option,
                selectedTimeControl.name === timeControl.name &&
                  styles.selectedOption,
              ]}
              onPress={() => onTimeControlSelect(timeControl)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedTimeControl.name === timeControl.name &&
                    styles.selectedOptionText,
                ]}
              >
                {timeControl.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.timeControlContainer}>
        <View style={styles.titleContainer}>
          <BlitzIcon height={20} width={20} />
          <StyledText style={styles.title}>Blitz</StyledText>
        </View>
        <View style={styles.optionsContainer}>
          {blitzTimeControls.map((timeControl) => (
            <TouchableOpacity
              key={timeControl.name}
              style={[
                styles.option,
                selectedTimeControl.name === timeControl.name &&
                  styles.selectedOption,
              ]}
              onPress={() => onTimeControlSelect(timeControl)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedTimeControl.name === timeControl.name &&
                    styles.selectedOptionText,
                ]}
              >
                {timeControl.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.timeControlContainer}>
        <View style={styles.titleContainer}>
          <RapidIcon height={20} width={20} />
          <StyledText style={styles.title}>Rapid</StyledText>
        </View>
        <View style={styles.optionsContainer}>
          {rapidTimeControls.map((timeControl) => (
            <TouchableOpacity
              key={timeControl.name}
              style={[
                styles.option,
                selectedTimeControl.name === timeControl.name &&
                  styles.selectedOption,
              ]}
              onPress={() => onTimeControlSelect(timeControl)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedTimeControl.name === timeControl.name &&
                    styles.selectedOptionText,
                ]}
              >
                {timeControl.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 12,
  },
  timeControlContainer: {
    flexDirection: "column",
    gap: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  option: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: Colors.dark.background2,
    borderWidth: 1,
    borderColor: Colors.dark.background2,
    width: "27%",
  },
  selectedOption: {
    borderColor: Colors.dark.primary,
    backgroundColor: Colors.dark.primary + "20",
  },
  optionText: {
    color: Colors.dark.text,
    fontSize: 14,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  selectedOptionText: {
    color: Colors.dark.primary,
  },
});
