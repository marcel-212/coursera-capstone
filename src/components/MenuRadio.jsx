const MenuRadio = ({list, current, setCurrent}) => {
    return ( 
        <div className="radio-list">
            {list.map((item) => (
                <div className="radio" key={item}>
                    <input 
                        type="radio"
                        name="MenuRadio"
                        id={`${item}-radio`} 
                        checked={item == current}
                        value={item} 
                        onChange={(e) => setCurrent(e.target.value)}/>
                    <label htmlFor={`${item}-radio`}>{item}</label>
                </div>
            ))}
        </div>
     );
}
 
export default MenuRadio;