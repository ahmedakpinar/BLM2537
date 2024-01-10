var cart = []; // Sepetimizi temsil eden bir dizi

    // Sepete ürün eklemek için fonksiyon
    function addToCart(productName, price) {
        cart.push({ productName: productName, price: price }); //Sepetin içerisine ürün ismi ve fiyatı olarak ürünü ekler.
        showCart(); // Sepeti göstermek için gereken fonksiyonu çağırır.
    }

    // Sepeti göstermek için gereken fonksiyon
    function showCart() {
        // Sepet içeriğini göstermek için basit bir alert kullanıyoruz
        var cartContent = "Sepetiniz:\n";

        for (var i = 0; i < cart.length; i++) {
            cartContent += cart[i].productName + " - " + cart[i].price + "₺\n";
        }

        alert(cartContent);
    }
