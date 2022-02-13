import { useState, useEffect } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function Tabs({props}){
    const [isHidden, setIsHidden] = useState(true);
    const{name,items,date,title} = props;
return (<div className='tab'>
    {isHidden?<div><section className='brief'>
        <h4 className='label'>{name}</h4>
        <button className='btn' onClick={() => setIsHidden(false)}><AiOutlineMinus/></button>
        </section>
        <p>
        <h5>{title}</h5>
        <h5>{date}</h5>
        </p>
        <div>
            <ul>
                {
                    items.map((item)=>{console.log(item);return <li>{item}</li>})
                }
            </ul>
        </div>
        </div>
     : <section className='brief'>
        <h4 className='label'>{name}</h4>
        <button className='btn' onClick={(id) => setIsHidden(true)}><AiOutlinePlus/></button>
    </section>}   
</div>)
}
export default Tabs