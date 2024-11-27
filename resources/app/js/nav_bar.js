document.addEventListener("DOMContentLoaded", function() {
    const createNav = () => {
        let nav = document.querySelector('.navbar');

        nav.innerHTML = `

    <div class="navdiv">
        <div class="logo">
            <img src="../../images/logo.jpg" alt="logo" width="50px" height="50px">
            <a href="../Stationary/homepage.html">Learning Tree</a>
        </div>
        <ul>
            <li><i class="fa-solid fa-house"></i><a href="../Stationary/homepage.html">Home</a></li>
            <li><a href="../Stationary/TermsAndConditions.html">About</a></li>
            <li><i class="fa-solid fa-cart-shopping"></i><a href="../Stationary/cart.html">Cart</a></li>
            <li><i class="fa-solid fa-user"></i><a href="../Stationary/profile.html">Profile</a></li>
            <li><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="../Stationary/signIn.html">Logout</a></li>
        </ul>
    </div>

        `;
    }
    createNav();
});