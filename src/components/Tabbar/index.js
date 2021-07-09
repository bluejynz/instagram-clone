import React from 'react';

import { Container, SubContainer, Divisao } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assets/images/logo.png';

const Tabbar = () => {
    return (
        <Container>
            <Divisao /> 
            <SubContainer>
                <Icon name="home" size={22} />
                <Icon name="search" size={22} />
                <Icon name="instagram" size={22} />
                <Icon name="heart" size={22} />
                <Icon name="user" size={22} />
            </SubContainer>
        </Container>
    );
}

export default Tabbar;