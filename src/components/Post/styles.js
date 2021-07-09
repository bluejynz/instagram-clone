import styled from "styled-components/native";

export const Divisao = styled.View`
    background-color: #CCC;
    height: 3px;
    margin-top: 10px;
    border-radius: 50%;
`;

export const Container = styled.View`
    padding-bottom: 20px;
`;

export const ContainerScroll = styled.ScrollView`
    flex: 1;
`;

export const ContainerHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-bottom: 0;
`;

export const ContainerPerson = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ContainerPhoto = styled.View`
    background-color: #29C9FA;
    width: 44px;
    height: 44px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const Photo = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff
`;

export const Name = styled.Text`
    height: 20px;
    font-size: 12px;
    font-weight: bold;
    padding-left: 8px;
`;

export const ContainerMainPhoto = styled.View`
    height: 300px;
    padding: 10px;
`;

export const MainPhoto = styled.Image.attrs({
    resizeMode: 'cover'
})`
    height: 100%;
    width: 100%;
    margin: auto;
    border-radius: 8px;
`;

export const ContainerIcons = styled.View`
    background-color: #FFF;
    flex-direction: row;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
`;

export const IconGroup = styled.View`
    flex-direction: row;
    width: 70px;
    justify-content: space-between;
`;

export const ContainerLikes = styled.View`
    background-color: #FFF;
    flex-direction: row;
    align-items: center;
`;

export const PhotoLike = styled.Image.attrs({
    resizeMode: 'cover'
})`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-left: 10px;
`;

export const Comments = styled.Text`
    color: #888;
    height: 15px;
    font-size: 14px;
    padding: 5px 10px;
`;