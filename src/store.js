import { reactive } from 'vue'

export const store = reactive({



    menuList: ["Home", "Who We Do", "What We Do", "Where We Work", "Careers", "News"],

    imageWorksList: [
        {
            image: 'case-study-gallery-3-1-600x450',
        },
        {
            image: 'case-study-gallery-2-600x450',
        },
        {
            image: 'case-study-gallery-1-1-600x450',
        },
        {
            image: 'case-study-gallery-4-1-600x450',
        },
        {
            image: 'case-study-gallery-5-1-600x450',
        },
        {
            image: 'case-study-gallery-6-1-600x450',
        },
    ],

    ServicesList: [
        {
            icon: 'fa-brands fa-google',
            title: 'Google Seo',
            link: "Read More >",
            description: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        },
        {
            icon: 'fa-solid fa-gear',
            title: 'Brand Strategy',
            link: "Read More >",
            description: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        },
        {
            icon: 'fa-solid fa-building',
            title: 'Local SEO',
            link: "Read More >",
            description: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        },
        {
            icon: 'fa-solid fa-chart-column',
            title: 'Seo Analysis',
            link: "Read More >",
            description: 'Vestibulum in lacinia metus. Suspendisse in enim ipsum. Nulla facilisi. Donec ante turpis, dictum sed magna et dapibus faucibus odio.',
        },

    ],


    MeetAgencyList: [
        {
            icon: 'fa-solid fa-road',
            title: 'Establish Goals',
            description: 'Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque convallis mi ligula euismod odio vel dictum mi risus a mi.',
        },
        {
            icon: 'fa-solid fa-video',
            title: 'Work With a Team',
            description: 'Cras semper auctor aliquam. Sed porta sed lacus sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisce.',
        },
        {
            icon: 'fa-solid fa-droplet',
            title: 'Get Results',
            description: 'Vestibulum scelerisque egestas lectus sit amet molestie. Donec consectetur cursus est sed blandit. Nunc sed risus lacus.',
        }

    ],




    ObjectNewsList: [
        {
            image: 'related-service-2-700x441',
            title: 'Why You Need A SEO Agency Now',
            date: "November 1st, 2017",
            description: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit',
        },
        {
            image: 'related-service-4-700x441',
            title: 'SEO Tips For Your Startup',
            date: "November 1st, 2017",
            description: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit',
        },
        {
            image: 'blog-post-6-700x441',
            title: 'Image Optimization For Your Site',
            date: "November 1st, 2017",
            description: 'ALorem ipsum dolor sit amet, consectetur adipiscing elit. In et scelerisque sem. Nunc molestie neque augue, at gravida mi blandit',
        },

    ],

    PriceList: [
        {
            type: 'Standard',
            currency: '$',
            integerPrice: '19',
            decimalPrice: '99',
            time: 'monthly',
            numberProject: "5 Project",
            storage: '5 GB Storage',
            numberUsers: "Unlimited Users",
            link: "start today",
        },
        {
            type: 'Premium',
            currency: '$',
            integerPrice: '29',
            decimalPrice: '99',
            time: 'monthly',
            numberProject: "10 Project",
            storage: '15 GB Storage',
            numberUsers: "Unlimited Users",
            link: "start today",
        },
        {
            type: 'Professional',
            currency: '$',
            integerPrice: '39',
            decimalPrice: '99',
            time: 'monthly',
            numberProject: "15 Project",
            storage: '30 GB Storage',
            numberUsers: "Unlimited Users",
            link: "start today",
        },
        {
            type: 'Extreme',
            currency: '$',
            integerPrice: '59',
            decimalPrice: '99',
            time: 'monthly',
            numberProject: "Unlimited Projects",
            storage: 'Unlimited Storage',
            numberUsers: "Unlimited Users",
            link: "start today",
        },

    ],





});
