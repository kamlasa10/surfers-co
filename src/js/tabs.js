const $ = require('jquery');
module.exports = function (current) {
  function bindTabs (triggerSelector, contentSelector, activeSelector) {
    const content =  current.find(contentSelector);
    const trigger = current.find(triggerSelector);
    const child = content.children();
    const active = activeSelector;

    trigger.each((i, item) => {
      $(item).on('click', (e) => {
        e.preventDefault();
        hideTabs();
        showTabs(i);
      })
    });

    const hideTabs = () => {
      trigger.each((i, item) => {
        item.classList.remove(active);
      });

      child.each((i, item) => {
        item.style.display = 'none';
      })
    };

    const showTabs = (i) => {
      trigger[i].classList.add(active);
      child[i].style.display = 'block';
    };

    hideTabs();
    showTabs(0)
  };
  bindTabs('.boards__tab', '.boards__tabs-content', 'boards__tab--active');
};