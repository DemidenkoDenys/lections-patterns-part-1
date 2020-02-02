const ToggleDecorator = OriginalComponent => {
  return class WrapperComponent extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      }
    }

    toggleClick = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
      return <OriginalComponent { ...this.state } { ...this.props } toggleClick={this.toggleClick} />;
    }
  };
}