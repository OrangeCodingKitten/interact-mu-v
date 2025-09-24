// i18n.js
export function applyLocale(wordsObj, userLang = document.documentElement.lang) {
  const norm = (s) => (s || "").toLowerCase();
  const base = norm(userLang);
  const candidates = [base, norm(base.split("-")[0]), "en", Object.keys(wordsObj)[0]];

  // Находим первый доступный ключ языка в словаре
  const langKey = candidates.find((k) => k && wordsObj[k]) || Object.keys(wordsObj)[0];
  const dict = wordsObj[langKey] || {};

  // Пробегаемся по ключам словаря: ключ == id элемента
  for (const [id, html] of Object.entries(dict)) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
    // Если элемента нет — тихо пропускаем; по желанию можно логировать в dev-режиме
  }

  // Обновим lang на фактически применённый
  document.documentElement.lang = langKey;
}
