document.querySelectorAll('.lava-btn').forEach(button => {
      button.addEventListener('mouseenter', (e) => {
            const lavaEffect = document.querySelector('.lava-effect');
            const buttonRect = e.target.getBoundingClientRect();
            const containerRect = e.target.parentElement.getBoundingClientRect();

            // Set the width and position of the lava-effect based on hovered button
            lavaEffect.style.width = `${buttonRect.width}px`;
            lavaEffect.style.height = `${buttonRect.height}px`;
            lavaEffect.style.left = `${buttonRect.left - containerRect.left}px`;
      });
});
