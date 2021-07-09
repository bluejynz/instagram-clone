import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
`;

export const Logo = styled.Image.attrs({
    resizeMode: 'contain'
})`
    height: 30px;
    width: 150px;
`;

export const ActionButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;