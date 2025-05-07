import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/github-quickstart-guide/',
    component: ComponentCreator('/github-quickstart-guide/', '9b4'),
    routes: [
      {
        path: '/github-quickstart-guide/',
        component: ComponentCreator('/github-quickstart-guide/', '5b5'),
        routes: [
          {
            path: '/github-quickstart-guide/',
            component: ComponentCreator('/github-quickstart-guide/', 'c55'),
            routes: [
              {
                path: '/github-quickstart-guide/',
                component: ComponentCreator('/github-quickstart-guide/', 'fec'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
