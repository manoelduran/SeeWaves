import React, { useState } from 'react';
import Image from '../../assets/logo.png';
import * as Yupi from 'yup';
import {
    Container,
    Header,
    HeaderImage,
    Content,
} from './styles';
import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';


export function SignIn() {
    const navigation = useNavigation<any>();
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function handleSignIn() {
        try {
            const schema = Yupi.object().shape({
                email: Yupi.string()
                    .required('E-mail é obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yupi.string().required('Senha é obrigatória')
            })
            await schema.validate({ email, password })
            signIn({ email, password })
        } catch (error) {
            throw new Error(error as string);
        }
    }
    return (
        <Container>
            <Header>
                <HeaderImage
                    source={Image}
                    width={30}
                    height={30}
                />
            </Header>
            <Content>
                <Input
                    iconName='mail'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <PasswordInput
                    iconName='lock'
                    placeholder='Senha'
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    title='Fazer login'
                    onPress={handleSignIn}
                />
            </Content>
        </Container>
    );
}