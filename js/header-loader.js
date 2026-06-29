const loadHeader = async () => {
  try {
    const response = await fetch('header.html');
    if (!response.ok) {
      throw new Error(`Failed to load header: ${response.status}`);
    }
    const html = await response.text();
    document.getElementById('site-header').innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

window.addEventListener('DOMContentLoaded', loadHeader);
