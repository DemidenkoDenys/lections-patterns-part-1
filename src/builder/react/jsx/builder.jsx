
const ClassComponentBuilder = (displayName = 'Component') => {
  let _render,
      _propTypes,
      _mapStateToProps,
      _mapDispatchToProps

  const builder = {
    render: renderFn => { _render = renderFn; return builder; },
    propTypes: types => { _propTypes = types; return builder; },
    mapStateToProps: statePropsFn => { _mapStateToProps = statePropsFn; return builder; },
    mapDispatchToProps: dispatchPropsFn => { _mapDispatchToProps = dispatchPropsFn; return builder; },

    build: () => {
      if (!_render) {
        throw new Error('Component render method required');
      }

      const Component = class extends React.Component {
        render = () => _render(this.props);
      }

      Component.propTypes = _propTypes || {};
      Component.displayName = displayName;

      if (_mapStateToProps || _mapDispatchToProps) {
        return ReactRedux.connect(_mapStateToProps, _mapDispatchToProps)(Component);
      }

      return Component;
    }
  }

  return builder;
}
