import React from 'react';
import './Style.css';
import TopCart from './TopCart';

const TopCate = () => {
  return (
    <>
      <section className="  TopCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <i className="fa-solid fa-border-all"></i>
              <h2>Top Categorias</h2>
            </div>
            <div className="heading-right row ">
              <span>Ver todos</span>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
