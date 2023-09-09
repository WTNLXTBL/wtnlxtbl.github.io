window.onloadTurnstileCallback = function () {
    turnstile.render('#example-container', {
        sitekey: '0x4AAAAAAAJ7s3uvgVPCFYag',
        callback: function(token) {
            console.log(`Challenge Success ${token}`);
        },
    });
};