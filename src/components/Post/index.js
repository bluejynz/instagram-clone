import React from 'react';

import { Container, ContainerScroll, ContainerHeader, ContainerPerson, ContainerPhoto, Photo, Name, ContainerMainPhoto, MainPhoto, ContainerIcons, IconGroup, Divisao, ContainerLikes, PhotoLike, Comments } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import posts from './posts.json';

const Post = () => {
    return (
        <ContainerScroll>
            <Divisao />
            {posts && posts.map((post, index) => (
                <Container key={index}>
                    <ContainerHeader>
                        <ContainerPerson>
                            <ContainerPhoto>
                                <Photo source={post.photoProfile} />
                            </ContainerPhoto>
                            <Name>{post.name}</Name>
                        </ContainerPerson>
                        <Icon name="ellipsis-h" color="#000" size={16} />
                    </ContainerHeader>
                    <ContainerMainPhoto>
                        <MainPhoto source={post.mainPhoto} />
                    </ContainerMainPhoto>
                    <ContainerIcons>
                        <IconGroup>
                            <Icon name="heart" color="#000" size={16} />
                            <Icon name="comment" color="#000" size={16} />
                            <Icon name="paper-plane" color="#000" size={16} />
                        </IconGroup>
                        <Icon name="bookmark" color="#000" size={16} />
                    </ContainerIcons>
                    <ContainerLikes>
                        <PhotoLike source={post.photoLike} />
                        <Name>Curtido por {post.nameLike} e outras {post.likes} pessoas</Name>
                    </ContainerLikes>
                    <Comments>Ver todos os {post.comments} comentários</Comments>
                </Container>
            ))}
        </ContainerScroll>
    );
}

export default Post;