/*
-- Practice Traversing the DOM --

firstElementChild = returns the first child eleemnt

nextElementSibling = returns the next element child

lastElementChild = returns the last element child

lastElementChild.previousElementSibling (goes one back from the last)

parentNode = returns to the parent element

all of these can be chained e.g. to return two steps up, go element.parentNode.parentNode;

 */

// STARTING POINT
const list = document.querySelector('.list');

// 1: Store the first child of the `ul` in the variable `firstItem`
const firstItem = list.firstElementChild;
firstItem.style.backgroundColor = '#04c5e6';

// 2: Using traversal, store the second list item in a variable named `nextItem`
const nextItem = firstItem.nextElementSibling;
// const nextItem = list.children[1]; also works
nextItem.style.backgroundColor = '#b7c7d0';

// 3: Store the last child of the `ul` in a variable named `lastItem`
const lastItem = list.lastElementChild;
lastItem.style.backgroundColor = '#57d6ab';

// 4: Using traversal, store the second-to-last list item in a variable named `prevItem`
const prevItem = lastItem.previousElementSibling;
prevItem.style.backgroundColor = '#f36f49';

// 5: Store the nested div in a variable named `banner`
// previousElementSibling not parentNode because the two elements are on the same line in the hierarchy
const banner = list.previousElementSibling;
banner.className = 'banner';

// 6: Using traversal, store the wrapper div in a variable named `wrapper`
const wrapper = list.parentNode;
// const wrapper = banner.parentNode; also works because list and the nsted div (banner)
// are siblings and share the same parent. So the parentNode of either one of them
// is the "wrapper" div
wrapper.style.backgroundColor = '#fcfcfc';

// 7: Using traversal, store the body in a variable named `body`
const body = wrapper.parentNode;
body.style.backgroundColor = '#f8fdf3';
