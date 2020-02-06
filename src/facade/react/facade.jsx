function accordeonStateFacade() {

  const [isOpen, setOpenState] = React.useState(false);

  const toggleClick = () => setOpenState(!isOpen);

  return {
    isOpen,
    toggleClick
  };
};
