const grid = document.getElementById('gridMasonryPG');

const masonry = new Masonry(grid, {
  itemSelector: '.ITEM-PG',
  columnWidth: '.GRID-SIZER-PG',
  gutter: '.GUTTER-SIZER-PG',
  percentPosition: true,
  fitWidth: false
});

window.addEventListener('load', () => {
  masonry.layout();
});