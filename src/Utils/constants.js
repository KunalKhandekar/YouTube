export const API_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNGNlNjJlZTUtODBjZS00YzNhLWE4OWItNjJmNWMyMjJiYzhiIiwidHlwZSI6ImFwaV90b2tlbiJ9.hpOMjZb3QwZEspRl6cpi1GY4roYYguNlaY6DO5N_G4o";

function getRandomAPIKey() {
    const apiKeys = [
        'AIzaSyD3LGWALVqU_FqWYdghIgGwnyqu9onbraw'
    ];
    return apiKeys[Math.floor(Math.random() * apiKeys.length)];
}

// AIzaSyC0StHW4iIK78OrX6_4rLcIiQw6BoTvbs8 [expired] //
// AIzaSyBiM4mVtA1F1rE-YWLj9wIbsITVa_s8DV4 [expired]
// AIzaSyB2dawIeXCPVMVRMGi9HP4P1K8jWFUFiGE [expired]
// AIzaSyD3LGWALVqU_FqWYdghIgGwnyqu9onbraw [working]
// AIzaSyDMAjY5eRc2lq3YGsnr_uJ-PDlc5TwCqkA [expired]
// AIzaSyBFCPK70dOHsmbaOFbAKQn9lh4aRWHV2eQ [expired]

export const YOUTUBE_API = getRandomAPIKey;

export const SUGGESTION_API = 'https://proxy.cors.sh/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const Channel_List = [
    {
        name: 'Sony SAB',
        link: 'https://yt3.googleusercontent.com/WrjDeIWr2pmRdCKFuEDfvkovr0O_o7gyfT_J_AMJjFk5KR9HGQVirOP0DeimyAoBUHRfH79X=s176-c-k-c0x00ffffff-no-rj',
        id : 'UC6-F5tO8uklgE9Zy8IvbdFw'
    },
    {
        name: 'CodeWithHarry',
        link: 'https://yt3.googleusercontent.com/ytc/AIdro_kNaumymcxYzV7_n7_VRbQ2TRlIbU2w5csOMN0cH8jiED8=s176-c-k-c0x00ffffff-no-rj-mo',
        id : 'UCeVMnSShP_Iviwkknt83cww'
    },
    {
        name: 'Narendra Modi',
        link: 'https://yt3.googleusercontent.com/iogG8RVPb49OyvLtnJJ61ltWouozunOuFN94GhByYUDZiMCNpjjDTVJtc8-hUAHk-uN8MrQyC1o=s176-c-k-c0x00ffffff-no-rj',
        id : 'UC1NF71EwP41VdjAU1iXdLkw'
    },
    {
        name: 'Dhruv Rathee',
        link: 'https://yt3.googleusercontent.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s176-c-k-c0x00ffffff-no-rj',
        id : 'UC-CSyyi47VX1lD9zyeABW3w'
    },
    {
        name: 'T-Series',
        link: 'https://yt3.googleusercontent.com/XE7Iq8jvJ07ptMc-HxZR_V-2XgXCb0i06i4E_dypl7xSR655WXaQeglfqNuEeuwH3oM9RKVodQ=s176-c-k-c0x00ffffff-no-rj',
        id : 'UCq-Fj5jknLsUf-MWSy4_brA'
    },
    {
        name: 'Mythpat',
        link: 'https://yt3.googleusercontent.com/S3Ns5FT6e9n31Z9Cagf0j_xEc_QqZcvxuuxxvZED1N6fcs4R9XsG_XhY-6ETMseU3CDSD9CcoA=s176-c-k-c0x00ffffff-no-rj',
        id : 'UCx6F-rETGiz7xf_vkMmX2yQ'
    }
]