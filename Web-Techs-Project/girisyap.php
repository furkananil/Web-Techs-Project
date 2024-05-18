<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kullanıcı adı ve şifre kontrolü
    if (empty($username) || empty($password)) {
        echo "Kullanıcı adı ve şifre alanları boş bırakılamaz.";
    } elseif (!filter_var($username, FILTER_VALIDATE_EMAIL)) {
        echo "Geçerli bir e-posta adresi girin.";
    } elseif (($username === "b231210063@sakarya.edu.tr" || $username === "B231210063@sakarya.edu.tr") && $password === "furkan123") {
        echo "Hoşgeldiniz $username!";
        // Başarılı giriş durumunda yapılacak işlemleri burada ekleyebilirsiniz.
    } else {
        header("Location: girisyap.html"); // Başarısız giriş durumunda login sayfasına geri yönlendirme
        exit;
    }
}
?>
