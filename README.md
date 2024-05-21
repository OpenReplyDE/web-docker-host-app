# Webdocker Host app Show case

This is a simple web app that show cases a host app leveraging the webdocker framework.

The app uses four modules from web docker registry:

- [global-vue-module](https://github.com/OpenReplyDE/web-docker-global-vue-module)
    This module provides a global vue instance that can be used by other modules.
- [page-module-share-vue](https://github.com/OpenReplyDE/web-docker-page-module-share-vue)
    This module uses the vue instance that is provided by the global vue instance.
- [observed-module](https://github.com/OpenReplyDE/web-docker-observed-module)
    This module is loaded only if a particular selector is present in the host app.
- [page-module](https://github.com/OpenReplyDE/web-docker-page-module)
    This module is loaded at start up.

The app is built on AWS and can it can be accessed [here](https://main.d3pr0yf1396mq9.amplifyapp.com/).
