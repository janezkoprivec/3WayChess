import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { User } from '@/models/db/GameModels';
import { useUser } from '@/contexts/UserContext';

interface HeaderProps {
  title: string;
}

export const HeaderComponent: React.FC<HeaderProps> = ({ title }) => {
  const {user} = useUser();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <View style={styles.userContainer}>
        {user?.username ? (
          <Text style={styles.username}>Welcome, {user.username}</Text>
        ) : (
          <Text style={styles.username}>Guest</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: Colors.dark.background2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark.text,
  },
  userContainer: {
    marginLeft: 16,
  },
  username: {
    fontSize: 16,
    color: Colors.dark.text,
  },
});

export default HeaderComponent;
