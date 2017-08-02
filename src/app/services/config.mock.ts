export const CONFIG_MOCK = {
  pages: [
    {
      title: 'Performance',
      id: 'performance',
      link: '/bi/performance',
      order: 1,
      type: 'section',
      parent: 'home'
    },
    {
      title: 'EDP',
      id: 'edp',
      link: '/bi/edp',
      order: 2,
      type: 'section',
      parent: 'home'
    },
    {
      title: 'Executive Dashboard',
      link: '/bi/performance/executive-dashboard',
      id: 'performance/executive-dashboard',
      order: 1,
      type: 'dashboard',
      layout: 'column',
      parent: 'performance',
      widgets: ['bar', 'tiles', 'table']
    },
    {
      title: 'Overview Dashboard',
      link: '/bi/performance/overview-dashboard',
      id: 'performance/overview-dashboard',
      order: 2,
      type: 'dashboard',
      layout: 'column',
      parent: 'performance',
      widgets: ['doughnut', 'table']
    },
    {
      title: 'Executive Dashboard',
      link: '/bi/edp/executive-dashboard',
      id: 'edp/executive-dashboard',
      order: 1,
      type: 'dashboard',
      layout: 'column',
      parent: 'edp',
      widgets: ['bar', 'doughnut']
    },
    {
      title: 'Overview Dashboard',
      link: '/bi/edp/overview-dashboard',
      id: 'edp/overview-dashboard',
      order: 2,
      type: 'dashboard',
      layout: 'column',
      parent: 'edp',
      widgets: ['doughnut', 'bar']
    }
  ],
  widgets: {
    bars: {},
    doughnut: {},
    tiles: {},
    table: {}
  }
};
