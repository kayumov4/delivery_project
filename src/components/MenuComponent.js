import React from 'react'
function MenuComponent ({image, ranking, title, price}) {
  return (
      <div className="menu">
          <div className="menu_container">
        <div className="menu_com">
          <div className="burger">
            <img src={image} alt="" />
            <img src={ranking} alt="" />
            <p>{title}</p>
            <h5>{price}</h5>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
      </div>
      
  )
}

export default MenuComponent