function orderWhatsApp(product, price) {
    const phone = '+00000000000';
    const message = `I want to order ${product} (Price: $${price})`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }