import React, {Component} from 'react'
import {View, TextInput, Text, Image} from 'react-native'
import axios from 'axios'

const clientId = '09465ee0b43bf274a0c67732a9a8f75faad53b2495ee077947cf0fca6a68bfe5'
const url = 'https://api.unsplash.com/search/photos?page=1&query=cats&client_id=09465ee0b43bf274a0c67732a9a8f75faad53b2495ee077947cf0fca6a68bfe5'

class App extends Component {
  constructor(){
    super()

    this.state = {
      text: '',
      imgs: []
    }
  }

  componentDidMount() {
    axios.get(url)
      .then((response) => {
        this.setState({
          imgs: response.data.results
        })
      })
  }

  render() {
    console.log(
      this.state.imgs.map(items => items.urls.small)
    )

    return (
      <View style={{justifyContent: "center", alignItems: 'center', paddingTop: 30, paddingLeft: 20, paddingRight: 20}}>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="Search photo"
        />
        {
          this.state.imgs.map((items) => (<Image style={{width: 400, height: 400}} source={{uri: items.urls.small}} />))
        }
      </View>
    )
  }
}
export default App
