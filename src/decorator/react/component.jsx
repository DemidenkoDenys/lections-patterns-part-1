class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  open = () => this.setState({ liked: true });

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    return <button onClick={ this.open }>Like</button>;
  }
}
