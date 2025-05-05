import styles from './form.module.scss'


const form = () => {
  return (
    <div className={styles.form}>
      <h2>Tell us about your <br />amazing project</h2>
      <input type="text" name="" id="" placeholder='NAME' />
      <label>
        <input type="email" placeholder='EMAIL' />
        <input type="text" placeholder='PHONE' />
      </label>
      <input className={styles.form__message} type="text" placeholder='MESSAGE' />
      <label className={styles.checkbox}><input type="checkbox" />I agree to the Privacy Policy</label>
      <button className={styles.form__btn}>Get a free consultation</button>
    </div>
  )
}

export default form
