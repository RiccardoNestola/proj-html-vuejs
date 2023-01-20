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






});
