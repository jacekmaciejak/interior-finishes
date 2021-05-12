import React from 'react'
import Button from '../Button/Button';
import './ContactForm.css'

const ContactForm = () => {

    const inputs = document.querySelectorAll(".form__input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");

    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value === "") {
            parent.classList.remove("focus");
        }

    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });

    // const xxx = () => {
    //     return (inputs.forEach((input) => {
    //         input.addEventListener("focus", focusFunc);
    //         input.addEventListener("blur", blurFunc);
    //     }))


    // }


    return (
        <div className='contact__item'>
            <div className="contact__container">
                <div className="contact__form">
                    <form className='contact__wrapper' action="index.html" autocomplete="off">
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
                            <Button buttonStyle='btn--center'>Wyślij</Button>
                        </div>


                    </form>
                </div>
            </div>
        </div>


    )
}

export default ContactForm
