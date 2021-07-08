import numeral from 'numeral'
import React, { Component } from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

interface PropTypes {
  countTo: number
}

interface StateTypes {
  visible: boolean
}

class AnimatedCounter extends Component<PropTypes, StateTypes> {
  state = {
    visible: false
  }

  onChange = (visible: boolean) => {
    if (visible && this.props.countTo > 0) {
      this.setState({ visible })
    }
  }

  render() {
    return (
      <VisibilitySensor delayedCall onChange={this.onChange}>
        <div>
          {this.state.visible ? (
            <CountUp
              delay={0}
              start={0}
              end={this.props.countTo}
              useEasing
              duration={3}
              formattingFn={(v) => numeral(v).format('0.0a')}
            >
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          ) : (
            <span>0</span>
          )}
        </div>
      </VisibilitySensor>
    )
  }
}

export default AnimatedCounter
