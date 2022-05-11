/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  // {
  //   path: '/app/forms',
  //   icon: 'FormsIcon',
  //   name: 'Orders',
  // },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Customers',
  // },
  {
    icon: 'PagesIcon',
    name: 'Student',
    routes: [
      {
        path: '/app/student/add-new',
        name: 'Add New',
        routes:[{name:'Registeres',path:'/app/student/add-new/registered'}]
      },
      {
        path: '/app/student/manage',
        name: 'Manage',
      },
      {
        path: '/app/student/registered',
        name: 'Registered',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Staff',
    routes: [
      {
        path: '/app/staff/add-new',
        name: 'Add New',
      },
      {
        path: '/app/staff/manage',
        name: 'Manage',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Finance',
    routes: [
      {
        path: '/app/fee/collection',
        name: 'Fee Collection',
      },
      {
        path: '/app/salary/pay-voucher',
        name: 'Salary Voucher',
      },
      {
        path: '/app/expenses',
        name: 'Expenses',
      },
      {
        path: '/app/profit-loss',
        name: 'Profit Or Loss',
      },
    ],
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Reports',
  },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Settings',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Analytics',
  // },
  // {
  //   path: '/app/tables',
  //   icon: 'TablesIcon',
  //   name: 'Marketing',
  // },
]

export default routes
