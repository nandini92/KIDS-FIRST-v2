import PropTypes from 'prop-types';

import React from 'react';
import { Form, Image } from 'react-bootstrap';

import styles from './Parent.module.css';

import useFormContext from '../../hooks/useFormContext';

import fatherSon from '../../media/father-and-son-sholders.png';

const Parent = () => {
  const { data, handleChange } = useFormContext();
  //eslint-disable-next-line
  console.log(data);

  return (
    <div className={styles.container}>
      <div className={styles.inputForm}>
        <Form.Label htmlFor='parentFirstName'>First name:</Form.Label>
        <Form.Control
          className='mb-3'
          type='text'
          id='parentFirstName'
          name='parentFirstName'
          placeholder='First name'
          autoComplete='First Name'
          aria-label='first name'
          aria-required='true'
          value={data.parentFirstName}
          onChange={handleChange}
        />
        <Form.Label htmlFor='parentLastName'>Last name:</Form.Label>
        <Form.Control
          className='mb-3'
          type='text'
          id='parentLastName'
          name='parentLastName'
          placeholder='Last name'
          autoComplete='Last Name'
          aria-label='last name'
          aria-required='true'
          value={data.parentLastName}
          onChange={handleChange}
        />
      </div>
      <Image src={fatherSon} alt='parent' />
    </div>
  );
};

Parent.propTypes = {
  firstName: PropTypes.string,
  onChange: PropTypes.func,
};
export default Parent;
