const accordeonItems = [
  { title: 'item-1', description: 'item-1-description' },
  { title: 'item-2', description: 'item-2-description' },
  { title: 'item-3', description: 'item-3-description' },
];

const AccordeonItem = ({ title, description, isOpen, toggleClick }) => (
  <div>
    <h1 onClick={toggleClick}>{ title }</h1>
    <p style={{ display: isOpen ? 'block' : 'none' }}>{ description }</p>
  </div>
);

const AccordeonList = () => {
  const DecoratedComponent = ToggleDecorator(AccordeonItem);
  return accordeonItems.map(({ title, description }) => (
    <DecoratedComponent
      key={title}
      title={title}
      description={description}
    />
  ));
}
