import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface UserAvatarProps {
  imageUrl?: string;
  size?: number;
}

const DEFAULT_AVATAR = 'https://www.chess.com/bundles/web/images/white_400.png'; // Make sure to add a default avatar image to your assets
const DEFAULT_SIZE = 40;

export const UserAvatarComponent: React.FC<UserAvatarProps> = ({ 
  imageUrl, 
  size = DEFAULT_SIZE 
}) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={imageUrl ? { uri: imageUrl } : {uri: DEFAULT_AVATAR}}
        style={[styles.image, { width: size, height: size }]}
        defaultSource={{uri: DEFAULT_AVATAR}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2, // Makes it circular
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
});
