const BBsItem = ({ item }) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.bDate}</td>
      <td>{item.bSubject}</td>
      <td>{item.bWriter}</td>
      <td>0</td>
    </tr>
  );
};

export default BBsItem;
