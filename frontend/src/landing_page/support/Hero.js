import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5 ' id='supportWrapper'>
                <h4 className='fs-2 '>Support Portal</h4>
                <a href=''>Track ticket</a>  
            </div>  
            <div className='row p-3 m-3'>
                <div className='col-6 p-5'>
                   <h4 className='fs-3 '>Search for an answer or browse help topics to create a ticket</h4>
                   <input placeholder='Eg: How do i open my account, How do i active F&O...'  /> <br/>
                   <a href=''>Track account opening</a>
                   <a href=''>Track segment activation</a>
                   <a href=''>Intraday margins</a>
                   <a href=''>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1>Featured</h1>
                    <ol>
                      <li>
                       <a href=''>Current Takeovers and Delisting - Janu</a>
                      </li>
                      <li>
                       <a href=''>Latest Intraday leverage - MIS & CO</a>
                      </li>
                    </ol>
                </div>  
            </div>         
        </section>
     );
}
export default Hero;