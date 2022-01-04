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
    user: User | null;
    loading: boolean;
    signIn: ({ email, password }: LoginProps) => Promise<void>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProvider) {
    const [user, setUser] = useState<User | null>({} as User ?? null);
    const [loading, setLoading] = useState(true);
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
            setUser(response)
            setLoading(false);
        }
        loadUserData();
    }, [])

    return (
        <AuthContext.Provider value={{ user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
};

export { AuthProvider, useAuth }

