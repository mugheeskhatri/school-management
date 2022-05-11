import { lazy } from 'react'
// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const NewStudent = lazy(() => import('../pages/newStudent'))
const StudentManage = lazy(() => import('../pages/StudentManage'))
const EditStudent = lazy(() => import('../pages/editStudent'))
const newStaff = lazy(() => import('../pages/newStaff'))
const RegisteredStudents = lazy(() => import('../pages/RegisteredStudents'))
const Blank = lazy(() => import('../pages/Blank'))
const newProduct = lazy(() => import('../pages/NewProduct'))
const category = lazy(() => import('../pages/Category'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  {
    path: '/tables',
    component: Tables,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/staff/add-new',
    component: newStaff,
  },
  {
    path: '/student/add-new',
    component: NewStudent,
  },
  {
    path: '/student/edit/:id',
    component: EditStudent,
  },
  {
    path: '/student/manage',
    component: StudentManage,
  },
  {
    path: '/student/registered',
    component:RegisteredStudents ,
  },
  {
    path: '/category',
    component: category,
  },
  {
    path: '/fee/collection',
    component: category,
  },
  {
    path: '/salary/pay-voucher',
    component: category,
  },
  {
    path: '/expenses',
    component: category,
  },
  {
    path: '/profit-loss',
    component: category,
  },
]

export default routes
