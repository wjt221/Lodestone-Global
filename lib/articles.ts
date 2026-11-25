import fs from "fs";
import path from "path";
import type { Insight } from "./content";

export interface ArticleMeta {
  slug: string; title: string; category: string; date: string; publishedAt?: string;
  modifiedAt?: string; summary: string; description?: string; minutesToRead: number;
  legacyPaths: string[]; image?: {src:string;width:number;height:number};
  originalPostId?: string; originalAuthorId?: string; originalCategoryIds?: string[];
  hashtags?: string[]; archiveEntry?: boolean; relatedPostIds?: string[];
}
// Original published Wix posts, migrated without rewriting the historical content.
export const articles: ArticleMeta[] = [
  {
    "slug": "lodestone-capital-blulabs-investment",
    "title": "Lodestone Capital Leads $7 Million Investment in Blulabs to Expand Global Supply Chain Platform",
    "category": "Firm & client news",
    "date": "2026-05-27",
    "publishedAt": "2026-05-27T16:37:14Z",
    "modifiedAt": "2026-05-27T17:28:59.814Z",
    "summary": "Investment values Blulabs at $160 million pre-money and supports continued growth across manufacturing, logistics, technology, and customer service infrastructure",
    "minutesToRead": 3,
    "legacyPaths": [
      "/single-post/lodestone-capital-leads-7-million-investment-in-blulabs-to-expand-global-supply-chain-platform",
      "/post/lodestone-capital-leads-7-million-investment-in-blulabs-to-expand-global-supply-chain-platform",
      "/blog/lodestone-capital-leads-7-million-investment-in-blulabs-to-expand-global-supply-chain-platform"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_821cf3e028ac45eb9703f0c1e371080f~mv2.jpg",
      "width": 3400,
      "height": 2460
    },
    "originalPostId": "673f0e92-a26c-49cd-af4d-a8bb9be83e87",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [
      "e173ac82-a929-400a-82e5-a079820f5f31"
    ],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "board-diversity-and-performance",
    "title": "Is Diversity on Boards Critical for Success?",
    "category": "Board performance",
    "date": "2023-04-26",
    "publishedAt": "2023-04-26T12:37:00.112Z",
    "modifiedAt": "2023-04-26T12:37:00.112Z",
    "summary": "Analyzing data from multiple studies to determine the true impact of diversity on board success and company performance.",
    "minutesToRead": 3,
    "legacyPaths": [
      "/single-post/is-diversity-on-boards-critical-for-success",
      "/post/is-diversity-on-boards-critical-for-success",
      "/blog/is-diversity-on-boards-critical-for-success"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_5a52d1d161144ef08343d4f455b281d4~mv2.jpg",
      "width": 1650,
      "height": 1101
    },
    "originalPostId": "16ce5969-0b88-43b5-a2dc-a1c6ac935c7e",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [
      "boarddiversity",
      "corporategovernance",
      "diversityandinclusion",
      "leadership",
      "businessperformance",
      "nasdaq",
      "sec",
      "regulatorychanges",
      "womeninleadership",
      "underrepresentedminorities",
      "inclusiveworkplace"
    ],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "improving-board-performance",
    "title": "How to Improve Your Board's Performance: Best Practices and Strategies",
    "category": "Board performance",
    "date": "2023-03-14",
    "publishedAt": "2023-03-14T14:55:24.633Z",
    "modifiedAt": "2023-03-14T14:55:24.633Z",
    "summary": "A board is a crucial component of any organization, and its performance can significantly impact the company's success. A high-performing...",
    "description": "Unlock the Power of Your Board: Discover 6 Tips to Improve Your Board's Performance and Maximize Your Organization's Success",
    "minutesToRead": 4,
    "legacyPaths": [
      "/single-post/how-to-improve-your-board-s-performance-best-practices-and-strategies",
      "/post/how-to-improve-your-board-s-performance-best-practices-and-strategies",
      "/blog/how-to-improve-your-board-s-performance-best-practices-and-strategies"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_8f1b722a1ece41c4b3dbc9f0f7819209~mv2.jpg",
      "width": 2400,
      "height": 1600
    },
    "originalPostId": "c9cab6bb-51b1-4283-813b-ff37ab19251a",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [
      "corporategovernance",
      "boardofdirectors",
      "advisoryboard",
      "leadership",
      "management",
      "businessstrategy",
      "bestpractices",
      "strategicplanning",
      "highperformingboard",
      "businessgrowth",
      "boardculture"
    ],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "attracting-top-board-members",
    "title": "Get the Best of the Best: Strategies for Attracting Top Board Members",
    "category": "Director recruitment",
    "date": "2023-02-23",
    "publishedAt": "2023-02-23T18:40:43.072Z",
    "modifiedAt": "2023-02-23T18:40:43.072Z",
    "summary": "Attracting high-performing board members is essential for achieving strategic objectives and maximizing shareholder value. A board can be...",
    "description": "Attracting top board talent is essential for maximizing shareholder value. Learn how to develop a strategic approach to recruit and retain high performing board members.",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/get-the-best-of-the-best-strategies-for-attracting-top-board-members",
      "/post/get-the-best-of-the-best-strategies-for-attracting-top-board-members",
      "/blog/get-the-best-of-the-best-strategies-for-attracting-top-board-members"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_b5764d3d3ab74d8eb67b21c9fdfb13e0~mv2.jpg",
      "width": 5184,
      "height": 3456
    },
    "originalPostId": "f6bd64e8-c9ee-46c8-a0e9-754aa6c1676c",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [],
    "hashtags": [
      "boards",
      "boardsofdirectors",
      "advisoryboard",
      "corporategovernance",
      "boardleadership",
      "diversityequityinclusion"
    ],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "advisory-board-readiness",
    "title": "Are You Ready for a High Performance Advisory Board? Key Indicators and Steps for Success",
    "category": "Board formation",
    "date": "2023-02-14",
    "publishedAt": "2023-02-14T17:37:50.824Z",
    "modifiedAt": "2023-02-14T17:37:50.824Z",
    "summary": "Is your company ready for a high-performing board? Critical issues, clear vision, and a willingness to listen determine readiness, not size.",
    "description": "Is your company ready for a high-performing board? Critical issues, clear vision, and a willingness to listen determine readiness, not size.",
    "minutesToRead": 3,
    "legacyPaths": [
      "/single-post/are-you-ready-for-a-high-performance-advisory-board-key-indicators-and-steps-for-success",
      "/post/are-you-ready-for-a-high-performance-advisory-board-key-indicators-and-steps-for-success",
      "/blog/are-you-ready-for-a-high-performance-advisory-board-key-indicators-and-steps-for-success"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_71c8693f8123400db077bef593537cbd~mv2.jpg",
      "width": 5000,
      "height": 3324
    },
    "originalPostId": "f5d64d5b-f996-4d1b-b11b-e39d5ab2aee3",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [],
    "hashtags": [
      "advisoryboard",
      "corporategovernance",
      "leadership",
      "entrepreneurship",
      "smallbusiness",
      "businessgrowth",
      "strategicplanning",
      "boardreadiness",
      "boardofdirectors",
      "businessadvice",
      "businessstrategy",
      "successionplanning",
      "ceolife",
      "highperformanceteams",
      "businessleadership",
      "businessmanagement",
      "businessconsulting",
      "businesscoaching"
    ],
    "archiveEntry": false,
    "relatedPostIds": [
      "495b9298-1061-48e9-9487-84367fe08a14",
      "d7640e8d-a1f7-40e3-9cb8-9b83c2649838",
      "6f045f82-a5b3-40e1-bc29-a96965c4eb59"
    ]
  },
  {
    "slug": "unlock-the-power-of-a-high-performing-board-why-your-business-can-t-afford-to-miss-out",
    "title": "Unlock the Power of a High Performing Board: Why Your Business Can't Afford to Miss Out",
    "category": "Enterprise value",
    "date": "2023-02-09",
    "publishedAt": "2023-02-09T14:58:28.337Z",
    "modifiedAt": "2023-02-09T14:58:28.337Z",
    "summary": "Why does your business need a board? This is a common question asked by entrepreneurs, CEOs, and business owners. While the benefits of...",
    "description": "Use your board as a strategic weapon: Discover the ROI of installing a High Performing Board. Transform your business with unstoppable growth and improved profitability. ",
    "minutesToRead": 3,
    "legacyPaths": [
      "/single-post/unlock-the-power-of-a-high-performing-board-why-your-business-can-t-afford-to-miss-out",
      "/post/unlock-the-power-of-a-high-performing-board-why-your-business-can-t-afford-to-miss-out",
      "/blog/unlock-the-power-of-a-high-performing-board-why-your-business-can-t-afford-to-miss-out"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_0116af64dc1945ad86dc67b6f234e1f4~mv2.png",
      "width": 824,
      "height": 735
    },
    "originalPostId": "495b9298-1061-48e9-9487-84367fe08a14",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "advisoryboards-leverageexternalexpertiseforsuccess",
    "title": "Advisory Boards: Leverage External Expertise for Success",
    "category": "Board formation",
    "date": "2023-01-27",
    "publishedAt": "2023-01-27T14:34:12.180Z",
    "modifiedAt": "2023-01-27T14:34:12.180Z",
    "summary": "Looking to tap into external expertise and drive growth? Discover the five major benefits of creating an advisory board. ",
    "description": "Looking to tap into external expertise and drive growth? Learn how advisory boards can provide valuable guidance and support to organizations looking to succeed, and discover the five major benefits of creating an advisory board.",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/advisoryboards-leverageexternalexpertiseforsuccess",
      "/post/advisoryboards-leverageexternalexpertiseforsuccess",
      "/blog/advisoryboards-leverageexternalexpertiseforsuccess"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_27edf66eaa94425da69fbaa8aa8d9585~mv2.jpg",
      "width": 4000,
      "height": 2662
    },
    "originalPostId": "d7640e8d-a1f7-40e3-9cb8-9b83c2649838",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "private-director-compensation-growth-accelerates-2023-private-company-board-compensation-survey",
    "title": "Private Director Compensation Growth Accelerates - 2023 Private Company Board Compensation Survey",
    "category": "Board compensation",
    "date": "2023-01-11",
    "publishedAt": "2023-01-11T21:36:10.575Z",
    "modifiedAt": "2023-01-11T21:39:16.678Z",
    "summary": "Lodestone Global recently published their 12th Annual 2023 Private Company Board Compensation Survey. The survey included 782 companies acro",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/private-director-compensation-growth-accelerates-2023-private-company-board-compensation-survey",
      "/post/private-director-compensation-growth-accelerates-2023-private-company-board-compensation-survey",
      "/blog/private-director-compensation-growth-accelerates-2023-private-company-board-compensation-survey"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_ea1d82bcb3f449fe9237adae780f6e4c~mv2.png",
      "width": 1757,
      "height": 986
    },
    "originalPostId": "6f045f82-a5b3-40e1-bc29-a96965c4eb59",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [
      "team",
      "boardofdirectors",
      "board",
      "leadership",
      "growth",
      "scale",
      "advisoryboard"
    ],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "2022-private-company-board-compensation-survey-director-compensation-growth-resumes-post-covid-19",
    "title": "2022 Private Company Board Compensation Survey - Director Compensation Growth Resumes Post COVID-19",
    "category": "Board compensation",
    "date": "2022-02-08",
    "publishedAt": "2022-02-08T20:22:06.490Z",
    "modifiedAt": "2022-08-01T18:47:47.164Z",
    "summary": "After a difficult 2020 due to the COVID-19 pandemic, board members were asked to meet more often to address critical issues like digital...",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/2022-private-company-board-compensation-survey-director-compensation-growth-resumes-post-covid-19",
      "/post/2022-private-company-board-compensation-survey-director-compensation-growth-resumes-post-covid-19",
      "/blog/2022-private-company-board-compensation-survey-director-compensation-growth-resumes-post-covid-19"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_a6b0883668c84d679d3a98a976eaaa52~mv2.png",
      "width": 1983,
      "height": 1112
    },
    "originalPostId": "205e2efc-1cdb-4d40-8ca9-61376e5ecd42",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "building-high-performance-boards-to-accelerate-growth",
    "title": "Building High Performance Boards to Accelerate Growth",
    "category": "Enterprise value",
    "date": "2021-09-01",
    "publishedAt": "2021-09-01T01:41:53.350Z",
    "modifiedAt": "2021-09-01T01:41:53.350Z",
    "summary": "Watch the Virtual Advisory Board Webinar with Lodestone Global's Managing Partner, William Tenenbaum as he discusses a number of topics...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/building-high-performance-boards-to-accelerate-growth",
      "/post/building-high-performance-boards-to-accelerate-growth",
      "/blog/building-high-performance-boards-to-accelerate-growth"
    ],
    "originalPostId": "5465c182-ddcf-47a6-a2c8-e7ec46ede7cc",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "2021-private-company-director-compensation",
    "title": "2021 Private Company Director Compensation - COVID-19 Impact?",
    "category": "Board compensation",
    "date": "2021-03-30",
    "publishedAt": "2021-03-30T14:59:43.367Z",
    "modifiedAt": "2021-03-30T14:59:43.367Z",
    "summary": "How has the Covid-19 Pandemic impacted board compensation and directors' time commitment? Find out how much you should pay your directors.",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/2021-private-company-d",
      "/post/2021-private-company-d",
      "/blog/2021-private-company-d"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_f0da6e6494154e8cb627d1488f697f53~mv2.png",
      "width": 1820,
      "height": 997
    },
    "originalPostId": "0cb255c1-440a-427c-953c-d31c194a9375",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": [
      "dec14c1d-ec65-47ee-a962-b26f962f8f42"
    ]
  },
  {
    "slug": "how-much-should-i-pay-my-directors-in-2020",
    "title": "How Much Should I Pay My Directors In 2020?",
    "category": "Board compensation",
    "date": "2020-01-16",
    "publishedAt": "2020-01-16T15:14:58.996Z",
    "modifiedAt": "2021-03-30T13:29:36.041Z",
    "summary": "When was the last time you analyzed how much you should pay your board members? How do you know if you are paying too much or not enough?",
    "minutesToRead": 3,
    "legacyPaths": [
      "/single-post/how-much-should-i-pay-my-directors-in-2020",
      "/post/how-much-should-i-pay-my-directors-in-2020",
      "/blog/how-much-should-i-pay-my-directors-in-2020"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_143dbb69111e446dafb39a5e5068c22a~mv2.png",
      "width": 1797,
      "height": 1013
    },
    "originalPostId": "dec14c1d-ec65-47ee-a962-b26f962f8f42",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "when-to-change-board-members",
    "title": "Is It Time To Change Your Board Members?",
    "category": "Director recruitment",
    "date": "2019-12-18",
    "publishedAt": "2019-12-18T14:59:27Z",
    "modifiedAt": "2019-12-18T14:59:27Z",
    "summary": "How do you know when it’s your board that needs changing, and how significant are the changes needed?",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/manage-your-blog-from-your-live-site",
      "/post/manage-your-blog-from-your-live-site",
      "/blog/manage-your-blog-from-your-live-site"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/f598f6bb60c3473793b186b1a6f9e93c.jpg",
      "width": 4917,
      "height": 3692
    },
    "originalPostId": "b7a6859a-df08-4bdf-aa3a-2fc5736e7a82",
    "originalAuthorId": "c3325c32-842d-4ea0-ace0-fd7c959682d2",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "how-to-run-a-great-board-meeting-part-iii",
    "title": "How To Run A Great Board Meeting Part III",
    "category": "Board performance",
    "date": "2017-08-27",
    "publishedAt": "2017-08-27T14:48:41.464Z",
    "modifiedAt": "2017-08-27T14:48:41.464Z",
    "summary": "Could your board meetings be more effective?  What are the key components your directors are missing?  We continue with the afternoon...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2017/08/27/how-to-run-a-great-board-meeting-part-iii",
      "/post/2017/08/27/how-to-run-a-great-board-meeting-part-iii",
      "/blog/2017/08/27/how-to-run-a-great-board-meeting-part-iii"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/e053d34b11d50f4d59e597ccd006198f.jpg",
      "width": 515,
      "height": 343
    },
    "originalPostId": "21329805-12b0-4f3b-be41-c842e441087f",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "how-to-run-a-great-board-meeting-part-ii-setting-the-perfect-agenda",
    "title": "How To Run A Great Board Meeting Part II: Setting The Perfect Agenda",
    "category": "Board performance",
    "date": "2017-08-08",
    "publishedAt": "2017-08-08T14:33:45.697Z",
    "modifiedAt": "2017-08-08T14:33:45.697Z",
    "summary": "Could your board meetings be more effective?  Can you improve your agenda to give your directors the ability to help crystallize and...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2017/08/08/how-to-run-a-great-board-meeting-part-ii-setting-the-perfect-agenda",
      "/post/2017/08/08/how-to-run-a-great-board-meeting-part-ii-setting-the-perfect-agenda",
      "/blog/2017/08/08/how-to-run-a-great-board-meeting-part-ii-setting-the-perfect-agenda"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/582ed97cb9b9442b86b99e1acd742ff1.jpg",
      "width": 6016,
      "height": 4016
    },
    "originalPostId": "b76db6fc-df12-45be-a93b-34534ee88286",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "how-to-run-a-great-board-meeting-part-i-the-importance-of-social-interaction",
    "title": "How To Run A Great Board Meeting Part I: The Importance Of Social Interaction",
    "category": "Board performance",
    "date": "2017-06-05",
    "publishedAt": "2017-06-05T13:56:51.355Z",
    "modifiedAt": "2017-06-05T13:56:51.355Z",
    "summary": "Are your board meetings as effective as you want them to be? Are you covering history at the expense of strategy for the future? Are you...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2017/06/05/how-to-run-a-great-board-meeting-part-i-the-importance-of-social-interaction",
      "/post/2017/06/05/how-to-run-a-great-board-meeting-part-i-the-importance-of-social-interaction",
      "/blog/2017/06/05/how-to-run-a-great-board-meeting-part-i-the-importance-of-social-interaction"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_eb5d0f5911c74c8f8c847e1e44c3685d~mv2_d_7242_4833_s_4_2.jpg",
      "width": 7242,
      "height": 4833
    },
    "originalPostId": "c7e8a9e1-e246-410e-94b3-6020802245a7",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "lodestone-global-client-wins-2017-private-company-board-of-the-year",
    "title": "Diesco Ltd., A Lodestone Global Client, Wins 2017 Private Company Advisory Board Of The Year Award!",
    "category": "Board formation",
    "date": "2017-05-29",
    "publishedAt": "2017-05-29T20:47:06.667Z",
    "modifiedAt": "2017-05-29T20:47:06.667Z",
    "summary": "Congratulations to Manuel Díez and the whole Diesco team for being named 2017 Private Company Advisory Board Of The Year by Private...",
    "description": "Five of the nation’s top company private boards were named as winners of Private Company Director, Directors and Boards and Family Business magazines’ second an",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/2017/05/29/lodestone-global-client-wins-2017-private-company-board-of-the-year",
      "/post/2017/05/29/lodestone-global-client-wins-2017-private-company-board-of-the-year",
      "/blog/2017/05/29/lodestone-global-client-wins-2017-private-company-board-of-the-year"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_62649eb6582946829294004a28855fd6~mv2.jpg",
      "width": 640,
      "height": 320
    },
    "originalPostId": "fa204348-f922-47d8-9e7a-c8dd576c1c8e",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "top-10-questions-high-performance-directors-ask-before-joining-a-board",
    "title": "Top 10 Questions High Performance Directors Ask Before Joining A Board",
    "category": "Director recruitment",
    "date": "2017-04-24",
    "publishedAt": "2017-04-24T13:28:41.503Z",
    "modifiedAt": "2017-04-24T13:28:41.503Z",
    "summary": "How do you know you are ready for a High Performance Board Member? What questions would they ask about your business? Are you...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2017/04/24/top-10-questions-high-performance-directors-ask-before-joining-a-board",
      "/post/2017/04/24/top-10-questions-high-performance-directors-ask-before-joining-a-board",
      "/blog/2017/04/24/top-10-questions-high-performance-directors-ask-before-joining-a-board"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_cd10c340a25946cda37f944ded7cce71~mv2_d_5616_3744_s_4_2.jpg",
      "width": 5616,
      "height": 3744
    },
    "originalPostId": "e079df9e-c05b-47f0-93b3-7c3804beb280",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "boards-drive-profit-the-diesco-story",
    "title": "Boards Drive Profit: The Diesco Story",
    "category": "Enterprise value",
    "date": "2017-03-14",
    "publishedAt": "2017-03-14T17:42:27.701Z",
    "modifiedAt": "2017-03-14T17:42:27.701Z",
    "summary": "Learn how Diesco used a Board to focus on key strategic goals and drive results. Over a two-year period, after implementing their Board,...",
    "description": "Learn how Diesco used a Board to focus on key strategic goals and drive results. Over a two-year period, after implementing their Board, earnings at the company",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2017/03/14/boards-drive-profit-the-diesco-story",
      "/post/2017/03/14/boards-drive-profit-the-diesco-story",
      "/blog/2017/03/14/boards-drive-profit-the-diesco-story"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_5f554e1b269c4f3b9596cbd8b099e598~mv2.jpg",
      "width": 2482,
      "height": 1140
    },
    "originalPostId": "14cb9e6e-47b6-4dc1-aee8-6e86960ebdd4",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "finding-great-directors-for-your-board",
    "title": "Finding Great Directors For Your Board",
    "category": "Director recruitment",
    "date": "2017-02-13",
    "publishedAt": "2017-02-13T16:08:44.402Z",
    "modifiedAt": "2017-02-13T16:08:44.402Z",
    "summary": "What is the best way to find and recruit talented directors? Remember, strategy precedes governance. Don't take the easy path and simply...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2017/02/13/finding-great-directors-for-your-board",
      "/post/2017/02/13/finding-great-directors-for-your-board",
      "/blog/2017/02/13/finding-great-directors-for-your-board"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_ee39d29c8e1a44c7acb85f4ebf64bb12~mv2.jpg",
      "width": 1307,
      "height": 812
    },
    "originalPostId": "774f5a81-5a16-47ba-89b8-91931ea407ac",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "who-do-i-want-on-my-board-of-directors",
    "title": "Who Do I Want On My Board Of Directors?",
    "category": "Director recruitment",
    "date": "2017-01-26",
    "publishedAt": "2017-01-26T18:28:15.701Z",
    "modifiedAt": "2017-01-26T18:28:15.701Z",
    "summary": "Choosing the right board members is one of the most challenging tasks a company can face. There is an art to assembling a team of...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2017/01/26/who-do-i-want-on-my-board-of-directors",
      "/post/2017/01/26/who-do-i-want-on-my-board-of-directors",
      "/blog/2017/01/26/who-do-i-want-on-my-board-of-directors"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_efd731df03ae46d4b6b1a479dfcceef4~mv2.jpg",
      "width": 1450,
      "height": 898
    },
    "originalPostId": "969a4c20-4371-42e5-a519-e994a5acabc3",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "how-much-should-i-pay-the-directors-on-my-board",
    "title": "How Much Should I Pay The Directors On My Board?",
    "category": "Board compensation",
    "date": "2016-11-26",
    "publishedAt": "2016-11-26T20:44:02.883Z",
    "modifiedAt": "2016-11-26T20:44:02.883Z",
    "summary": "In this article we examine recent data that highlights how much you should compensate your board members. Read the full article in Forbes...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/11/26/how-much-should-i-pay-the-directors-on-my-board",
      "/post/2016/11/26/how-much-should-i-pay-the-directors-on-my-board",
      "/blog/2016/11/26/how-much-should-i-pay-the-directors-on-my-board"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_8d28192b02df4ef18ec678d5e6c56011~mv2.jpg",
      "width": 1717,
      "height": 634
    },
    "originalPostId": "f15d3fca-111f-40a6-829e-52a83f1c9eb1",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "board-of-directors-fiduciary-or-advisory",
    "title": "Board of Directors - Fiduciary or Advisory",
    "category": "Board formation",
    "date": "2016-10-31",
    "publishedAt": "2016-10-31T15:50:42.723Z",
    "modifiedAt": "2016-10-31T15:50:42.723Z",
    "summary": "In this article we examine what Advisory Boards can learn from Fiduciary Board best practices. Read the full article on Forbes here",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/10/31/board-of-directors-fiduciary-or-advisory",
      "/post/2016/10/31/board-of-directors-fiduciary-or-advisory",
      "/blog/2016/10/31/board-of-directors-fiduciary-or-advisory"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_e965604adc04416b8ffcc66f62c9ac65~mv2.jpg",
      "width": 1474,
      "height": 1086
    },
    "originalPostId": "e3072db8-ed8b-4f63-9379-ead9aa58e9fb",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "can-a-board-of-directors-really-help-my-company",
    "title": "Can A Board Of Directors Really Help My Company?",
    "category": "Enterprise value",
    "date": "2016-10-16",
    "publishedAt": "2016-10-16T15:22:36.499Z",
    "modifiedAt": "2016-10-16T15:22:36.499Z",
    "summary": "What should you expect from a high performance board? What role does a board play in the strategic planning of your business? Read the...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/10/16/can-a-board-of-directors-really-help-my-company",
      "/post/2016/10/16/can-a-board-of-directors-really-help-my-company",
      "/blog/2016/10/16/can-a-board-of-directors-really-help-my-company"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_ab3cd8bb7b2c4818963adcede957f83f~mv2.png",
      "width": 976,
      "height": 831
    },
    "originalPostId": "db721d33-5a48-4169-bc84-28204293fbc5",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "if-i-create-a-board-of-directors-am-i-still-in-charge",
    "title": "If I Create A Board Of Directors, Am I Still In Charge?",
    "category": "Board formation",
    "date": "2016-09-26",
    "publishedAt": "2016-09-26T16:26:03.179Z",
    "modifiedAt": "2016-09-26T16:26:03.179Z",
    "summary": "In this article we examine one of the primary concerns CEOs have before building a board – loss of control. Phil had put together a great...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/09/26/if-i-create-a-board-of-directors-am-i-still-in-charge",
      "/post/2016/09/26/if-i-create-a-board-of-directors-am-i-still-in-charge",
      "/blog/2016/09/26/if-i-create-a-board-of-directors-am-i-still-in-charge"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_1924de59fa694759830d78391cb28bfb~mv2.png",
      "width": 1478,
      "height": 772
    },
    "originalPostId": "7883a9bd-732e-4d87-9332-04efd4e3ae87",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "how-big-does-a-company-have-to-be-before-it-needs-a-board",
    "title": "How Big Does A Company Have To Be Before It Needs A Board?",
    "category": "Board formation",
    "date": "2016-09-07",
    "publishedAt": "2016-09-07T14:45:00.133Z",
    "modifiedAt": "2016-09-07T14:45:00.133Z",
    "summary": "When to build a board? It is not revenues or the number of employees that matter. It’s complexity! Read the full article on the Forbes...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/09/07/how-big-does-a-company-have-to-be-before-it-needs-a-board",
      "/post/2016/09/07/how-big-does-a-company-have-to-be-before-it-needs-a-board",
      "/blog/2016/09/07/how-big-does-a-company-have-to-be-before-it-needs-a-board"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_2a5ddc7b06684d2dbf84ab853a7a0284~mv2.png",
      "width": 1638,
      "height": 1075
    },
    "originalPostId": "ea55f082-f9ef-4e98-9692-64af23be2ac7",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "do-private-boards-increase-financial-performance",
    "title": "Do Private Boards Increase Financial Performance?",
    "category": "Enterprise value",
    "date": "2016-08-06",
    "publishedAt": "2016-08-06T14:42:08.527Z",
    "modifiedAt": "2016-08-06T14:42:08.527Z",
    "summary": "Boards have a direct link to a company’s financial performance. New data shows that over 80% of companies saw increased EBITDA after...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/08/06/do-private-boards-increase-financial-performance",
      "/post/2016/08/06/do-private-boards-increase-financial-performance",
      "/blog/2016/08/06/do-private-boards-increase-financial-performance"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_23d8540e81d542429a877e1fe26abf18~mv2.png",
      "width": 1209,
      "height": 767
    },
    "originalPostId": "d6807691-e75c-4325-9196-764506278868",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "is-it-worth-having-a-board-of-directors",
    "title": "Is It Worth Having A Board Of Directors?",
    "category": "Enterprise value",
    "date": "2016-07-23",
    "publishedAt": "2016-07-23T15:54:12.166Z",
    "modifiedAt": "2016-07-23T15:54:12.166Z",
    "summary": "Do you know everything? Do you have all the answers? In this Forbes article we explore the qualitative value that boards can deliver to...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/07/23/is-it-worth-having-a-board-of-directors",
      "/post/2016/07/23/is-it-worth-having-a-board-of-directors",
      "/blog/2016/07/23/is-it-worth-having-a-board-of-directors"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_a30b4e23ac5f47c88b1830159b611d53~mv2.png",
      "width": 895,
      "height": 722
    },
    "originalPostId": "5e48c36c-bbb4-46f6-b0ee-fc2fb3ce97ca",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "building-an-optimal-board-of-directors",
    "title": "Building an Optimal Board of Directors",
    "category": "Board formation",
    "date": "2016-06-20",
    "publishedAt": "2016-06-20T13:48:56.059Z",
    "modifiedAt": "2016-06-20T13:48:56.059Z",
    "summary": "Lodestone Global was featured in YPO's Ignite Magazine published in May 2016.  The story focused on building an optimal board of...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/06/20/building-an-optimal-board-of-directors",
      "/post/2016/06/20/building-an-optimal-board-of-directors",
      "/blog/2016/06/20/building-an-optimal-board-of-directors"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_1d8b422f837143eeab28092155060e23~mv2.png",
      "width": 717,
      "height": 666
    },
    "originalPostId": "a9732752-3091-4c34-a113-aa57c8472f84",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "good-wsj-article-on-boards-at-sp-500-companies",
    "title": "GOOD WSJ ARTICLE ON BOARDS AT S&P 500 COMPANIES",
    "category": "Board formation",
    "date": "2016-03-25",
    "publishedAt": "2016-03-25T15:20:53.663Z",
    "modifiedAt": "2016-03-25T15:20:53.663Z",
    "summary": "See how the biggest U.S. companies stack up in terms of board pay, independence and women directors. The Wall Street Journal has analyzed...",
    "minutesToRead": 1,
    "legacyPaths": [
      "/single-post/2016/03/25/good-wsj-article-on-boards-at-sp-500-companies",
      "/post/2016/03/25/good-wsj-article-on-boards-at-sp-500-companies",
      "/blog/2016/03/25/good-wsj-article-on-boards-at-sp-500-companies"
    ],
    "originalPostId": "9a5280c9-ae10-4183-9e71-142f30edafe4",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d",
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": true,
    "relatedPostIds": []
  },
  {
    "slug": "private-company-qa-with-private-company-director-magazine",
    "title": "Private Company Q&A with Private Company Director Magazine",
    "category": "Board compensation",
    "date": "2015-11-12",
    "publishedAt": "2015-11-12T17:19:00Z",
    "modifiedAt": "2015-11-12T17:19:00Z",
    "summary": "Bernie Tenenbaum sits down for an interview with Private Company Director Magazine to talk about private company governance and his board...",
    "minutesToRead": 4,
    "legacyPaths": [
      "/single-post/2015/11/12/private-company-qa-with-private-company-director-magazine",
      "/post/2015/11/12/private-company-qa-with-private-company-director-magazine",
      "/blog/2015/11/12/private-company-qa-with-private-company-director-magazine"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_94349879c2164c17aa9c0d3d5dcaadb6.jpg",
      "width": 1050,
      "height": 807
    },
    "originalPostId": "f537cf51-ce29-4a65-887e-d865c8e2ca3d",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9eec07c3-4e8a-4f0b-9678-1b267a997ce3"
    ],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  },
  {
    "slug": "private-company-compensation-grows-8-in-2015-new-data-shows",
    "title": "Private Company Compensation Grows 8% in 2015, New Data Shows",
    "category": "Board compensation",
    "date": "2015-10-10",
    "publishedAt": "2015-10-10T16:33:00Z",
    "modifiedAt": "2015-10-10T16:33:00Z",
    "summary": "Lodestone Global published the results of their 2015 survey today.   Please contact us at info@lodestoneglobal.com if you would like...",
    "minutesToRead": 2,
    "legacyPaths": [
      "/single-post/2015/10/10/private-company-compensation-grows-8-in-2015-new-data-shows",
      "/post/2015/10/10/private-company-compensation-grows-8-in-2015-new-data-shows",
      "/blog/2015/10/10/private-company-compensation-grows-8-in-2015-new-data-shows"
    ],
    "image": {
      "src": "https://static.wixstatic.com/media/c3325c_2f01b373a29a4ed38ba8601173a12c37.jpg",
      "width": 964,
      "height": 654
    },
    "originalPostId": "866b0da0-d181-4108-8811-7f0c17cf5a4b",
    "originalAuthorId": "3238255c-0282-41b5-b33d-028565876150",
    "originalCategoryIds": [
      "9c17887d-4306-4d78-bb3c-589a45b89a1d"
    ],
    "hashtags": [],
    "archiveEntry": false,
    "relatedPostIds": []
  }
];

export function getArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Remove LinkedIn hashtag blocks, empty paragraphs, and known artifacts. */
function cleanHtml(html: string): string {
  return html
    .replace(
      /<p>(?:\s|&nbsp;|<a[^>]*linkedin\.com\/feed\/hashtag[^>]*>[^<]*<\/a>)+<\/p>/gi,
      "",
    )
    .replace(/<p>(?:\s|&nbsp;)*<\/p>/gi, "")
    .trim();
}

/** Loads and cleans an article body. Server-only (reads from disk). */
export function getArticleHtml(slug: string): string {
  const file = path.join(process.cwd(), "content", "insights", `${slug}.html`);
  return fs.readFileSync(file, "utf8").trim();
}

/** Article metadata as Insight cards for listings. */
export const articleCards: Insight[] = articles.map((a) => ({
  category: a.category,
  title: a.title,
  date: new Date(a.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  summary: a.summary,
  href: `/insights/${a.slug}`,
  cta: "Read more",
  image: a.image,
}));
