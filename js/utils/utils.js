export function addExpandButton(container) {
  // Accept either element or selector string
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) {
    console.warn('Container element not found');
    return null;
  }

  // Make sure container is positioned relatively for absolute button positioning
  const computedStyle = window.getComputedStyle(container);
  if (computedStyle.position === 'static') {
    container.style.position = 'relative';
  }

  // Create button
  const button = document.createElement('button');
  button.title = 'Toggle fullscreen';

  Object.assign(button.style, {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    zIndex: '10',
    background: 'transparent',
    border: 'none',
    borderRadius: '4px',
    padding: '4px',
    cursor: 'pointer',
  });

    // Add hover effect
  button.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#f00"
      stroke-width="2"
      stroke-linecap="square"
      stroke-linejoin="square"
    >
      <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
      <path d="M16 3h3a2 2 0 0 1 2 2v3"></path>
      <path d="M8 21H5a2 2 0 0 1-2-2v-3"></path>
      <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
    </svg>
  `;

  container.appendChild(button);





  // expand toggle logic
    // expanded boolean to track state
    let expanded = false;

  button.addEventListener('click', () => {
      if (!expanded) {;
          // make the container bigger and position it in the center
        expanded = true;
        container.classList.add('expanded-mode');

      } else {
          // reset the container to its original size and position
        expanded = false;
        container.classList.remove('expanded-mode');

    }
  });
        

  return button;
}

