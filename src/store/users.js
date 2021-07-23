const initialState = [
  {
    firstName: 'Davion',
    lastName: 'Garcia',
    username: 'dgarcia',
    age: '27',
    instrument: 'drummer',
    location: 'Seattle, WA',
    pictures: {
      full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      sml: ''
    },
    hero: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
    friends: [
      {
        firstName: 'John',
        lastName: 'Smitherson',
        username: 'randomuser',
        age: '99',
        instrument: 'drummer',
        location: 'Seattle, WA',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
      {
        firstName: 'Some',
        lastName: 'Person',
        username: 'poopsmcgee',
        age: '99',
        instrument: 'guitar',
        location: 'Somewhere, OV',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
      {
        firstName: 'Jeff',
        lastName: 'Sozeb',
        username: 'loser100',
        age: '99',
        instrument: 'piano',
        location: 'San Diego, CA',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
    ],
    aboutMe: 'THIS IS FROM STATE Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque veniam recusandae perferendis, similique non quaerat. At nulla voluptates nihil tempore necessitatibus harum pariatur tempora maiores laudantium consequatur, maxime sapiente dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet sapiente iure aliquid cum ipsa ipsum libero iusto, quasi ipsam, veniam eveniet incidunt quas repellendus quos, at possimus quo omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi soluta sapiente cumque nemo veritatis. Incidunt praesentium, recusandae veritatis, labore quidem vel cumque possimus ex ea deserunt fugit natus. Illo.',
    playlist: '<iframe src="https://open.spotify.com/embed/playlist/790BYywuCOTEzzXU8YtM9q" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    posts: [
      {
        id: 1,
        title: 'TITLE OF POST 1',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 2,
        title: 'TITLE OF POST 2',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 3,
        title: 'TITLE OF POST 3',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 4,
        title: 'TITLE OF POST 4',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 5,
        title: 'TITLE OF POST 5',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      }
    ],
    interests: [
      {
        id: 1,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 2,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 3,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 4,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 5,
        name: 'interest1',
        info: 'information'
      }

    ]

    ,
    details: [
      {
        id: 1,
        name: 'detail1',
        info: 'details'
      },
      {
        id: 2,
        name: 'detail2',
        info: 'details'
      },
      {
        id: 3,
        name: 'detail3',
        info: 'details'
      },
      {
        id: 4,
        name: 'detail4',
        info: 'details'
      },
      {
        id: 5,
        name: 'detail5',
        info: 'details'
      }
    ]
  },
  {
    firstName: 'Darci',
    lastName: 'Calhoun',
    username: 'dcalhoun',
    age: '28',
    instrument: 'pianist',
    location: 'Seattle, WA',
    pictures: {
      full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      sml: ''
    },
    hero: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
    friends: [
      {
        firstName: 'John',
        lastName: 'Smitherson',
        username: 'randomuser',
        age: '99',
        instrument: 'drummer',
        location: 'Seattle, WA',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
      {
        firstName: 'Some',
        lastName: 'Person',
        username: 'poopsmcgee',
        age: '99',
        instrument: 'guitar',
        location: 'Somewhere, OV',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
      {
        firstName: 'Jeff',
        lastName: 'Sozeb',
        username: 'loser100',
        age: '99',
        instrument: 'piano',
        location: 'San Diego, CA',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
    ],
    aboutMe: 'THIS IS FROM STATE Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque veniam recusandae perferendis, similique non quaerat. At nulla voluptates nihil tempore necessitatibus harum pariatur tempora maiores laudantium consequatur, maxime sapiente dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet sapiente iure aliquid cum ipsa ipsum libero iusto, quasi ipsam, veniam eveniet incidunt quas repellendus quos, at possimus quo omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi soluta sapiente cumque nemo veritatis. Incidunt praesentium, recusandae veritatis, labore quidem vel cumque possimus ex ea deserunt fugit natus. Illo.',
    playlist: '<iframe src="https://open.spotify.com/embed/playlist/790BYywuCOTEzzXU8YtM9q" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    posts: [
      {
        id: 1,
        title: 'TITLE OF POST 1',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 2,
        title: 'TITLE OF POST 2',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 3,
        title: 'TITLE OF POST 3',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 4,
        title: 'TITLE OF POST 4',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 5,
        title: 'TITLE OF POST 5',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      }
    ],
    interests: [
      {
        id: 1,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 2,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 3,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 4,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 5,
        name: 'interest1',
        info: 'information'
      }

    ]

    ,
    details: [
      {
        id: 1,
        name: 'detail1',
        info: 'details'
      },
      {
        id: 2,
        name: 'detail2',
        info: 'details'
      },
      {
        id: 3,
        name: 'detail3',
        info: 'details'
      },
      {
        id: 4,
        name: 'detail4',
        info: 'details'
      },
      {
        id: 5,
        name: 'detail5',
        info: 'details'
      }
    ]
  },
  {
    firstName: 'Michael',
    lastName: 'Greene',
    username: 'mgreene',
    age: '28',
    instrument: 'singer',
    location: 'Seattle, WA',
    pictures: {
      full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
      sml: ''
    },
    hero: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
    friends: [
      {
        firstName: 'John',
        lastName: 'Smitherson',
        username: 'randomuser',
        age: '99',
        instrument: 'drummer',
        location: 'Seattle, WA',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
      {
        firstName: 'Some',
        lastName: 'Person',
        username: 'poopsmcgee',
        age: '99',
        instrument: 'guitar',
        location: 'Somewhere, OV',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
      {
        firstName: 'Jeff',
        lastName: 'Sozeb',
        username: 'loser100',
        age: '99',
        instrument: 'piano',
        location: 'San Diego, CA',
        pictures: {
          full: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          lg: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          md: 'https://images.unsplash.com/photo-1626869817459-09f8e979ba27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80',
          sml: ''
        }
      },
    ],
    aboutMe: 'THIS IS FROM STATE Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque veniam recusandae perferendis, similique non quaerat. At nulla voluptates nihil tempore necessitatibus harum pariatur tempora maiores laudantium consequatur, maxime sapiente dolores. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus amet sapiente iure aliquid cum ipsa ipsum libero iusto, quasi ipsam, veniam eveniet incidunt quas repellendus quos, at possimus quo omnis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nisi soluta sapiente cumque nemo veritatis. Incidunt praesentium, recusandae veritatis, labore quidem vel cumque possimus ex ea deserunt fugit natus. Illo.',
    playlist: '<iframe src="https://open.spotify.com/embed/playlist/790BYywuCOTEzzXU8YtM9q" width="100%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>',
    posts: [
      {
        id: 1,
        title: 'TITLE OF POST 1',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 2,
        title: 'TITLE OF POST 2',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 3,
        title: 'TITLE OF POST 3',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 4,
        title: 'TITLE OF POST 4',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      },
      {
        id: 5,
        title: 'TITLE OF POST 5',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem laudantium iure excepturi quisquam repellendus non exercitationem quasi, adipisci corrupti possimus et vero reprehenderit voluptates explicabo officia eveniet pariatur sed beatae.'
      }
    ],
    interests: [
      {
        id: 1,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 2,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 3,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 4,
        name: 'interest1',
        info: 'information'
      },
      {
        id: 5,
        name: 'interest1',
        info: 'information'
      }

    ]

    ,
    details: [
      {
        id: 1,
        name: 'detail1',
        info: 'details'
      },
      {
        id: 2,
        name: 'detail2',
        info: 'details'
      },
      {
        id: 3,
        name: 'detail3',
        info: 'details'
      },
      {
        id: 4,
        name: 'detail4',
        info: 'details'
      },
      {
        id: 5,
        name: 'detail5',
        info: 'details'
      }
    ]
  }
]

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}
