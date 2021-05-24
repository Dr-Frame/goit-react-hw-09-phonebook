import React from 'react';
import './Advantages.scss';
import { GrTechnology } from 'react-icons/gr';
import { VscPaintcan } from 'react-icons/vsc';
import { GiEgyptianWalk } from 'react-icons/gi';
import { BsClipboardData } from 'react-icons/bs';
import { FaStackOverflow } from 'react-icons/fa';

const Advantages = () => {
  return (
    <section className="Advantages">
      <div className="container">
        <h2 className="Advantages-title">Our advantages</h2>
        <ul className="Advantages__list">
          <li className="Advantages__item">
            <div className="Advantages__item__icon-wrapper">
              <VscPaintcan className="Advantages__item-icon" />
            </div>

            <h3 className="Advantages__item-title">Looks great</h3>
            <p className="Advantages__item__text">
              Beautifully crafted and optimized for mobile devices. Impress your
              visitors.
            </p>
          </li>
          <li className="Advantages__item">
            <div className="Advantages__item__icon-wrapper">
              <GrTechnology className="Advantages__item-icon" />
            </div>

            <h3 className="Advantages__item-title">Best tech</h3>
            <p className="Advantages__item__text">
              We invest in the best technology for optimal speed, security and
              reliability..
            </p>
          </li>
          <li className="Advantages__item">
            <div className="Advantages__item__icon-wrapper">
              <FaStackOverflow className="Advantages__item-icon" />
            </div>

            <h3 className="Advantages__item-title">Simple</h3>
            <p className="Advantages__item__text">
              A great user interface with all the information you need. Edit
              your listings easily.
            </p>
          </li>
          <li className="Advantages__item">
            <div className="Advantages__item__icon-wrapper">
              <GiEgyptianWalk className="Advantages__item-icon" />
            </div>

            <h3 className="Advantages__item-title">On the go</h3>
            <p className="Advantages__item__text">
              Access your account anywhere, on any device and keep track of your
              listings.
            </p>
          </li>
          <li className="Advantages__item">
            <div className="Advantages__item__icon-wrapper">
              <BsClipboardData className="Advantages__item-icon" />
            </div>

            <h3 className="Advantages__item-title">Data</h3>
            <p className="Advantages__item__text">
              View your visitor numbers per listing or in total. Measure the
              response to a share.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
