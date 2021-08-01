import React, {Component} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';



const FirstComponent = ({name,text,changeState}) => {

    

    return(
        <View>
            <Text> {name} {text}</Text>
            <TouchableOpacity onPress={changeState}>
                <Text>değiştir</Text>
            </TouchableOpacity>
        </View>
    )
}

const Second = () => {

    const value=10;

    return(
        <View>
            <Text>second component</Text>
        </View>
    )
}

export {FirstComponent,Second};

// export default class FirstComponent extends Component
// {
//     render() {
//         const {name, text, changeState} = this.props;

//         return(
//         <View>
//             <Text> {name} {text} first component</Text>
//             <TouchableOpacity onPress={changeState}>
//                 <Text>değiştir</Text>
//             </TouchableOpacity>
//         </View>
//         )
//     }
// }





//Komponentler buyuk harfle baslar.

/*export edilen yerde default varsa, buradaki ad (ornegin firstComponent) ne olursa olsun, 
import edilen yerde istenilen adla kullanilabilir.

Or: abc.js ve def.js olsun
abc.js dosyasinda export default AbcComponent ile export ediyor olalim.
def.js dosyasinda AbcComponent komponentini import edelim, ederken import IstenilenHerhangiBirsey from 'abc.js' yazilir.

Or2: xyz.js ve wvy.js olsun
xyz.js dosyasinda export {XyzComponent} ile export ediyor olalim.
wvy.js dosyasinda AbcComponent komponentini import edelim, ederken import {XyzComponent} from 'xyz.js' yazilir.

Or3: xyzEkrani.js ve abcEkrani.js olsun
xyzEkrani.js dosyasinda export {Bir, Iki} ile export ediyor olalim.
abcEkrani.js dosyasinda bu iki komponenti cagirriken:import {Bir,Iki} from 'xyzEkrani.js' yazilir.

*/