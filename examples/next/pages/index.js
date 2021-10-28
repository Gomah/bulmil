import React from 'react';
import { BmSection, BmContainer, BmButton } from '@bulmil/react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'is-primary',
      size: null,
      light: false,
      outlined: false,
    };

    this.colors = [
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-danger',
      'is-warning',
      'is-white',
      'is-light',
      'is-dark',
      'is-black',
      'is-text',
      null,
    ];

    this.sizes = ['is-large', 'is-medium', 'is-small', null];
  }

  handleButtonClick = (e) => {
    const sizes = this.sizes.filter((s) => s !== this.state.size);
    const colors = this.colors.filter((c) => c !== this.state.color);

    this.setState({
      color: colors[Math.floor(Math.random() * this.colors.length)],
      size: sizes[Math.floor(Math.random() * this.sizes.length)],
      outlined: Math.floor(Math.random() * 10) >= 5,
      light: Math.floor(Math.random() * 10) >= 5,
    });
  };

  render() {
    return (
      <BmSection>
        <BmContainer>
          <BmButton
            is-outlined={this.state.outlined}
            is-light={this.state.light}
            size={this.state.size}
            color={this.state.color}
            onClick={this.handleButtonClick}
          >
            Button
          </BmButton>
        </BmContainer>
      </BmSection>
    );
  }
}

export default Home;
