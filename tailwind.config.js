module.exports = {
     mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false , // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'hero-pattern': "url('https://designmodo.com/wp-content/uploads/2021/01/2021-web-design-trends-1.jpg')",
         })
      },
    },
    variants: {
      extend: {
       
      },  
    },
    plugins: [],
  }