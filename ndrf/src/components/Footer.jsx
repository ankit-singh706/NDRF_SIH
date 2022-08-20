import React from "react";
import '../assets/footer.css';

const Footer = (props) =>{
    return(
        <>
            <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <p class="about">
                <h3>DECENTRALIZED</h3> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                </p>
                
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div>
                <i class="fa fa-map-marker"></i>
                <p><h3>Contact Number</h3>India</p>
                </div>
                <div>
                <i class="fa fa-phone"></i>
                <p> (+00) 0000 000 000</p>
                </div>
                <div>
                <i class="fa fa-envelope"></i>
                <p><a href="https://ndrf.gov.in/">Official Website</a></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <h2>DUMMY</h2>
                <p class="menu">
                <a href="#"> HOME</a>   |
                <a href="#"> STATISTICS</a> |
                <a href="#"> DONATION</a> |
                <a href="#"> LOGISTICS</a> |
                <a href="#"> ABOUT</a> |
                </p>
            </div>
        </footer>
        </>
    )
}

export default Footer;