(function (window) {
  window['env'] = window['env'] || {};

  // Environment variables
  window['env']['BACKEND_SERVICE_URL'] = '${BACKEND_SERVICE_URL}';
  window['env']['URL_SERVICE_GET_IP'] = '${URL_SERVICE_GET_IP}';
  window['env']['CARDNET_SERVICE_URL'] = '${CARDNET_SERVICE_URL}';
  window['env']['AUTHORITY_ACCESS_URL'] = '${AUTHORITY_ACCESS_URL}';
  window['env']['AUTHORITY_REDIRECT_URL'] = '${AUTHORITY_REDIRECT_URL}';
  window['env']['AUTHORITY_LOGOUT_URL'] = '${AUTHORITY_LOGOUT_URL}';
  window['env']['AUTHORITY_CLIENT_ID'] = '${AUTHORITY_CLIENT_ID}';
  window['env']['AUTHORITY_SCOPE'] = '${AUTHORITY_SCOPE}';
})(this);
