import { lazy } from 'react'
// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Page404 = lazy(() => import('../pages/404'))
const NewStudent = lazy(() => import('../pages/newStudent'))
const ManageAddmission = lazy(() => import('../pages/Addmission/ManageAddmission'))
const EditStudent = lazy(() => import('../pages/Addmission/EditStudent'))
const newStaff = lazy(() => import('../pages/newStaff'))
const RegisteredStudents = lazy(() => import('../pages/RegisteredStudents'))
const category = lazy(() => import('../pages/Category'))
const AddInquiry = lazy(() => import('../pages/Inquiry/addInquiry'))
const InquiryReports = lazy(() => import('../pages/Inquiry/reports'))
const FeeDeposit = lazy(() => import('../pages/fee Management/feeDeposit'))
const FeeDepositByfamily = lazy(() => import('../pages/fee Management/feeDepositByFamily'))
const FeeRecieveables = lazy(() => import('../pages/fee Management/feeRecieveables'))
const FeeReports = lazy(() => import('../pages/fee Management/reports'))
const StudentFeeRecord = lazy(() => import('../pages/fee Management/studentFeeRecord'))
const TakeAttendance = lazy(() => import('../pages/attendance/takeAttendance'))
const StudentLeave = lazy(() => import('../pages/attendance/shortLeave'))
const AttendanceReports = lazy(() => import('../pages/attendance/reports'))
const AddExpense = lazy(() => import('../pages/expenses/addExpense'))
const AddExpenseType = lazy(() => import('../pages/expenses/addExpenseType'))
const ExpenseReport = lazy(() => import('../pages/expenses/reports'))
const AddComplain = lazy(() => import('../pages/complains/addComplain'))
const ParentsComplain = lazy(() => import('../pages/complains/parentsComplain'))
const StaffComplain = lazy(() => import('../pages/complains/staffComplain'))
const ComplainReports = lazy(() => import('../pages/complains/reports'))
const Syllabus = lazy(() => import('../pages/academic/syllabus'))
const Exams = lazy(() => import('../pages/academic/exams'))
const SyllabusReport = lazy(() => import('../pages/academic/reports'))
const AddUser = lazy(() => import('../pages/users/addUser'))
const ManageUser = lazy(() => import('../pages/users/users'))
const NewAddmission = lazy(() => import('../pages/Addmission/NewAddmission'))
const ManageClasses = lazy(() => import('../pages/Addmission/ManageClasses'))
const GenerateFamilyNumber = lazy(() => import('../pages/Addmission/GenerateFamilyNumber'))


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
    path: '/404',
    component: Page404,
  },
  {
    path: '/add-inquiry',
    component: AddInquiry,
  },
  {
    path: '/inquiry-report',
    component: InquiryReports,
  },
  {
    path: '/fee-deposit-voucher',
    component: FeeDeposit,
  },
  {
    path: '/deposit-by-family',
    component: FeeDepositByfamily,
  },
  {
    path: '/fee-recieveables',
    component: FeeRecieveables,
  },
  {
    path: '/student-fee-record',
    component: StudentFeeRecord,
  },
  {
    path: '/fee-report',
    component: FeeReports,
  },
  {
    path: '/take-attendance',
    component: TakeAttendance,
  },
  {
    path: '/student-leave',
    component: StudentLeave,
  },
  {
    path: '/attendance-report',
    component: AttendanceReports,
  },
  {
    path: '/add-expense',
    component: AddExpense,
  },
  {
    path: '/add-expense-type',
    component: AddExpenseType,
  },
  {
    path: '/expenses-report',
    component: ExpenseReport,
  },
  {
    path: '/parents-complain',
    component: ParentsComplain,
  },
  {
    path: '/staff-complain',
    component: StaffComplain,
  },
  {
    path: '/add-complain',
    component: AddComplain,
  },
  {
    path: '/complain-reports',
    component: ComplainReports,
  },
  {
    path: '/syllabus',
    component: Syllabus,
  },
  {
    path: '/syllabus-reports',
    component: SyllabusReport,
  },
  {
    path: '/exams',
    component: Exams,
  },
  {
    path: '/add-user',
    component: AddUser,
  },
  {
    path: '/manage-users',
    component: ManageUser,
  },
  {
    path: '/student/edit/:id',
    component: EditStudent,
  },
  {
    path: '/student/manage',
    component: ManageAddmission,
  },
  {
    path: '/student/registered',
    component: RegisteredStudents,
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
  {
    path: '/student/add-new',
    component: NewAddmission,
  },
  {
    path: '/student/manage-classes',
    component: ManageClasses,
  },
  {
    path: '/student/generate-family-number',
    component: GenerateFamilyNumber,
  },
]

export default routes
