export const regions: string[] = [
  'eu-west',
  'eu-central',
  'sa-east',
  'ap-southeast',
  'us-west',
  'us-east'
];
export const mockData = {
  status: 'success',
  region: 'us-west',
  roles: ['role1', 'role2'],
  results: {
    services: {
      redis: true,
      database: false
    },
    stats: {
      servers_count: 10,
      online: 8,
      session: 5,
      server: {
        active_connections: 100,
        wait_time: 30,
        workers: [
          [
            'worker1',
            {
              wait_time: 10,
              workers: 5,
              waiting: 2,
              idle: 3,
              time_to_return: 5,
              recently_blocked_keys: [],
              top_keys: []
            }
          ]
        ],
        cpu_load: 0.5,
        timers: 5
      }
    }
  },
  strict: true,
  server_issue: null
};
export const apiResponseMockData = {
  status: 'ok',
  region: 'eu-west',
  roles: ['socket'],
  results: {
    services: {
      database: true,
      redis: true
    },
    stats: {
      servers_count: 3,
      online: 6087,
      session: 4,
      server: {
        active_connections: 2532,
        wait_time: 176,
        workers: [
          [
            'requests:pageviews',
            {
              wait_time: 0,
              workers: 0,
              waiting: 0,
              idle: 0,
              time_to_return: 0,
              recently_blocked_keys: [],
              top_keys: []
            }
          ],
          [
            'io',
            {
              wait_time: 176,
              workers: 1406,
              waiting: 2,
              idle: 140,
              time_to_return: 0,
              recently_blocked_keys: [
                ['3FG7RD4yF6', 1, '2024-08-20T10:38:21.587Z']
              ],
              top_keys: [
                ['3FG7RD4yF6', 0.21805111821086262],
                ['Dt8JVgXaGP4HzxjoZuZVuu6F', 0.19169329073482427],
                ['ZrTi2CzEnj', 0.05910543130990415],
                ['k3C7AAdW8o', 0.04233226837060703],
                ['qPYBL4bhqo', 0.08865814696485623]
              ]
            }
          ],
          [
            'requests:unsupported-users',
            {
              wait_time: 0,
              workers: 0,
              waiting: 0,
              idle: 0,
              time_to_return: 0,
              recently_blocked_keys: [],
              top_keys: []
            }
          ],
          [
            'recording-workers',
            {
              wait_time: 0,
              workers: 2,
              waiting: 0,
              idle: 2,
              time_to_return: 0,
              recently_blocked_keys: [],
              top_keys: []
            }
          ]
        ],
        cpu_load: 0.07,
        timers: 100
      }
    }
  },
  strict: false,
  server_issue: null
};
export const mockAllData = [
  {
    status: 'ok',
    region: 'eu-west',
    roles: ['socket'],
    results: {
      services: {
        database: true,
        redis: true
      },
      stats: {
        servers_count: 3,
        online: 6087,
        session: 4,
        server: {
          active_connections: 2532,
          wait_time: 176,
          workers: [
            [
              'requests:pageviews',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'io',
              {
                wait_time: 176,
                workers: 1406,
                waiting: 2,
                idle: 140,
                time_to_return: 0,
                recently_blocked_keys: [
                  ['3FG7RD4yF6', 1, '2024-08-20T10:38:21.587Z']
                ],
                top_keys: [
                  ['3FG7RD4yF6', 0.21805111821086262],
                  ['Dt8JVgXaGP4HzxjoZuZVuu6F', 0.19169329073482427],
                  ['ZrTi2CzEnj', 0.05910543130990415],
                  ['k3C7AAdW8o', 0.04233226837060703],
                  ['qPYBL4bhqo', 0.08865814696485623]
                ]
              }
            ],
            [
              'requests:unsupported-users',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'recording-workers',
              {
                wait_time: 0,
                workers: 2,
                waiting: 0,
                idle: 2,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ]
          ],
          cpu_load: 0.07,
          timers: 100
        }
      }
    },
    strict: false,
    server_issue: null
  },
  {
    status: 'ok',
    region: 'eu-west',
    roles: ['socket'],
    results: {
      services: {
        database: true,
        redis: true
      },
      stats: {
        servers_count: 3,
        online: 6087,
        session: 4,
        server: {
          active_connections: 2532,
          wait_time: 176,
          workers: [
            [
              'requests:pageviews',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'io',
              {
                wait_time: 176,
                workers: 1406,
                waiting: 2,
                idle: 140,
                time_to_return: 0,
                recently_blocked_keys: [
                  ['3FG7RD4yF6', 1, '2024-08-20T10:38:21.587Z']
                ],
                top_keys: [
                  ['3FG7RD4yF6', 0.21805111821086262],
                  ['Dt8JVgXaGP4HzxjoZuZVuu6F', 0.19169329073482427],
                  ['ZrTi2CzEnj', 0.05910543130990415],
                  ['k3C7AAdW8o', 0.04233226837060703],
                  ['qPYBL4bhqo', 0.08865814696485623]
                ]
              }
            ],
            [
              'requests:unsupported-users',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'recording-workers',
              {
                wait_time: 0,
                workers: 2,
                waiting: 0,
                idle: 2,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ]
          ],
          cpu_load: 0.07,
          timers: 100
        }
      }
    },
    strict: false,
    server_issue: null
  },
  {
    status: 'ok',
    region: 'eu-west',
    roles: ['socket'],
    results: {
      services: {
        database: true,
        redis: true
      },
      stats: {
        servers_count: 3,
        online: 6087,
        session: 4,
        server: {
          active_connections: 2532,
          wait_time: 176,
          workers: [
            [
              'requests:pageviews',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'io',
              {
                wait_time: 176,
                workers: 1406,
                waiting: 2,
                idle: 140,
                time_to_return: 0,
                recently_blocked_keys: [
                  ['3FG7RD4yF6', 1, '2024-08-20T10:38:21.587Z']
                ],
                top_keys: [
                  ['3FG7RD4yF6', 0.21805111821086262],
                  ['Dt8JVgXaGP4HzxjoZuZVuu6F', 0.19169329073482427],
                  ['ZrTi2CzEnj', 0.05910543130990415],
                  ['k3C7AAdW8o', 0.04233226837060703],
                  ['qPYBL4bhqo', 0.08865814696485623]
                ]
              }
            ],
            [
              'requests:unsupported-users',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'recording-workers',
              {
                wait_time: 0,
                workers: 2,
                waiting: 0,
                idle: 2,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ]
          ],
          cpu_load: 0.07,
          timers: 100
        }
      }
    },
    strict: false,
    server_issue: null
  },
  {
    status: 'ok',
    region: 'eu-west',
    roles: ['socket'],
    results: {
      services: {
        database: true,
        redis: true
      },
      stats: {
        servers_count: 3,
        online: 6087,
        session: 4,
        server: {
          active_connections: 2532,
          wait_time: 176,
          workers: [
            [
              'requests:pageviews',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'io',
              {
                wait_time: 176,
                workers: 1406,
                waiting: 2,
                idle: 140,
                time_to_return: 0,
                recently_blocked_keys: [
                  ['3FG7RD4yF6', 1, '2024-08-20T10:38:21.587Z']
                ],
                top_keys: [
                  ['3FG7RD4yF6', 0.21805111821086262],
                  ['Dt8JVgXaGP4HzxjoZuZVuu6F', 0.19169329073482427],
                  ['ZrTi2CzEnj', 0.05910543130990415],
                  ['k3C7AAdW8o', 0.04233226837060703],
                  ['qPYBL4bhqo', 0.08865814696485623]
                ]
              }
            ],
            [
              'requests:unsupported-users',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'recording-workers',
              {
                wait_time: 0,
                workers: 2,
                waiting: 0,
                idle: 2,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ]
          ],
          cpu_load: 0.07,
          timers: 100
        }
      }
    },
    strict: false,
    server_issue: null
  },
  {
    status: 'ok',
    region: 'eu-west',
    roles: ['socket'],
    results: {
      services: {
        database: true,
        redis: true
      },
      stats: {
        servers_count: 3,
        online: 6087,
        session: 4,
        server: {
          active_connections: 2532,
          wait_time: 176,
          workers: [
            [
              'requests:pageviews',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'io',
              {
                wait_time: 176,
                workers: 1406,
                waiting: 2,
                idle: 140,
                time_to_return: 0,
                recently_blocked_keys: [
                  ['3FG7RD4yF6', 1, '2024-08-20T10:38:21.587Z']
                ],
                top_keys: [
                  ['3FG7RD4yF6', 0.21805111821086262],
                  ['Dt8JVgXaGP4HzxjoZuZVuu6F', 0.19169329073482427],
                  ['ZrTi2CzEnj', 0.05910543130990415],
                  ['k3C7AAdW8o', 0.04233226837060703],
                  ['qPYBL4bhqo', 0.08865814696485623]
                ]
              }
            ],
            [
              'requests:unsupported-users',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'recording-workers',
              {
                wait_time: 0,
                workers: 2,
                waiting: 0,
                idle: 2,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ]
          ],
          cpu_load: 0.07,
          timers: 100
        }
      }
    },
    strict: false,
    server_issue: null
  },
  {
    status: 'ok',
    region: 'eu-west',
    roles: ['socket'],
    results: {
      services: {
        database: true,
        redis: true
      },
      stats: {
        servers_count: 3,
        online: 6087,
        session: 4,
        server: {
          active_connections: 2532,
          wait_time: 176,
          workers: [
            [
              'requests:pageviews',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'io',
              {
                wait_time: 176,
                workers: 1406,
                waiting: 2,
                idle: 140,
                time_to_return: 0,
                recently_blocked_keys: [
                  ['3FG7RD4yF6', 1, '2024-08-20T10:38:21.587Z']
                ],
                top_keys: [
                  ['3FG7RD4yF6', 0.21805111821086262],
                  ['Dt8JVgXaGP4HzxjoZuZVuu6F', 0.19169329073482427],
                  ['ZrTi2CzEnj', 0.05910543130990415],
                  ['k3C7AAdW8o', 0.04233226837060703],
                  ['qPYBL4bhqo', 0.08865814696485623]
                ]
              }
            ],
            [
              'requests:unsupported-users',
              {
                wait_time: 0,
                workers: 0,
                waiting: 0,
                idle: 0,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ],
            [
              'recording-workers',
              {
                wait_time: 0,
                workers: 2,
                waiting: 0,
                idle: 2,
                time_to_return: 0,
                recently_blocked_keys: [],
                top_keys: []
              }
            ]
          ],
          cpu_load: 0.07,
          timers: 100
        }
      }
    },
    strict: false,
    server_issue: null
  }
];
