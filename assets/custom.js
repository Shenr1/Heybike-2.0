function autoResponsive() {
  const width = document.body.clientWidth || window.innerWidth;
  
  if (width < 1025 && width >= 750) {
      const scale = width / 1023;
      const content = 'width=1023, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', viewport-fit=cover';
      const metaViewport = document.querySelector('meta[name="viewport"]');
      if (metaViewport) {
          metaViewport.setAttribute("content", content);
      }
  }
  
  if (width < 460) {
      const scale = width / 460;
      const content = 'width=460, initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', viewport-fit=cover';
      const metaViewport = document.querySelector('meta[name="viewport"]');
      if (metaViewport) {
          metaViewport.setAttribute("content", content);
      }
  }
}
autoResponsive();
document.addEventListener("DOMContentLoaded", function() {
  const tabItems = document.querySelectorAll('.switch_tabs .item-tab');
  const tabContents = document.querySelectorAll('.switch_tabs .item-content');

  tabItems.forEach(tabItem => {
    tabItem.addEventListener('click', function() {
      const tabNumber = this.getAttribute('data-tab');

      tabContents.forEach(tabContent => {
        tabContent.classList.add('tw-hidden');
      });

      const selectedTabContent = document.querySelector(`.switch_tabs .item-content[data-tab="${tabNumber}"]`);
      selectedTabContent.classList.remove('tw-hidden');

      tabItems.forEach(itemTab => {
        itemTab.classList.remove('active');
      });

      this.classList.add('active');
    });
  });

  
});
