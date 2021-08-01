import React from 'react';
import { 
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    TextInput,
    TouchableOpacity } from 'react-native';
import Welcome from './Welcome';
import ItemList from './ItemList';




export default class index extends React.Component 
{

    constructor() {
        super();
        this.state = {
            text: '',
            data: []
        }
    }

    handleSave = () => {
        const {text,data} = this.state;
        data.push({text});
        this.setState({data, text: ''});
        
    };

    render() {
        
        const {text,data} = this.state;
        
        return(
            <View style={[{paddingTop:30}]}>
                <View style={style.title}><Text style={style.title_text}>To-Do Application</Text></View>
                <View style={{backgroundColor:'#ccc',padding:10, flexDirection:'row'}} >
                    <TextInput 
                    style={style.input}
                    value={text}
                    onChangeText={(text)=>this.setState({text})}
                     />
                    <TouchableOpacity onPress={this.handleSave} style={style.button}>
                        <Text style={style.title_text}>Ekle</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {   data.map((item) => {
                        
                            return <ItemList text={item.text} />
                        })
                    }
                </View>
            </View>
        )
    }     
}

const style = StyleSheet.create({

    title: {backgroundColor: 'blue', padding:10},
    title_text: {color: 'white', textAlign:'center',fontSize:16,fontWeight:'700'},
    input: {
        padding:10,
        backgroundColor:'#fff',
        flex: 1},
    button: {
            padding:10, 
            backgroundColor:'orange',
            borderRadius:7,
            marginLeft:10}

});