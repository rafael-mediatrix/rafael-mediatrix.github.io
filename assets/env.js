;
(function(window) {
    window['env'] = window['env'] || {}

    // Environment variables
    window['env']['BACKEND_SERVICE_URL'] = 'https://localhost:5001/api'
    window['env']['URL_SERVICE_GET_IP'] =
        'https://api.ipify.org?format=jsonp&callback=getIP'
    window['env']['CARDNET_SERVICE_URL'] = 'https://lab.cardnet.com.do/authorize'
    window['env']['AUTHORITY_ACCESS_URL'] =
        'https://authsvc-staging.azurewebsites.net/auth'
    window['env']['AUTHORITY_REDIRECT_URL'] = 'http://localhost:4200'
    window['env']['AUTHORITY_LOGOUT_URL'] = 'http://localhost:4200'
    window['env']['AUTHORITY_CLIENT_ID'] = 'portal-dashboard'
    window['env']['AUTHORITY_SCOPE'] = 'openid offline_access profile'
})(this)
