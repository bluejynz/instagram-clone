import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
`;

export const LogoContainer = styled.View`
    background-color: #FFF;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 100px;
    margin: 10px;
`;

export const ContainerLogin = styled.View`
    background-color: #FFF;
    align-items: center;
    justify-items: center;
    padding: 10px;
`;

export const UserInput = styled.TextInput`
    background-color: #FFF;
    border-radius: 3px;
    height: 35px;
    width: 70%;
    border: 1px solid #CCC;
    margin: 3px;
    padding-left: 10px;
    font-size: 12px;
`;

export const ButtonLogin = styled.TouchableOpacity`
    background-color: #0095f6;
    border-radius: 3px;
    height: 30px;
    width: 70%;
    align-items: center;
    margin-top: 10px;
`;

export const ButtonText = styled.Text`
    margin: auto;
    font-weight: bold;
    color: #FFF;
    font-size: 14px;
`;

export const ContainerOu = styled.View`
    flex-direction: row;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;

export const OuText = styled.Text`
    color: #888;
    font-size: 14px;
`;

export const Line = styled.View`
    background-color: #CCC;
    height: 1px;
    width: 100px;
`;

export const ContainerFacebook = styled.View`
    flex-direction: row;
    justify-items: center;
    align-items: center;
`;

export const FacebookText = styled.Text`
    color: #385185;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 0 6px 10px;
`;

export const ForgotPassText = styled.Text`
    color: #385185;
    font-size: 12px;
    font-weight: 400;
    padding: 10px;
`;

export const ContainerSignIn = styled.View`
    flex-direction: row;
    justify-items: center;
    align-items: center;
    padding: 35px;
`;

export const TranspButton = styled.TouchableOpacity`
    
`;

export const BlackText = styled.Text`
    color: #000;
    font-size: 14px;
    font-weight: 400;
`;

export const BlueText = styled.Text`
    color: #0095f6;
    font-size: 14px;
    font-weight: 500;
`;