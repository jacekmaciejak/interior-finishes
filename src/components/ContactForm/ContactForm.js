import React from 'react'
import './ContactForm.css'

function ContactForm() {

    const inputs = document.querySelectorAll(".form__input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
        console.log('Focus');

    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value === "") {
            parent.classList.remove("focus");
        }
        console.log('Blur');

    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });


    return (
        <div className='contact__item'>
            <div className="contact__container">
                {/* <span className="contact__big-circle"></span>
                <img src="img/shape.png" className="contact__square" alt="" /> */}
                <div className="contact__form">
                    <span className="contact__circle one"></span>
                    <span className="contact__circle two"></span>
                    <h2 className="contact__title">Napisz do nas</h2>

                    <form action="index.html" autocomplete="off">
                        <div className="form__items">
                            <div className="input__container">
                                <input type="text" name="name" className="form__input" />
                                <label for="">Imie i nazwisko</label>
                                <span>Imie i nazwisko</span>
                            </div>
                            <div className="input__container">
                                <input type="email" name="email" className="form__input" />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input__container">
                                <input type="tel" name="phone" className="form__input" />
                                <label for="">Telefon</label>
                                <span>Telefon</span>
                            </div>
                            <div className="social__media">
                                <h2 className='contact__title'>Dołącz do naszej społeczności</h2>
                                <div className="social__icons">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="form__message">
                            <div className="input__container textarea">
                                <textarea name="message" className="form__input"></textarea>
                                <label for="">Wiadomość</label>
                                <span>Wiadomość</span>
                            </div>
                            <input type="submit" value="Wyślij" className="form__btn" />
                        </div>


                    </form>
                </div>
            </div>
        </div>


    )
}

export default ContactForm
