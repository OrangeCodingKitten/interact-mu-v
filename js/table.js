// Функция получения номера стола из URL
  function getTableNumber() {
    const url = new URL(window.location.href);
    const tableParam = url.searchParams.get("table");
    return tableParam ? Number(tableParam) : null;
  }

  const tableNumber = getTableNumber();

  if (tableNumber) {
    // Находим все ссылки внутри блока .main__links
    const links = document.querySelectorAll('.main__links a');

    links.forEach(link => {
      const url = new URL(link.getAttribute('href'), window.location.origin);
      // Добавляем параметр table в ссылку
      url.searchParams.set('table', tableNumber);
      // Обновляем href у ссылки
      link.setAttribute('href', url.pathname + url.search);
    });
  }