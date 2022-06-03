import React from 'react'


const Products = () => {
  return (
    <section className='features-area pt-100 pb-70'>
        <div className='container'>
            <div className='features-title'>
                <span>Our Products</span>
                <h3>
                    Explore & Find
                </h3>
            </div>
            
            <div className='row'>
                {[...Array(8)].map(( value= undefined, index= Number) => (
                    <>
                    <div  className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="card">
                                <img className="card-img-top" src="/images/placeholder.png" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <button className="default-btn-one">Know More</button>
                                </div>
                            </div>
                        </div>
                    </>
                    ))
                }
            </div>
                {/* <div key={i} class="col-lg-3 col-md-6 col-sm-6 mb-4">
                    <div class="card">
                        <img class="card-img-top" src="/images/placeholder.png" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button class="default-btn-one">Know More</button>
                        </div>
                    </div>
                </div> */}
        </div>
        <div class="features-animation">
            <div class="shape-img1">
                <img src="/images/shape/8.png" alt="image"/>
            </div>
            <div class="shape-img2">
                <img src="/images/shape/5.png" alt="image" />
            </div>
        </div>
    </section>
  )
}

export default Products