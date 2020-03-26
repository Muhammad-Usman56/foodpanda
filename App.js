import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';

import styles from './styleapp.js'
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.one}>
          <View style={styles.a1}>
            <Image style={{ marginLeft: 15, marginTop: 18 }}
              source={require('./assets/img/me.png')}
            />
          </View>
          <View style={styles.a3}>
            <Text style={{ marginTop: 16, fontSize: 18, marginLeft: 38 }}>
              Deliver to:</Text>
          </View>
          <View style={styles.a2}>
            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', color: '#D70F64' }}>
              Selected Location</Text>
          </View>
        </View>
        <View style={styles.two}>
          <View style={styles.t1}>
            <View style={styles.t11}>
              <Image style={{ marginLeft: 15, marginTop: 10 }}
                source={require('./assets/img/se.png')}
              />
            </View>
            <View style={styles.t12}>
              <TextInput style={{ fontSize: 17, margin: 5 }}
                placeholder='Cusion or a Resturent name'
              />
            </View>
            <View style={styles.t11}>
              <Image style={{ marginLeft: 15, marginTop: 10 }}
                source={require('./assets/img/set.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.three}>
          <ScrollView>
            <View style={styles.four}>
              <Text style={{ fontSize: 27, marginLeft: 10, marginTop: 10, fontWeight: 'bold' }}>
                Delivered by foodpanda</Text>

              <View style={styles.five}>
                <ScrollView horizontal>
                  <View style={styles.f1}>
                    <Image style={{ width: 180, height: 120 }}
                      source={require('./assets/img/a.jpg')}
                    />
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 4 }}>
                      Jaldhar Foods</Text>
                    <Text style={{ marginLeft: 5 }}>
                      Chicken Handhi</Text>
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>
                      RS 49 <Text style={{ fontWeight: 'normal' }}>minimum</Text></Text>
                  </View>
                  <View style={styles.f1}>
                    <Image style={{ width: 180, height: 120 }}
                      source={require('./assets/img/b.png')}
                    />
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 4 }}>
                      Aone Foods</Text>
                    <Text style={{ marginLeft: 5 }}>
                      Chicken Biryani</Text>
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>
                      RS 149 <Text style={{ fontWeight: 'normal' }}>minimum</Text></Text>
                  </View>
                  <View style={styles.f1}>
                    <Image style={{ width: 180, height: 120 }}
                      source={require('./assets/img/c.png')}
                    />
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 4 }}>
                      Pizza Hut</Text>
                    <Text style={{ marginLeft: 5 }}>
                      Medium Pizza</Text>
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>
                      RS 499 <Text style={{ fontWeight: 'normal' }}>minimum</Text></Text>
                  </View>
                  <View style={styles.f1}>
                    <Image style={{ width: 180, height: 120 }}
                      source={require('./assets/img/d.png')}
                    />
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 4 }}>
                      KFC</Text>
                    <Text style={{ marginLeft: 5 }}>
                      Zinger Burger</Text>
                    <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>
                      RS 149 <Text style={{ fontWeight: 'normal' }}>minimum</Text></Text>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.six}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>
                  Share The Foodpanda Love </Text>
                <Text style={{ fontSize: 15, marginLeft: 5, color: 'white' }}>
                  Give your friend Rs 300.00 and earn Rs 300.00 in return</Text>
              </View>
              <Text style={{ fontSize: 27, fontWeight: 'bold', marginLeft: 10 }}>
                All restaurants (3)
              </Text>
              <View style={styles.seven}>
                <Image style={{ width: 350, height: 230, marginLeft: 5, marginRight: 5 }}
                  source={require('./assets/img/a.jpg')}
                />
                <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 4, fontSize: 20 }}>
                  Jaldhar Foods</Text>
                <Text style={{ marginLeft: 5 }}>
                  Chicken Handhi Delivery,foodpanda,pakistani</Text>
                <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>
                  $$$ RS 49 <Text style={{ fontWeight: 'normal' }}>minimum</Text></Text>
              </View>
              <View style={styles.seven}>
                <Image style={{ width: 350, height: 230, marginLeft: 5, marginRight: 5, }}
                  source={require('./assets/img/d.png')}
                />
                <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 4, fontSize: 20 }}>
                  KFC Pakistan</Text>
                <Text style={{ marginLeft: 5 }}>
                  Chicken Zinger Burger Delivery,foodpanda,pakistani</Text>
                <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>
                  $$$ RS 149 <Text style={{ fontWeight: 'normal' }}>minimum</Text></Text>
              </View>
              <View style={styles.seven}>
                <Image style={{ width: 350, height: 230, marginLeft: 5, marginRight: 5 }}
                  source={require('./assets/img/c.png')}
                />
                <Text style={{ fontWeight: 'bold', marginLeft: 5, marginTop: 4, fontSize: 20 }}>
                  Pizza Hut Pakistan</Text>
                <Text style={{ marginLeft: 5 }}>
                  Regular Pizza Delivery,foodpanda,pakistani</Text>
                <Text style={{ fontWeight: 'bold', marginLeft: 5, }}>
                  $$$ RS 449 <Text style={{ fontWeight: 'normal' }}>minimum</Text></Text>
              </View>
              <Text style={{ marginLeft: 150, color: '#D70F64' }}>
                See more
              </Text>

            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}


