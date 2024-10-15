const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'YOUR_USER_POOL_ID',
      userPoolClientId: 'YOUR_USER_POOL_WEB_CLIENT_ID',
      signUpVerificationMethod: 'code',
    },
    oauth: {
      domain: 'YOUR_COGNITO_DOMAIN',
      scope: ['email', 'profile', 'openid'],
      redirectSignIn: 'http://localhost:5173/',
      redirectSignOut: 'http://localhost:5173/',
      responseType: 'code'
    }
  }
};

export default awsConfig;