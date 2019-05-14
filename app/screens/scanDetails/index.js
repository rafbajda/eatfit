import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'native-base';

const ScanDetailsScreen = props => {
    return <Text> Screen Details</Text>;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScanDetailsScreen);
