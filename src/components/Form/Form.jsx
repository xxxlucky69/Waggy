import './Form.scss';

const Form = () => {
  return (
    <section className="discount">
      <div className="discount__bg">
        <img src="/img/decor.svg" />
        <img src="/img/decor.svg" />
      </div>
      <div className="container">
        <div className="discount__content">
          <h2 className="discount__title">Get <span>20% Off</span> On First Purchase</h2>
          <form className="discount__form">
            <input type="email" placeholder="Your Email Address" />
            <input type="text" placeholder="Your Full Name" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;