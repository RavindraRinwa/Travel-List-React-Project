export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list ✈️</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.reduce(
    (acc, item) => (acc += item.packed ? 1 : 0),
    0
  );
  return (
    <footer className="stats">
      <em>
        💼 You have {numItems} items on your list,and uyou already packed{" "}
        {numPacked}({Math.round((numPacked / numItems) * 100)}%)
      </em>
    </footer>
  );
}
