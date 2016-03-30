
import React, { Component } from 'react'
import MainArea from '../../components/MainArea'
import style from './style.css'

class App extends Component {
  static defaultProps = { hummus: 'mmm' }

  render() {
    const { props } = this

    return (
      <div className='container'>
        <h1 className='center'>React Hummus</h1>
        <MainArea {...props} />
      </div>
    )
  }
}

export default App
