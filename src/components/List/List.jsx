import './list.sass'
function List({children}) {
  return (
    <section className="list">
      {children}
    </section>
  );
}

export default List;