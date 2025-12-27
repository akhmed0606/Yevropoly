// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav){
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when clicking a link (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Quote form -> opens email client with prefilled info
const form = document.querySelector('#quote-form');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const fields = {
      Name: data.get('name') || '',
      Company: data.get('company') || '',
      Email: data.get('email') || '',
      Phone: data.get('phone') || '',
      Product: data.get('product') || '',
      Quantity: data.get('quantity') || '',
      Specs: data.get('specs') || '',
      Application: data.get('application') || '',
      Message: data.get('message') || '',
    };

    const lines = Object.entries(fields)
      .map(([k,v]) => `${k}: ${String(v).trim()}`)
      .join('\n');

    const subject = encodeURIComponent('Quote Request — Yevro Polycarbonate Supply');
    const body = encodeURIComponent(
      `Hello Yevro Polycarbonate Supply,\n\nPlease quote the following:\n\n${lines}\n\nThank you.`
    );

    // Update this email if needed
    const to = 'akhmed@yevropolycarbonate.ca';
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
