import '../css/bootstrap/bootstrap.min.css';
import '../css/bootstrap-icons-1.10.3/bootstrap-icons.css'
import '../css/dhca-base.sass'
import 'sweetalert2/src/sweetalert2.scss'

import React from 'react';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,

    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})