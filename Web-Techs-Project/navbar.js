document.addEventListener("DOMContentLoaded", function () {
    var navbar = `
    <nav class="navbar fixed-top navbar-expand-lg" style="background-color: black;">
    <div class="container-fluid">
        <a class="navbar-brand" href="hakkinda.html"> <img src="resimler/home.png" width="30" height="30"
                class="d-inline-block align-text-top">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav me-auto">
                <a class="nav-link active ms-3" href="hakkinda.html" style="color: rgb(255, 255, 207);"><B>HAKKINDA</B></a>
                <a class="nav-link active ms-3" href="ozgecmis.html" style="color: rgb(255, 255, 207);"><B>ÖZGEÇMİŞ</B></a>
                <a class="nav-link active ms-3" href="#" style="color: rgb(255, 255, 207);"><B>İLGİ ALANLARIM</B></a>
                <a class="nav-link active ms-3" href="sehrim.html" style="color: rgb(255, 255, 207);"><B>ŞEHRİM</B></a>
                <a class="nav-link active ms-3" href="#" style="color: rgb(255, 255, 207);"><B>MİRASIMIZ</B></a>
            </div>
            <div class="navbar-nav">
                <a class="nav-link active" href="iletisim.html" style="color: rgb(255, 255, 207);"><B>İLETİŞİM</B></a>
            </div>
            <div class="navbar-nav ms-4 mx-5">
                <a class="nav-link active " href="#" style="color: rgb(255, 255, 207);"><B>GİRİŞ YAP</B></a>
            </div>
        </div>
    </div>
</nav>
    `;
    var navbar2 = `
        <nav class="navbar" style="background-color: #0a152f;">
            <div class="container-fluid">
                <p style="color: #fff;">Copyright © | All Rights Reserved for Furkan Anıl Özdemir | 2024 <img src="resimler/mail.png" width="25px" height="25px"> furkananil960@gmail.com 
                <img src="resimler/telephone.png" width="25px" height="25px"> 0 552 261 94 20  </p>
            </div>
        </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbar;
    document.getElementById("navbar-container2").innerHTML = navbar2;
});

document.addEventListener("DOMContentLoaded")