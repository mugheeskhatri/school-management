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
  {
    icon: 'PagesIcon',
    name: 'Inquiry',
    routes: [
      {
        path: '/app/add-inquiry',
        name: 'Add Inquiry',
      },
      {
        path: '/app/inquiry-report',
        name: 'Reports',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Admissions',
    routes: [
      {
        path: '/app/student/add-new',
        name: 'New Admission',
      },
      {
        path: '/app/student/manage',
        name: 'Manage Admissions',
      },
      {
        path: '/app/student/manage-classes',
        name: 'Manage Classes',
      },
      {
        path: '/app/student/generate-family-number',
        name: 'Generate Family Number',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Fee Management',
    routes: [
      {
        path: '/app/fee-deposit-voucher',
        name: 'Fee Collect Voucher',
      },
      {
        path: '/app/deposit-by-family',
        name: 'Fee Collect by family',
      },
      {
        path: '/app/fee-recieveables',
        name: 'Fee Recieveables',
      },
      {
        path: '/app/student-fee-record',
        name: 'Student Fee Record',
      },
      {
        path: '/app/fee-report',
        name: 'Reports',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Attendance',
    routes: [
      {
        path: '/app/take-attendance',
        name: 'Take Attendance',
      },
      {
        path: '/app/student-leave',
        name: 'Short Leave',
      },
      {
        path: '/app/attendance-report',
        name: 'Reports',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Expenses',
    routes: [
      {
        path: '/app/add-expense',
        name: 'Add Expense',
      },
      {
        path: '/app/add-expense-type',
        name: 'Add Expense Type',
      },
      {
        path: '/app/expenses-report',
        name: 'Report',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'HR Management',
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
    name: 'Complains',
    routes: [
      {
        path: '/app/parents-complain',
        name: 'Parents Complain',
      },
      {
        path: '/app/staff-complain',
        name: 'Staff Complain',
      },
      {
        path: '/app/add-complain',
        name: 'Add Complain',
      },
      {
        path: '/app/complain-reports',
        name: 'Reports',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Finance',
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
    name: 'Academic',
    routes: [
      {
        path: '/app/syllabus',
        name: 'Syllabus',
      },
      {
        path: '/app/exams',
        name: 'Examination',
      },
      {
        path: '/app/syllabus-reports',
        name: 'Reports',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'User Management',
    routes: [
      {
        path: '/app/add-user',
        name: 'Add User',
      },
      {
        path: '/app/manage-users',
        name: 'Users',
      },
    ],
  },
  {
    icon: 'PagesIcon',
    name: 'Settings',
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
