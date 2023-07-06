import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";

export const listMenu = [
  {
    title: "Dashboard",
    sections: [
      {
        name: "Home",
        path: "/",
        icon: <LineStyle fontSize="small" />,
      },
      {
        name: "Analytics",
        path: "/analytics",
        icon: <Timeline fontSize="small" />,
      },
      {
        name: "Sales",
        path: "/sales",
        icon: <TrendingUp fontSize="small" />,
      },
    ],
  },
  {
    title: "Quick Menu",
    sections: [
      {
        name: "Users",
        path: "/quickmenu/users",
        icon: <Person fontSize="small" />,
      },
      {
        name: "Products",
        path: "/quickmenu/products",
        icon: <Storefront fontSize="small" />,
      },
      {
        name: "Transactions",
        path: "/quickmenu/transactions",
        icon: <AttachMoney fontSize="small" />,
      },
      {
        name: "Reports",
        path: "/quickmenu/reports",
        icon: <BarChart fontSize="small" />,
      },
    ],
  },
  {
    title: "Notification",
    sections: [
      {
        name: "Mail",
        path: "/notification/mail",
        icon: <MailOutline fontSize="small" />,
      },
      {
        name: "Feedback",
        path: "/notification/feedback",
        icon: <DynamicFeed fontSize="small" />,
      },
      {
        name: "Messages",
        path: "/notification/messages",
        icon: <ChatBubbleOutline fontSize="small" />,
      },
    ],
  },
  {
    title: "Staff",
    sections: [
      {
        name: "Manage",
        path: "/staff/manage",
        icon: <WorkOutline fontSize="small" />,
      },
      {
        name: "Analytics",
        path: "/staff/analytics",
        icon: <LineStyle fontSize="small" />,
      },
      {
        name: "Reports",
        path: "/staff/reports",
        icon: <Report fontSize="small" />,
      },
    ],
  },
];
