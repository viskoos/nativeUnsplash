import React, {Component} from 'react'
import {ScrollView, TextInput, Text, Image, Button} from 'react-native'
import axios from 'axios'

class App extends Component {
  constructor(){
    super()

    this.state = {
      text: '',
      imgs: []
    }
  }

  _onPressButton() {
    const ques = this.state.text
    const clientId = '09465ee0b43bf274a0c67732a9a8f75faad53b2495ee077947cf0fca6a68bfe5'
    const url = `https://api.unsplash.com/search/photos?page=1&query=${ques}&client_id=${clientId}`

    axios.get(url)
      .then((response) => {
        this.setState({
          imgs: response.data.results
        })
      })

    if (this.state.text == '') {
      return(
        alert('Please enter title name')
      )
    }
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
          onPress={() => this._onPressButton()}
          title="Search"
        />
        {
          this.state.imgs.map((items, index) => (<Image key={index} style={{width: 400, height: 400, marginBottom: 5}} source={{uri: items.urls.small}} />))
        }
      </ScrollView>
    )
  }
}
export default App
