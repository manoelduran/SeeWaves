import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProvider {
    children: ReactNode;
}

interface LoginProps {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn: ({ email, password }: LoginProps) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProvider) {
    const [user, setUser] = useState<User>({} as User);
    async function signIn({ password, email }: LoginProps) {
        try {
            const userData = ({
                id: String(new Date()),
                email,
                password
            });
            await AsyncStorage.setItem('@user', JSON.stringify(userData))
            setUser(userData)
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async function signOut() {
        try {
            await AsyncStorage.removeItem('@user')
            setUser({} as User);
        } catch (error) {
            throw new Error(error as string)
        }
    }

    useEffect(() => {
        async function loadUserData() {
            const userCollection = await AsyncStorage.getItem('@user')
            const response = await JSON.parse(String(userCollection))
            if (response.length > 0) {
                const userDate = response[0]._raw as unknown as User;
                setUser(userDate)
                console.log(userDate)
            };
        }
        loadUserData();
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth }

