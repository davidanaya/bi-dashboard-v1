export const CONFIG_MOCK = {
  pages: [
    {
      title: 'Performance',
      id: 'performance',
      link: '/performance',
      order: 1,
      type: 'section',
      parent: 'home'
    },
    {
      title: 'EDP',
      id: 'edp',
      link: '/edp',
      order: 2,
      type: 'section',
      parent: 'home'
    },
    {
      title: 'Executive Dashboard',
      link: '/performance/executive-dashboard',
      id: 'performance/executive-dashboard',
      order: 1,
      type: 'dashboard',
      layout: 'column',
      parent: 'performance',
      widgets: ['bar']
    },
    {
      title: 'Overview Dashboard',
      link: '/performance/overview-dashboard',
      id: 'performance/overview-dashboard',
      order: 2,
      type: 'dashboard',
      layout: 'column',
      parent: 'performance',
      widgets: ['doughnut']
    },
    {
      title: 'Executive Dashboard',
      link: '/edp/executive-dashboard',
      id: 'edp/executive-dashboard',
      order: 1,
      type: 'dashboard',
      layout: 'column',
      parent: 'edp',
      widgets: ['bar', 'doughnut']
    },
    {
      title: 'Overview Dashboard',
      link: '/edp/overview-dashboard',
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
    doughnut: {}
  }
};
