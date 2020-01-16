import React from 'react';
import { Image } from 'react-native-elements';
import { globalGreen } from '../../../shared/constants/colors';
import { ImageContainer } from '../styles/substanceDetailsStyles';
const defaultSubstanceImage = require('../../../assets/images/default_substance.png');

const SubstanceImage = props => {
    const { imageUrl } = props;
    const source = imageUrl ? { uri: imageUrl } : defaultSubstanceImage;
    return (
        <ImageContainer>
            <Image
                source={source}
                style={{
                    height: 150,
                    borderWidth: 2,
                    borderColor: globalGreen
                }}
            />
        </ImageContainer>
    );
};

export default SubstanceImage;
