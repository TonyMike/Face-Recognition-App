import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import 'tachyons'
import Particles from 'react-tsparticles'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ImageView from './components/ImageView/ImageView'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'


const  Clarifai = require 'clarifai'


const app = new Clarifai.App({
  apiKey: '432a73c567414c068de41f4b67a98771'
 });
class App extends Component {
  constructor () {
    super()
    this.state = {
      url: '',
      imageUrl: '',
      route: 'login',
      isSignedIn: false
    }
  }

  onInputChange = e => {
    this.setState({ url: e.target.value })
  }
  onButtonClick = () => {
    this.setState({ imageUrl: this.state.url })
  }
  onRouteChange = route => {
    if(route === 'home'){
      this.setState({isSignedIn: true})
    }
    else{
      this.setState({isSignedIn: false})
    }
    this.setState({ route: route })
  }
  render () {
    const particlesInit = () => {}
    const particlesLoaded = () => {}

    return (
      <div>
        <Particles
          id='tsparticles'
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: 'repulse'
                },
                resize: true
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40
                },
                push: {
                  quantity: 4
                },
                repulse: {
                  distance: 120,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: '#ffffff'
              },
              links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 0.4
              },
              collisions: {
                enable: true
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: true,
                speed: 5,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 150
              },
              opacity: {
                value: 0.5
              },
              shape: {
                type: 'circle'
              },
              size: {
                random: true,
                value: 4
              }
            },
            detectRetina: true
          }}
        />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {this.state.route === 'login' ? (
          <SignIn onRouteChange={this.onRouteChange} />
        ) : this.state.route === 'register' ? (
          <Register onRouteChange={this.onRouteChange} />
        ) : (
          <div>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonClick={this.onButtonClick}
            />
            <ImageView imageUrl={this.state.imageUrl} />
          </div>
        )}
      </div>
    )
  }
}

export default App
