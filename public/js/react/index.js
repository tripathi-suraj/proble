requirejs.config({
  paths: {
    react: 'https://unpkg.com/react@17/umd/react.production.min',
    'react-dom': 'https://unpkg.com/react-dom@17/umd/react-dom.production.min',
  },
});

requirejs(['react', 'react-dom'], function (React, ReactDOM) {
  ReactDOM.render(
    React.createElement('p', {}, 'Hello, AMD!'),
    document.getElementById('root')
  );
});
