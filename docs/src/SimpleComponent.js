import React from 'react'

import InsideComponent from './InsideComponent'

class SimpleComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      childrenNumber: [`${Math.random()}`],
    }
  }
  render() {
    const { childrenNumber } = this.state

    return (
      <div className="simple-component" style={{ marginLeft: '20px', border: '1px solid grey' }}>
        <button
          onClick={() => {
            const childrenCopy = [...childrenNumber]
            childrenCopy.push(`${Math.random()}`)
            this.setState({ childrenNumber: childrenCopy })
          }}
        >Add N-2</button>
        <div>{childrenNumber.map(child => <InsideComponent key={child} />)}</div>
      </div>
    )
  }
}

export default SimpleComponent
