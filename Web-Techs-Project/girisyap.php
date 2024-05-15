<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kullanıcı adı ve şifre kontrolü
    if (($username === "b231210063@sakarya.edu.tr" || $username === "B231210063@sakarya.edu.tr") && $password === "furkan123") {
        echo "Hoşgeldiniz $username!";
        // Başarılı giriş durumunda yapılacak işlemleri burada ekleyebilirsiniz.
    } else {
        header("Location: girisyap.html"); // Başarısız giriş durumunda login sayfasına geri yönlendirme
        exit;
    }
}
?>