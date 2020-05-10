export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eb7d5e155780e705801a21d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fbbbut63',
                  apiId: 'c17ae8c2-9e9d-4a7d-afa2-424375e5e28f'
                },
                {
                  buildHookId: '5eb7d5e19b134976ab2926ae',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-392crz7p',
                  apiId: '0b8dcf5f-7077-42c2-80be-5ce60fc1b358'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sudeepcv/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-392crz7p.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
