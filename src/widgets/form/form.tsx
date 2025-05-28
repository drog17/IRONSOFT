// Form.tsx
import { useState } from 'react';
import axios from 'axios';
import styles from './form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setFieldValue, startSubmit, submitSuccess, submitFailure } from './formSlice';
import { RootState } from '../../store';

const Form = () => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    dispatch(setFieldValue({
      field: name as keyof typeof formState,
      value: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(startSubmit());

    try {
      const response = await axios.post('http://localhost:3001/contacts', {
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        message: formState.message,
        agreed: formState.agreed,
        id: Date.now(),
      });

      if (response.status === 201) {
        dispatch(submitSuccess());
      }
    } catch (error) {
      dispatch(submitFailure('Something went wrong. Please try again later.'));
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.form}>
      <h2>Tell us about your <br />amazing project</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={formState.name}
          onChange={handleChange}
          required
        />
        
        <label>
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="PHONE"
            value={formState.phone}
            onChange={handleChange}
          />
        </label>
        
        <input
          className={styles.form__message}
          type="text"
          name="message"
          placeholder="MESSAGE"
          value={formState.message}
          onChange={handleChange}
        />
        
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="agreed"
            checked={formState.agreed}
            onChange={handleChange}
            required
          />
          I agree to the Privacy Policy
        </label>
        
        <button 
          className={styles.form__btn} 
          type="submit"
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? 'Sending...' : 'Get a free consultation'}
        </button>
        
        {formState.submitStatus && <p>{formState.submitStatus}</p>}
      </form>
    </div>
  );
};

export default Form;