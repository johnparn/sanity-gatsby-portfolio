export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6129da27db24b0bbd6075fb3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ezhbw67n',
                  apiId: 'b1700147-0483-4bd1-99ed-19f49dcc3a2b'
                },
                {
                  buildHookId: '6129da276a2c90d20991e8fd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-549e2c9o',
                  apiId: '76bca2be-f47f-4f75-bfd0-eff4627a3f2e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johnparn/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-549e2c9o.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
