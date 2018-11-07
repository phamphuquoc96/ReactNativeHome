import React, { Component } from 'react';
import { View, TextInput,Text } from 'react-native';
import {Button, Card, CardSection, Input, Spinner} from "./common";

class LoginForm extends Component{
    state = { email: '',password:'', status:'', loading:false};

    onButtonPress(){
        console.log("pressed");
        console.log(this.state.email);
        console.log(this.state.password);

        const {email,password} = this.state;
        this.setState({loading:true});

        if(email == 'quoc' && password == '123'){
            this.setState({status: 'Success'})}
            else{
                this.setState({status: 'Failed'})
            };
        this.setState({
            loading : false,
            email:'',
            password:''
        });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size={'small'}/>;
        };

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        secureTextEntry={false}
                        placeholder={'user@gmail.com'}
                        label={'Email'}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        placeholder={'password'}
                        label={'Password'}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorStyle}>
                    {this.state.status}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    };
};

const styles = {
    errorStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};

export default LoginForm;