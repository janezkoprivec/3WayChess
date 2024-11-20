import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface SelectColorComponentProps {
  availableColors: string[];
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
}

interface colorOptions {
  id: string;
  color: string;
  icon: 'circle' | 'questionmark';
}

const SelectColorComponent: React.FC<SelectColorComponentProps> = ({
  availableColors,
  selectedColor,
  onColorSelect,
}) => {
  const colorOptions: colorOptions[] = [
    { id: 'random', color: 'rainbow', icon: 'questionmark' },
    { id: 'white', color: '#FFFFFF', icon: 'circle' },
    { id: 'grey', color: '#808080', icon: 'circle' },
    { id: 'black', color: '#000000', icon: 'circle' },
  ];

  const isColorAvailable = (colorId: string) => {
    if (colorId === 'random') return true;
    return availableColors.includes(colorId);
  };

  return (
    <View style={styles.container}>
      {colorOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.colorButton,
            option.id === 'white' && styles.whiteButton,
            option.id === 'grey' && styles.greyButton,
            option.id === 'black' && styles.blackButton,
            selectedColor === option.id && styles.selectedButton,
          ]}
          onPress={(event) => {
            if (isColorAvailable(option.id)) onColorSelect(option.id);
          }}
          disabled={!isColorAvailable(option.id)}
        >
          {option.icon === 'questionmark' && (
            <FontAwesome6 name="question" size={24} color="black" />
          )}
          {!isColorAvailable(option.id) && (
            <FontAwesome name="close" size={24} color="red" />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  whiteButton: {
    backgroundColor: '#FFFFFF',
  },
  greyButton: {
    backgroundColor: '#808080',
  },
  blackButton: {
    backgroundColor: '#000000',
  },
  selectedButton: {
    borderColor: Colors.dark.primary,
  },
});

export default SelectColorComponent;
