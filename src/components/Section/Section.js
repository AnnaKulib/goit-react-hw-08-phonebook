import React from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => (
  <section className={s.section}>{children}</section>
);

Section.propType = {
  children: PropTypes.object.isRequired,
};

export default Section;
