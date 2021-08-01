//import liraries
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  ScrollView,
  StatusBar,
TouchableOpacity} from 'react-native';
 import {FirstComponent,Second} from './firstComponent';
 


// // create a component
// const jipi = () => {



//   return ( //ekrana yansiyan kisim return icerisinde yazilir, burada köşeli parantez kullanarak style yaptık.
//     <View style={[{flexDirection: 'row', alignContent:'stretch', marginTop:50}]}> 
//       <View style={[styles.container, {backgroundColor: 'red',width:50, height:50}]}></View>
//           <Text>napıyonuz</Text>
//     </View>
//   );
// };
// //view içerisine istediğimiz kadar view atabiliriz ama ilk view altına view atamayız.
// // sadece <View/> şeklinde de azabiliriz.
// // define your styles
// const styles  = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#808080'
//   },
//   style_name: {
//     color: '#b8860b',
//     fontWeight: 'bold',
//     flex: 1

//   }

// });

// //make this component available to the app
// export default jipi;







// --------------------------------birinci yol-----------------------
// const App = () => {
//   return(
//     <View style={{padding:150}}>
//       <Text>merhaba</Text>
//     </View>
//   )
// }

// export default App;



// -----------------ikinci yol----------------------------------------------------------

// export default class App extends Component {

//   render() {
//     return (
//       <View style={[style.welcome_area, {backgroundColor:'darkblue'}]}>
//         <Text style={style.welcome_text}>merhaba</Text>
//       </View>
//     )
//   }


// }

// const style = StyleSheet.create({
//   welcome_area: {paddingTop:150, backgroundColor:'aqua'},
//   welcome_text: {color:'orange',fontSize:20}
// });



// flex-direction: yatay/dikey konumlandırma (row/colomn/row-reserve/colomn-reserve) Flex:1 vermemiz gerekiyor görebilmek için.
//not: birinci View kapsayıcı. Şu an arka plan full blue ve diğer renkler mavinin üstünde.

// justify-contect: flex-start, flex-end, center, space-around

// flexWrap: noWrap(sığmayan/sığan karışmaz), wrap(sığmayanları sığdırmanı sağlar)

// alignItems: flex-start, felx-end, center, stretch
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'jipi',
      year: 1994
    };
  }


  // <TouchableOpacity onPress={()=>this.setState({
  //   name, year: 'state içindeki bilgiler tıklanarak bu yazıyla değişti'
  // })}>
  //   <Text>bu yazıyı tıklayarak state içindekileri değiştir(jipi 1994)</Text>
  // </TouchableOpacity>   !!!!normalde böyle olur ama aşağıdaki yol daha iyi.



  changeState = () => {
    this.setState({
       year: 'state içindeki bilgiler tıklanarak bu yazıyla değişti',
      
    }, () => {
      alert('yazılar değişti');
    } );
    alert('tıklandı');
  };


  render() {

    const {name,year} = this.state;

    return(
      <View style= {{flex:1,marginTop:150}} >
          <FirstComponent name={name} text={year} />

          <Second/>
          <Text> {name} {year} </Text>
          <TouchableOpacity onPress={this.changeState}> 
            <Text>tıkla ve alert çalışsın</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress= {this.changeState}>
            <Text>bu yazıyı tıklayarak state içindekileri değiştir (jipi 1994)</Text>
          </TouchableOpacity>
        
      </View>
    )
  }
}

const style = StyleSheet.create({
  welcome_area: {backgroundColor:'black',flex:1}
});