module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'background': 'url("/img/background.svg")',
        'bubble': 'url("/img/bubble.svg")',
        'go': 'url("/img/go.svg")',
        'back': 'url("/img/back.svg")',
        'more': 'url("/img/more.svg")',
        'time': 'url("/img/time.svg")',
        'photo': 'url("/img/photo.svg")',
        'send': 'url("/img/send.svg")',
        'close': 'url("/img/close.svg")',
        'settings_copy': 'url("/img/settings_copy.svg")',
        'tick': 'url("/img/tick.svg")',
        'next': 'url("/img/next.svg")',
        'menu': 'url("/img/menu.svg")',
        'search': 'url("/img/search.svg")',
        'alert': 'url("/img/alert.svg")',
        'new': 'url("/img/new.svg")',
        'down': 'url("/img/down.svg")',
        'add': 'url("/img/add.svg")',
        'chat': 'url("/img/chat.svg")',
        'call': 'url("/img/call.svg")',
        'sign_up': 'url("/img/sign_up.jpg")'
      },
      fontFamily: {
        'karla': ['karlaregular', 'sans-serif'],
        'karla-bold': ['karlabold', 'sans-serif'],
        'karla-italic': ['karlaitalic', 'sans-serif'],
        'karla-bold-italic': ['karlabolditalic', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: 'jit'
}
