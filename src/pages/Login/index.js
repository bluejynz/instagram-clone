import React from 'react';

import { Container, LogoContainer, Logo, ContainerLogin, UserInput, ButtonLogin, ButtonText, ContainerOu, OuText, Line, ContainerFacebook, FacebookText, ForgotPassText, ContainerSignIn, TranspButton, BlackText, BlueText } from './styles';
import logo from '../../assets/images/Instagram-Logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = () => {
    return (
        <React.Fragment>
            <Container>
                <LogoContainer>
                    <Logo source={logo} />
                </LogoContainer>
                <ContainerLogin>
                    <UserInput placeholder="Telefone, nome de usuário ou email" />
                    <UserInput placeholder="Senha" />
                    <ButtonLogin>
                        <ButtonText >Entrar</ButtonText>
                    </ButtonLogin>
                    <ContainerOu>
                        <Line />
                        <OuText>OU</OuText>
                        <Line />
                    </ContainerOu>
                    <ContainerFacebook>
                        <Icon name="facebook-square" color="#385185" size={16} />
                        <TranspButton>
                            <FacebookText>Entrar com o Facebook</FacebookText>
                        </TranspButton>
                    </ContainerFacebook>
                    <TranspButton>
                        <ForgotPassText>Esqueceu a senha?</ForgotPassText>
                    </TranspButton>
                    <ContainerSignIn>
                        <BlackText>Não tem uma conta? </BlackText>
                        <TranspButton>
                            <BlueText>Cadastre-se</BlueText>
                        </TranspButton>
                    </ContainerSignIn>
                </ContainerLogin>
            </Container>
        </React.Fragment>
    )
}

export default Login;