'use strict';
const trigger = document.getElementById('trigger');
const image = document.getElementById('target');

const originalSrc = image.src;

trigger.addEventListener('mouseover', () => {
    image.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', () => {
    image.src = originalSrc;
});

