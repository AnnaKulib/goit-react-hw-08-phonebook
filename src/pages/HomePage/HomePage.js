import phonebook from './phonebook.jpg';
import s from './HomePage.module.css';

function HomePage() {
  const phoneBookBackground = phonebook;
  return (
    <>
      <h3 className={s.title}>Welcome to your phone book!</h3>
      <img className={s.img} src={phoneBookBackground} alt="phoneBook" />
      <p className={s.text}>Please login or register</p>
    </>
  );
}

export default HomePage;
