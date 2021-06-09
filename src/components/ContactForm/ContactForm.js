import React from 'react'
import Button from '../Button/Button';
import './ContactForm.css'

const ContactForm = () => {

    // const inputs = document.querySelectorAll(".form__input");

    // function focusFunc() {
    //     let parent = this.parentNode;
    //     parent.classList.add("focus");

    // }

    // function blurFunc() {
    //     let parent = this.parentNode;
    //     if (this.value === "") {
    //         parent.classList.remove("focus");
    //     }

    // }

    // inputs.forEach((input) => {
    //     input.addEventListener("focus", focusFunc);
    //     input.addEventListener("blur", blurFunc);
    // });


    return (
        <section className='contact__container'>
            <form>
                <h2>zapraszamy do kontaktu</h2>
                <div className="inputBox">
                    <input type="text" name='' required='required' />
                    <span>imie i nazwisko</span>
                </div>
                <div className="inputBox">
                    <input type="text" name='' required='required' />
                    <span>email</span>
                </div>
                <div className="inputBox">
                    <textarea cols="30" rows="10" required='required'></textarea>
                    <span>napisz wiadomosc</span>
                </div>
                <div className="inputBox">
                    <input type="submit" value='Wyślij' />
                </div>
            </form>
        </section>


    )
}

export default ContactForm
