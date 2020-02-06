const accordeonItems = [
  { title: 'item-1', description: 'item-1-description' },
  { title: 'item-2', description: 'item-2-description' },
  { title: 'item-3', description: 'item-3-description' },
];

const AccordeonItem = ({ title, description }) => {
  const { isOpen, toggleClick} =  accordeonStateFacade();
  return (
    <div>
      <h1 onClick={toggleClick}>{ title }</h1>
      <p style={{ display: isOpen ? 'block' : 'none' }}>{ description }</p>
    </div>
  );
};

const AccordeonList = () => {
  return accordeonItems.map(({ title, description }) => (
    <AccordeonItem
      key={title}
      title={title}
      description={description}
    />
  ));
}
