import React from 'react'
import Title from '../Title/Title';
import './ContactForm.css'

function ContactForm() {

    const inputs = document.querySelectorAll(".input");

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


    return (
        <div className='contact__item'>
            {/* <Title>Zapraszamy do kontaktu z nami!</Title> */}
            <div className="contact__container">
                <span className="contact__big-circle"></span>
                <img src="img/shape.png" className="contact__square" alt="" />
                <div className="contact__wrapper">
                    <div className="contact__info">
                        <div className="info">
                            <h3 className="title">Napisz do nas!</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label for="">Imie i nazwisko</label>
                                <span>Imie i nazwisko</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label for="">Telefon</label>
                                <span>Telefon</span>
                            </div>
                        </div>

                        <div className="social__media">
                            <p>Dołącz do naszej społeczności</p>
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

                    <div className="contact__form">
                        <span className="circle one"></span>
                        <span className="circle two"></span>

                        <form action="index.html" autocomplete="off">
                            <h3 className="title">Napisz do nas!</h3>
                            <div className="input-container">
                                <input type="text" name="name" className="input" />
                                <label for="">Imie i nazwisko</label>
                                <span>Imie i nazwisko</span>
                            </div>
                            <div className="input-container">
                                <input type="email" name="email" className="input" />
                                <label for="">Email</label>
                                <span>Email</span>
                            </div>
                            <div className="input-container">
                                <input type="tel" name="phone" className="input" />
                                <label for="">Telefon</label>
                                <span>Telefon</span>
                            </div>
                            <div className="input__container textarea">
                                <textarea name="message" className="input"></textarea>
                                <label for="">Wiadomość</label>
                                <span>Wiadomość</span>
                            </div>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default ContactForm
