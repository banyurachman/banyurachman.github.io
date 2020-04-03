(function (i, s, o, g, r, a, m) {
i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
    (i[r].q = i[r].q || []).push(arguments)
}, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-162602109-1', 'auto');
ga('send', 'pageview');

jQuery(document).ready(function ($) {
    var sendEvent = function (category, action, label) {
        ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label
        });
    }

    var sendEventTest = function (category, action, label) {
        alert(category + " " + action + " " + label);
    }

    //DOWNLOAD BUTTON
    $('a.socmedLink .linkedin').click(function () {
        sendEvent('socmed_linkedin', 'click', 'Click the social media icons');
    });
    
    $('a.socmedLink .twitter').click(function () {
        sendEvent('socmed_twitter', 'click', 'Click the social media icons');
    });
    
    $('a.socmedLink .instagram').click(function () {
        sendEvent('socmed_instagram', 'click', 'Click the social media icons');
    });
    
    $('a.socmedLink .wordpress').click(function () {
        sendEvent('socmed_wordpress', 'click', 'Click the social media icons');
    });
    
    $('a.socmedLink .youtube').click(function () {
        sendEvent('socmed_youtube', 'click', 'Click the social media icons');
    });
    
    $('a.socmedLink .behance').click(function () {
        sendEvent('socmed_behance', 'click', 'Click the social media icons');
    });
    
    $('a.socmedLink .dribbble').click(function () {
        sendEvent('socmed_dribbble', 'click', 'Click the social media icons');
    });
    
    $('a.socmedLink .github').click(function () {
        sendEvent('socmed_github', 'click', 'Click the social media icons');
    });
    
    $('#mainSegment img').click(function () {
        sendEvent('avatar', 'click', 'Click the avatar in the main segment');
    });
    
    $('#mainSegment p a').click(function () {
        sendEvent('email', 'click', 'Click the email in the main segment');
    });
    
    $('#secondSegment img:first-child').click(function () {
        sendEvent('gemastik_youtube', 'click', 'Click the gemastik pic in the second segment');
    });
   
    $('#secondSegment img:last-child').click(function () {
        sendEvent('jamming_youtube', 'click', 'Click the macbook pic in the second segment');
    });
    
});