// ==UserScript==
// @name         Redirect to Website from Alert Page
// @namespace    https://github.com/Moebyte/QQ-Web-Redirect
// @version      1
// @description  Redirect to the website mentioned in the alert page by clicking a button or automatically after a few seconds of page load.
// @match        https://c.pc.qq.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the website URL from the alert page
    const url = document.querySelector('.url').textContent.trim();

    // Check if the URL is valid
    const pattern = /^((http|https):\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/\S*)?$/;
    const isValidUrl = pattern.test(url);

    // If the URL is valid, redirect to it
    if (isValidUrl) {
        const website = /^https?:\/\//i.test(url) ? url : `https://${url}`;
        window.location.href = website;
    }
})();
