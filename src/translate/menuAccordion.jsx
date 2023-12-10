const menutrans ={
title:{
    english:"DkMehr",
    persian:"داده کاوان",
    icon:"fa-eercast",
    href:"https://dkmehr.com"
    
},
menu:[
    {
        english: "OverView",
        persian: "OverView",
        index:0,
        icon:"fa-dashboard",
        href:"#",
        children:[
        {
            english: "Dashboard",
            persian: "داشبورد",
            index:0,
            icon:"fa-dashboard",
            href:"/",
            url:""
        },
        {
            english: "Report",
            persian: "گزارش",
            index:1,
            icon:"fa-bar-chart",
            href:"/reports",
            url:"reports"
        },
        {
            english: "CRM",
            persian: "مدیریت",
            index:1,
            icon:"fa-bar-chart",
            href:"/crm",
            url:"crm"
        },
        ]
    },
    {
        english: "Customers",
        persian: "مشتریان",
        index:1,
        icon:"fa-users",
        href:"#",
        children:[
            {
                english: "Customers Manager",
                persian: "مدیریت مشتریان",
                index:0,
                icon:"fa-users",
                href:"/users",
                url:"users"
            },
            {
                english: "Sale Policy",
                persian: "سیاست های فروش",
                index:0,
                icon:"fa-percent",
                href:"/policy",
                url:"policy"
            },
            ]
    },
    {
        english: "Orders",
        persian: "سفارشات",
        index:2,
        icon:"fa-tasks",
        href:"#",
        children:[
            {
                english: "Orders List",
                persian: "لیست سفارشات",
                index:0,
                icon:"fa-tasks",
                href:"/orders",
                url:"orders"
            },
            ]
    },
    {
        english: "Products",
        persian: "محصولات و خدمات",
        index:3,
        icon:"fa-bar-chart",
        href:"#",
        children:[
            {
                english: "Products List",
                persian: "لیست محصولات",
                index:0,
                icon:"fa-dashboard",
                href:"/products",
                url:"products"
            },
            {
                english: "Services",
                persian: "خدمات",
                index:1,
                icon:"fa-bar-chart",
                href:"/services",
                url:"services"
            },
            {
                english: "Brands",
                persian: "برندها",
                index:1,
                icon:"fa-bar-chart",
                href:"/brands",
                url:"brands"
            },
            {
                english: "Category",
                persian: "دسته بندی ها",
                index:1,
                icon:"fa-bar-chart",
                href:"/category",
                url:"category"
            },
            ]
    },
    {
        english: "Configuration",
        persian: "تنظیمات",
        index:3,
        icon:"fa-bar-cog",
        href:"#",
        children:[
            {
                english: "Find Bug",
                persian: "مغایرت ها",
                index:0,
                icon:"fa-bug",
                href:"/find-bugs",
                url:"find-bugs"
            },
        ]
    }
]
}
export default menutrans