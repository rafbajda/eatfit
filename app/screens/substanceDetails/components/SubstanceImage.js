import React from 'react';
import { Image } from 'react-native-elements';
import { globalGreen } from '../../../shared/constants/colors';
import { ImageContainer } from '../styles/substanceDetailsStyles';

const SubstanceImage = props => {
    const { imageUrl } = { ...props };
    return (
        <ImageContainer>
            <Image
                source={{ uri: imageUrl }}
                style={{
                    height: 150,
                    borderWidth: 2,
                    borderColor: globalGreen,
                }}
            />
        </ImageContainer>
    );
};

export default SubstanceImage;
