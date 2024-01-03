function DessertsList(props) {
  // Extract the data prop
  const { data } = props;

  // Filter and sort the desserts
  const filteredDesserts = data
    .filter((dessert) => dessert.calories < 500)
    .sort((a, b) => a.calories - b.calories);

    
  return (
    <ul>
      {filteredDesserts.map((dessert) => (
        <li key={dessert.name}>
          {`${dessert.name} - ${dessert.calories} cal`}
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
