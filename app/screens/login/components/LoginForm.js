import React from 'react';
import { Form, Item, Input, Content, Thumbnail, Text, Button } from 'native-base';
import { CenterRow } from '../../../shared/styles/common';

const logoImage = require('../../../assets/images/logo2.png');

const LoginForm = props => {
    return (
        <Content>
            <CenterRow>
                <Thumbnail
                    square
                    source={logoImage}
                    style={{ height: 180, width: 180, marginBottom: 10 }}
                />
            </CenterRow>
            <CenterRow>
                <Form style={{ width: '80%' }}>
                    <Item style={{ marginBottom: 7 }} regular>
                        <Input placeholder="Username" />
                    </Item>
                    <Item regular>
                        <Input placeholder="Password" />
                    </Item>
                    <Text
                        style={{
                            fontSize: 13,
                            textAlign: 'right',
                            color: '#3B5998',
                            marginTop: 5,
                            marginBottom: 5,
                        }}
                    >
                        Forgot password?
                    </Text>
                </Form>
            </CenterRow>
            <CenterRow>
                <Button
                    rounded
                    style={{
                        backgroundColor: '#3B5998',
                        width: '70%',
                        justifyContent: 'center',
                        marginTop: 10,
                        fontWeight: 'bold',
                    }}
                >
                    <Text>Login</Text>
                </Button>
            </CenterRow>
        </Content>
    );
};

export default LoginForm;
