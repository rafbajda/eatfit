import React from 'react';
import { Image } from 'react-native-elements';
import { ImageContainer } from '../../substanceDetails/styles/substanceDetailsStyles';
import { globalGreen } from '../../../shared/constants/colors';

const ScanImage = props => {
    const { scanUrl } = { ...props };

    return (
        <ImageContainer>
            <Image
                source={{ uri: scanUrl }}
                style={{
                    height: 150,
                    borderWidth: 2,
                    borderColor: globalGreen
                }}
            />
        </ImageContainer>
    );
};

export default ScanImage;
