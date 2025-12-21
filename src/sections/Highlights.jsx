import temp from "../data/highlights.json"
import MenuCard from "../components/MenuCard";

const Highlights = () => {
  return (
    <section className="highlights" aria-label="Highlights">
      <div className='box'>
        {temp.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Highlights;
