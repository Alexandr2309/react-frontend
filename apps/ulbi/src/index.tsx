const module = import('./app').then(module => {
    if (window.fetch === undefined) {
        import('react-app-polyfill/stable.js');
    }

    return module.default;
});

export default module;
