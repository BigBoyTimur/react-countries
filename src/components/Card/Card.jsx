import './card.sass'
import {useEffect} from "react";

function Card({img, name, info = [], onClick}) {
  return (
    <article className='card' onClick={onClick}>
      <img src={img} alt="" className="card__image"/>
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <ul className="card__list">
          {info.map(c => (
            <li className="card__list-item" key={c.title}>
              <b>{c.title}:</b> {c.description}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default Card;