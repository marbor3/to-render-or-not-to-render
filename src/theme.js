import { themes } from 'mdx-deck'

export default {
    ...themes.default,
    colors: {
        ...themes.default.colors,
        text: '#d6deeb',
        background: '#011627',
        link: '#addb67',
    },
    styles: {
        ...themes.default.styles,
        Slide: {
            padding: '5vw',
        },
    },
};
