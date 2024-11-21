import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";
import StyledDialog from "@/components/styled/StyledDialogComponent";
import SelectColorComponent from "@/components/styled/SelectColorComponent";
import SelectTimeControlComponent from "@/components/styled/SelectTimeControlComponent";
import { TimeControl } from "@/models/db/GameModels";

interface CreateGameDialogProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (
    gameName: string,
    selectedColor: string,
    timeControl: TimeControl
  ) => void;
}

export default function CreateGameDialog({
  visible,
  onClose,
  onCreate,
}: CreateGameDialogProps) {
  const [gameName, setGameName] = useState("");
  const [selectedColor, setSelectedColor] = useState("ran dom");
  const [selectedTimeControl, setSelectedTimeControl] = useState<TimeControl>({
    name: "10+0",
    time: 10,
    increment: 0,
    type: "rapid",
  });

  const handleCreate = () => {
    onCreate(gameName, selectedColor, selectedTimeControl);
    setGameName("");
    setSelectedColor("random");
    setSelectedTimeControl({
      name: "10+0",
      time: 10,
      increment: 0,
      type: "rapid",
    });
  };

  return (
    <StyledDialog
      visible={visible}
      onClose={onClose}
      title="Create New Game"
      submitButtonText="Create"
      onSubmit={handleCreate}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Game Name</Text>
        <TextInput
          style={styles.input}
          value={gameName}
          onChangeText={setGameName}
          placeholder="Enter game name (optional)"
          placeholderTextColor={Colors.dark.text + "80"}
        />
      </View>

      <View style={styles.timeControlContainer}>
        <Text style={styles.label}>Time Control</Text>
        <SelectTimeControlComponent
          selectedTimeControl={selectedTimeControl}
          onTimeControlSelect={setSelectedTimeControl}
        />
      </View>

      <View style={styles.colorContainer}>
        <Text style={styles.label}>Select Your Color</Text>
        <SelectColorComponent
          availableColors={["random", "white", "grey", "black"]}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
        />
      </View>
    </StyledDialog>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 12,
  },
  label: {
    color: Colors.dark.text,
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: Colors.dark.background2,
    color: Colors.dark.text,
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
  },
  colorContainer: {
    marginBottom: 12,
  },
  timeControlContainer: {
    marginBottom: 12,
  },
});
