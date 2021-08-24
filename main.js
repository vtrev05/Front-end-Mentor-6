'use strict';

const iconShare = document.querySelector('.iconShare');
const socialMediaIcons = document.querySelector('.socialMediaIcons')

function newDiv() {
    socialMediaIcons.innerHTML = '<div class="iconsStyles"><h1 class="share">SHARE</h1><img src="./assets/images/icon-facebook.svg" alt="facebookLink" class="facebook"><img src="./assets/images/icon-twitter.svg" alt="twitterLink" class="twitter"><img src="./assets/images/icon-pinterest.svg" alt="pinterestLink" class="pinterest"><img src="./assets/images/icon-share.svg" alt="icon-share" class="newIconShare"></div>'
}

iconShare.addEventListener('click', newDiv)