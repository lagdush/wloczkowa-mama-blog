require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Włóczkowa Mama',
    description:
      'Strona powstała z zamiłowania do sznurków, włóczek, szydełka oraz makramy. Poświęcona jest moim projektom wykonywanym w 100% ręcznie oraz inspiracjom, z których czerpałam przy tworzeniu rękodzieła. Strona Włóczkowa Mama jest połączeniem pasji z miłością do życia i ludzi.',
    image: './static/image/logo.png',
    siteUrl: process.env.GATSBY_SITE_URL,
    author: 'Łukasz Żurawski',
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: process.env.GATSBY_INSTAGRAM_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `WłóczkowaMama`,
        short_name: `WłóczkowaMama`,
        description: `Blog o z włóczką w tle. Znajdziesz tutaj moje bieżące oraz wcześniejsze prace. Poznasz mój sposób tworzenia oraz oraz moje inspiracje.`,
        lang: 'pl',
        start_url: `/`,
        background_color: `#F8F9FA`,
        theme_color: `#448AFF`,
        display: `standalone`,
        icon: './src/images/gatsby-icon.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.GATSBY_DATOCMS_API_KEY,
        environment: 'main',
        previewMode: false,
        disableLiveReload: false,
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // In your gatsby-transformer-remark plugin array
        plugins: [
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: 'emoji-icon',
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              escapeCharacter: '#', // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
        ],
      },
    },
  ],
};
