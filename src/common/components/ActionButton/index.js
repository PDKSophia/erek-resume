import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

class ActionButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  handleClick = e => {
    const { onClick } = this.props;
    const result = onClick(e);
    this.setState({ isLoading: true });

    Promise.resolve(result).finally(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    const props = {
      ...this.props,
      onClick: this.handleClick,
      loading: isLoading
    }

    return <Button { ...props } />;
  }
}

ActionButton.PropTypes = {
  onClick: PropTypes.func
}

ActionButton.defaultProps = {
  onClick: () => {}
}

export default ActionButton;
