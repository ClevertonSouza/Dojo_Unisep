import App from './app';

App.listen(process.env.PORT || 3331, () => {
  console.log('Server is up!');
});
