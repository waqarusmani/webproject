import React from "react";

function Slide() {

    return (
        <>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Indicators --> */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="https://img1a.flixcart.com/fk-sp-static/21072015/blue-24744-yepme-8-400x400-imadqtjww8cwpthg.jpeg" alt="Los Angeles" />
                    </div>

                    <div className="item">
                        <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Chicago" />
                    </div>

                    <div className="item">
                        <img src="https://img.freepik.com/premium-vector/realistic-gold-podium-background-with-product_52683-70884.jpg?w=2000" alt="New York" />
                    </div>
                </div>

                {/* <!-- Left and right controls --> */}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}

export default Slide