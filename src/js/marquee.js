document.addEventListener("DOMContentLoaded", () => {
    function addAnimationDelay() {
  
      const wrappers = document.querySelectorAll('.marquee-wrapper');
      wrappers.forEach(wrapper => {
        const elements = Array.from(wrapper.children);
        const totalElements = elements.length;
        const computedStyles = window.getComputedStyle(wrapper);
        const marqueeDuration = computedStyles.getPropertyValue('--marquee-duration');
  
        elements.forEach((element, index) => {
          const n = index + 1;
          const animationDelay = `calc(${marqueeDuration} / ${totalElements} * (${totalElements} - ${n}) * -1)`;
          element.style.animationDelay = animationDelay;
        });
      });
    }
  
    addAnimationDelay();
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    function setRightProperty() {
      const wrappers = document.querySelectorAll('.marquee-wrapper');
  
      wrappers.forEach(wrapper => {
        const itemRightElements = wrapper.querySelectorAll('.itemRight');
        const totalRightItems = itemRightElements.length;
        const computedStyles = window.getComputedStyle(wrapper);
        const marqueeItemWidth = computedStyles.getPropertyValue('--marquee-item-width');
  
        itemRightElements.forEach((element, index) => {
          element.style.right = `max(calc(${marqueeItemWidth} * ${totalRightItems}), calc(100% + ${marqueeItemWidth}))`
        });
      });
    }
  
    setRightProperty();
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    function setLeftProperty() {
      const wrappers = document.querySelectorAll('.marquee-wrapper');
  
      wrappers.forEach(wrapper => {
        const itemLeftElements = wrapper.querySelectorAll('.itemLeft');
        const totalLeftItems = itemLeftElements.length;
        const computedStyles = window.getComputedStyle(wrapper);
        const marqueeItemWidth = computedStyles.getPropertyValue('--marquee-item-width');
  
        itemLeftElements.forEach((element, index) => {
          element.style.left = `max(calc(${marqueeItemWidth} * ${totalLeftItems}), calc(100% + ${marqueeItemWidth}))`
        });
      });
    }
  
    setLeftProperty();
  });
  
  
  document.addEventListener('DOMContentLoaded', () => {
    // Select all marquee-wrapper elements
    const marqueeWrappers = document.querySelectorAll('.marquee-wrapper');
  
    marqueeWrappers.forEach(wrapper => {
      // Add event listener to the wrapper to handle mouseenter and mouseleave
      wrapper.addEventListener('mouseenter', () => {
        // Pause animation for all child elements
        wrapper.childNodes.forEach(child => {
          if (child.nodeType === Node.ELEMENT_NODE) {
            child.style.animationPlayState = 'paused';
          }
        });
      });
  
      wrapper.addEventListener('mouseleave', () => {
        // Resume animation for all child elements
        wrapper.childNodes.forEach(child => {
          if (child.nodeType === Node.ELEMENT_NODE) {
            child.style.animationPlayState = 'running';
          }
        });
      });
    });
  });
  