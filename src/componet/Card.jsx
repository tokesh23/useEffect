import './Card.css'
function Card({ images, price, title, description }) {
    return (
    
            <div className='div1'>
                <div className='imgdiv'>
                <img src={images} alt="" className='img' />
                </div>
                <div className='bottomdiv'>
                <p className='title'>{title}</p>
                <p className='price'>${price}</p>
                <p className='description'>{description}</p>
                </div>
            </div>
        
        
    )
}
export default Card
