import { useEffect, useState } from "react";
import MenuRadio from "../components/MenuRadio";
import MenuCard from "../components/MenuCard"
import data from '/src/data/menu.json'

const Menu = () => {
    const [current, setCurrent] = useState('lunch');
    const [filtered, setFiltered] = useState(data.filter((item)=> item == 'lunch'));

    useEffect(() => {
        let temp = data.filter((item)=> item.category == current);
        setFiltered(temp);
        console.log(temp)
    },[current])
    
    return ( 
        <section className="menu">
            <h1>MENU</h1>
            <MenuRadio list={['breakfast', 'lunch', 'dinner', 'desserts', 'drinks']} current={current} setCurrent={setCurrent}/>
            <div className="menu-list">
                {filtered.map(item => (
                    <MenuCard key={item.id} {...item}/>
                ))}
            </div>
        </section>
     );
}
 
export default Menu;