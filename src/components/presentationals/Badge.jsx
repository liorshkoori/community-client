import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Badge extends Component {

  render(){
    var badgeList = this.props.badges.map(badge => (
      <li key={badge.index}>{badge.title}</li>
    ));
    return (
      <div>
        <h2>Badges</h2>
        <div>
          <ul>{badgeList}</ul>
        </div>
      </div>
    );
  }
}

Badge.propTypes = {
  badges: PropTypes.array.isRequired,
}

export default Badge;