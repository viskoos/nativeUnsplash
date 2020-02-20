import React, {Component} from 'react'
import {ScrollView, TextInput, Text, Image, Button} from 'react-native'
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

  onPressButton() {
  }

  render() {
    console.log(
      this.state.text
    )

    return (
      <ScrollView>
        <TextInput
          style={{textAlign: 'center', paddingTop: 30, paddingLeft: 20, paddingRight: 20, marginBottom: 15}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder="What you want?"
        />
        <Button
          onPress={this.onPressButton}
          title="Search"
        />
        {
          this.state.imgs.map((items) => (<Image style={{width: 400, height: 400, marginBottom: 5}} source={{uri: items.urls.small}} />))
        }
      </ScrollView>
    )
  }
}
export default App
