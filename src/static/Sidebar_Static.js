// Static Data goes here
import Dashboard from '../components/dashboard/Dashboard';
import Teacher from '../components/teacher/Teacher';
import Attendance from '../components/attendance/Attendance';
import Payment from '../components/payment/Payment';
import Table from '../components/table/Table';
import Settings from '../components/settings/Settings'
import { ReactComponent as CalendarIcon } from '../assets/UI-icons/calendar.svg';
import { ReactComponent as DashboardIcon } from '../assets/UI-icons/dashboard.svg';
import { ReactComponent as MoneyIcon } from '../assets/UI-icons/money.svg';
import { ReactComponent as TableIcon } from '../assets/UI-icons/table.svg';
import { ReactComponent as TeacherIcon } from '../assets/UI-icons/teacher-tab.svg';
import { ReactComponent as SettingIcon} from '../assets/UI-icons/setting.svg'
import { ReactComponent as StudentIcon} from '../assets/UI-icons/student.svg'
import Student from '../components/student/Student';

export const SIDEBAR_STATIC_DATA = [
    {
        id: 0,
        sidebarTitle: "Boshqaruv",
        icon: <DashboardIcon/>,
        route: "dashboard",
        component: <Dashboard/>,
    },
    {
        id: 1,
        sidebarTitle: "To'lov",
        icon: <MoneyIcon/>,
        route: "payment",
        component: <Payment/>,
    },
    {
        id: 2,
        sidebarTitle: "O'qituvchilar",
        icon: <TeacherIcon/>,
        route: "teachers",
        component: <Teacher/>
    },
    {
        id: 3,
        sidebarTitle: "O'quvchilar",
        icon: <StudentIcon/>,
        route: "students",
        component: <Student/>
    },
    {
        id: 4,
        sidebarTitle: "Dars jadvali",
        icon: <TableIcon/>,
        route: "table",
        component: <Table/>,
    },
    {
        id: 5,
        sidebarTitle: "Davomat",
        icon: <CalendarIcon/>,
        route: "attendance",
        component: <Attendance/>,
    },
    {
        id: 6,
        sidebarTitle: "Sozlamalar",
        icon: <SettingIcon/>,
        route: "settings",
        component: <Settings/>,
    }
]

export const Teachers_Data = [
    {
        id: 0,
        occupation: "Software Engineer",
        collectionUL: [
            {
                fullName: "John Doe Lemoni",
                salary: "4.000.000 so'm",
                pupilsNumber: 116,
                groups: 10
            }
        ]
    },
    {
        id: 1,
        occupation: "Software Engineer",
        collectionUL: [
            {
                fullName: "John Doe Lemoni",
                salary: "4.000.000 so'm",
                pupilsNumber: 116,
                groups: 10
            }
        ]
    },
    {
        id: 2,
        occupation: "Software Engineer",
        collectionUL: [
            {
                fullName: "John Doe Lemoni",
                salary: "4.000.000 so'm",
                pupilsNumber: 116,
                groups: 10
            }
        ]
    },
    {
        id: 3,
        occupation: "Software Engineer",
        collectionUL: [
            {
                fullName: "John Doe Lemoni",
                salary: "4.000.000 so'm",
                pupilsNumber: 116,
                groups: 10
            }
        ]
    },
    {
        id: 4,
        occupation: "Software Engineer",
        collectionUL: [
            {
                fullName: "John Doe Lemoni",
                salary: "4.000.000 so'm",
                pupilsNumber: 116,
                groups: 10
            }
        ]
    },
    {
        id: 5,
        occupation: "Software Engineer",
        collectionUL: [
            {
                fullName: "John Doe Lemoni",
                salary: "4.000.000 so'm",
                pupilsNumber: 116,
                groups: 10
            }
        ]
    },
    {
        id: 6,
        occupation: "Software Engineer",
        collectionUL: [
            {
                fullName: "",
                salary: "4.000.000 so'm",
                pupilsNumber: 116,
                groups: 10
            }
        ]
    }

]