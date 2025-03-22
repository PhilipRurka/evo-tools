Object.entries(localStorage).forEach(([key, value]) => {
  if (key === 'VOILA.ACTIVE_GROUP_ID') {
    console.log(
      `%cGroup Id: %c${value.replaceAll('"', '')}`,
      'font-weight: bold; font-size: 20px',
      'color: #bada55; font-size: 20px',
    );
  } else if (key === 'VOILA.AUTH_TOKENS') {
    const formatedValue = value
      .replaceAll('{"accessToken":"', '')
      .split('","refreshToken":"')[0];

    console.log(
      `%cAccess Token: %c${formatedValue}`,
      'font-weight: bold; font-size: 20px',
      'color: #bada55; font-size: 20px',
    );
  }
});
