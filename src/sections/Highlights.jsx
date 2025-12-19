import MenuCard from '../components/MenuCard'

const temp = [
  {
    image: "public/dinner/pierogi.jpg",
    title: "Pierogi",
    description: "Traditional Polish dumplings filled with potatoes and cottage cheese, served with sautéed onions.",
    ingredients: ['Potatoes', 'cottage cheese', 'onions', 'wheat flour', 'butter'],
    price: "8.50"
  },
  {
    image: "public/lunch/panini.jpg",
    title: "Panini",
    description: "Grilled panini with beef, mozzarella, roasted vegetables, and basil pesto.",
    ingredients: ['Ciabatta bread', 'mozzarella', 'zucchini', 'bell peppers', 'basil pesto', 'beef'],
    price: "7.90"
  },
  {
    image: "public/desserts/tiramisu.jpg",
    title: "Tiramisu",
    description: "Classic Italian dessert with layers of espresso-soaked ladyfingers and mascarpone cream.",
    ingredients: ['Mascarpone', 'espresso', 'ladyfingers', 'cocoa powder', 'eggs', 'sugar'],
    price: "6.20"
  }
];

const Highlists = () => {
    return ( 
        <section className="highlights">
            <div className='box'>
                {temp.map((item) => (
                    <MenuCard key={item.id} {...item}/>
                ))}
            </div>
        </section>
     );
}
 
export default Highlists;