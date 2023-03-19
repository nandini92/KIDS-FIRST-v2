import PropTypes from 'prop-types';

import React from 'react';
import { Form, Image } from 'react-bootstrap';

import styles from './CoParent.module.css';

import useFormContext from '../../hooks/useFormContext';

import coParents from '../../media/co-parents.png';

const CoParent = () => {
  const { data, handleChange } = useFormContext();

  return (
    <div className={styles.container}>
      <div className={styles.inputForm}>
        <Form.Label htmlFor='coParentFirstName'>First name:</Form.Label>
        <Form.Control
          className='mb-3'
          type='text'
          id='coParentFirstName'
          name='coParentFirstName'
          placeholder='First name'
          autoComplete='First Name'
          aria-label='first name'
          aria-required='true'
          autoFocus
          value={data.coParentFirstName}
          onChange={handleChange}
        />
        <Form.Label htmlFor='coParentLastName'>Last name:</Form.Label>
        <Form.Control
          className='mb-3'
          type='text'
          id='coParentLastName'
          name='coParentLastName'
          placeholder='Last name'
          autoComplete='Last Name'
          aria-label='last name'
          aria-required='true'
          value={data.coParentLastName}
          onChange={handleChange}
        />
        <Form.Label htmlFor='coParentEmail'>Email Address:</Form.Label>
        <Form.Control
          className='mb-3'
          type='text'
          id='coParentEmail'
          name='coParentEmail'
          placeholder='name@email.com'
          autoComplete='email'
          aria-label='email'
          value={data.coParentEmail}
          onChange={handleChange}
        />
        <Form.Check
          className={styles.coParentCheckbox}
          type='checkbox'
          checked={data.coParentInviteLater}
          id='coParentInviteLater'
          name='coParentInviteLater'
          label='Skip this step and invite co-parent later'
          onChange={handleChange}
        />
      </div>
      <Image src={coParents} alt='parent' />
    </div>
  );
};

CoParent.propTypes = {
  data: PropTypes.shape({
    parentFirstName: PropTypes.string.isRequired,
    parentLastName: PropTypes.string.isRequired,
  }),
  handleChange: PropTypes.func,
};

export default CoParent;
