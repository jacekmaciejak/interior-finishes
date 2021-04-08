import React from 'react'
import './AboutCompany.css'
import owner from '../../assets/images/owner.jpg'

function AboutCompany() {
    return (
        <div className='content__container'>

            <section className="content__block">
                <img src={owner} alt="Owner" />
                <section className="content__description">
                    <h1>Witajcie na naszej stronie</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt eligendi animi tempora ut adipisci voluptatum debitis quo omnis asperiores molestiae incidunt quod suscipit aliquam nemo illo, perferendis sit minima quos consectetur odit quas repellat officiis quaerat. Id sapiente accusamus tenetur laboriosam asperiores non, molestiae vitae pariatur ab officia nobis facere voluptatum! Commodi reiciendis accusamus sequi fugiat, praesentium sunt, placeat et libero vitae quae sit modi cumque illo corporis dignissimos tempore aspernatur autem non. Nobis similique quas suscipit placeat, obcaecati esse cum facilis excepturi reiciendis? Eos temporibus labore ad eum deserunt, repellat libero eveniet optio. Nesciunt qui ipsam nisi quas voluptates?</p>
                </section>


            </section>
        </div>
    )
}

export default AboutCompany
