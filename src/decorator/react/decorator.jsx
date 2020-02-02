const decorator = OriginalComponent => class WrapperComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    console.log('decorator works');
    return <OriginalComponent />;
  }
};
