const BBsItem = (props) => {
  const { item } = props;
  return (
    <tr>
      <td>{item.b_seq}</td>
      <td>{item.b_title}</td>
      <td>{item.b_content}</td>
    </tr>
  );
};
export default BBsItem;
