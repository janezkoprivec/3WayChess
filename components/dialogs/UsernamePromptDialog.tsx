import React, { useState } from 'react';
import StyledDialog from '../styled/StyledDialogComponent';
import StyledText from '../styled/StyledTextComponent';
import StyledButton from '../styled/StyledButtonComponent';
import { View, TextInput } from 'react-native';
import { Colors } from '@/constants/Colors';  
import { useUser } from '@/contexts/UserContext';

interface UsernamePromptDialogProps {
    isVisible: boolean;
    onSubmit: (username: string) => void;
}

export const UsernamePromptDialog: React.FC<UsernamePromptDialogProps> = ({ isVisible, onSubmit }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const validateUsername = (username: string) => {
        if (username.trim().length < 3) {
            setError('Username must be at least 3 characters long');
            return false;
        }

        if (username.trim().length > 20) {
            setError('Username must be less than 20 characters long');
            return false;
        }

        return true;
    }

    const handleSubmit = () => {
        if (!validateUsername(username)) {
            return;
        }
        setError('');
        onSubmit(username.trim());
    };

    return (
        <StyledDialog 
            visible={isVisible} 
            title="Choose Your Username"
        >
            <View style={{ padding: 20 }}>
                
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Enter username"
                    style={{
                        borderRadius: 8,
                        padding: 10,
                        marginBottom: 10,
                        color: Colors.dark.text,
                        backgroundColor: Colors.dark.background2,
                    }}
                    placeholderTextColor={Colors.dark.textDimmed}
                />
                {error ? (
                    <StyledText style={{ color: Colors.dark.error, marginBottom: 10 }}>
                        {error}
                    </StyledText>
                ) : null}

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <StyledButton 
                        size="md"
                        text="Continue"  
                        onPress={handleSubmit}
                        disabled={!username.trim()}
                    />  
                </View>
            </View>
        </StyledDialog>
    );
}; 