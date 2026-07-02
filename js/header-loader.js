const loadIncludes = async () => {
  const includeElements = Array.from(document.querySelectorAll('[data-include]'));

  await Promise.all(includeElements.map(async (element) => {
    try {
      const url = element.getAttribute('data-include');
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load include: ${url} (${response.status})`);
      }
      const html = await response.text();
      element.innerHTML = html;
      element.removeAttribute('data-include');
    } catch (error) {
      console.error(error);
    }
  }));

  if (document.querySelector('[data-include]')) {
    await loadIncludes();
  }
};

window.addEventListener('DOMContentLoaded', loadIncludes);
