import React, { Component } from 'react'
import { ScrollView, Text, View, Animated } from 'react-native'
import { connect } from 'react-redux'
import { Images, Colors } from '../Themes'
import Button from 'react-native-micro-animated-button'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/BreathingScreenStyle'

class BreathingScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor (props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)  // Initial value for opacity: 0
    }
  }

  componentDidMount () {
  }

  startAnimation () {
    Animated.loop(Animated.sequence([
      Animated.timing(                  // Animate over time
                                    this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 5000              // Make it take a while
        }
                                    ), Animated.timing(                  // Animate over time
                                    this.state.fadeAnim,            // The animated value to drive
                                      {
                                        toValue: 0,                   // Animate to opacity: 1 (opaque)
                                        duration: 5000              // Make it take a while
                                      }
                                    )])).start()
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Animated.View style={[styles.circle, { transform: [{
            scale: this.state.fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.25, 1.8]  // 0 : 150, 0.5 : 75, 1 : 0
            })
          }]}]} />
        </View>
        <View style={styles.buttonRow}>
          <Button
            bounce
            foregroundColor={Colors.snow}
            backgroundColor={Colors.fire}
            successColor={Colors.fire}
            maxWidth={150}
            style={{margin: 10}}
            label='Lets Breathe!'
            onPress={() => {
              this.b1.success()
              this.startAnimation()
            }
            }
            ref={ref => (this.b1 = ref)}
            successIconName='check'
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreathingScreen)
