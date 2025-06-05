import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

function Form({ formData, setFormData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: formData,
  });

  const debounceTimeout = useRef(null);
  const watchedValues = watch();

  // Sync form data from props to form inputs on mount or when formData changes
  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  // Debounced update to formData
  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      setFormData(watchedValues);
    }, 500); // delay in milliseconds
  }, [watchedValues, setFormData]);

  const onSubmit = (data) => {
    setFormData(data);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Your Info</h2>

      <input
        type="text"
        placeholder="Full Name"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <textarea
        placeholder="Short Bio"
        rows="3"
        {...register('bio')}
      />

      <textarea
        placeholder="Skills (comma separated)"
        rows="2"
        {...register('skills')}
      />

      <textarea
        placeholder="Projects (comma separated)"
        rows="3"
        {...register('projects')}
      />

      <input
        type="text"
        placeholder="Contact Info (email, phone, etc.)"
        {...register('contact')}
      />

      <textarea
        placeholder="Experience (comma separated)"
        rows="3"
        {...register('experience')}
      />

      <textarea
        placeholder="Education (comma separated)"
        rows="3"
        {...register('education')}
      />
    </form>
  );
}

export default Form;
