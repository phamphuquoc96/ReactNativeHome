import React from 'react';
import  {View} from 'react-native';


//create componnet

const CardSection = (props) => {
    return(
        <View style={style.containnerStyle}>
            {props.children}
        </View>
    )
};

const style = {
    containnerStyle:{
        borderBottomWidth:1,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        borderColor: '#ddd',
        position:'relative',
        padding:5
    }
}

export { CardSection } ;