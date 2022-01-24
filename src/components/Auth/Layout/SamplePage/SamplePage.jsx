import c from './SamplePage.module.scss'
import {NavLink} from "react-router-dom";

export const SamplePage = ({children, menu, onClick, currentPage}) => {
  return (
    <section className={c.sample}>
      <div className={c.content}>
        {children}
      </div>
      <aside>
        <div className={c.menu}>
          {
            onClick ?
              menu.map(d => <span className={(d === currentPage) ? c.active : ''} key={d}
                                  onClick={() => onClick(d)}>{d}</span>)
              : menu.map(d => <NavLink className={({isActive}) => (isActive) ? c.active : ''} to={d.id.toString()}
                                       key={d.id}>{d.text}</NavLink>)
          }
        </div>
      </aside>
    </section>
  )
};
