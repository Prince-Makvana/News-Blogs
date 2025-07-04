import React, { useContext, useEffect, useState } from 'react'
import Newsitm from './Newsitm'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import { DarkModeContext } from "./DarkModeContext";



const News = ({ categoryprob }) => {

    const { isdark, setIsdark } = useContext(DarkModeContext);

    const [isDataLoading, setIsDataLoading] = useState(false);
    // let articles = [
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Patrick Svitek",
    //         "title": "Whitmer just got what she wanted from Trump. But she’s making a risky bet. - The Washington Post",
    //         "description": "The Democratic governor from Michigan found success in lobbying Trump to bring a new fighter mission to an Air National Guard base. But not everyone in her party is happy.",
    //         "url": "https://www.washingtonpost.com/politics/2025/04/29/whitmer-trump-selfridge-announcement-democrats-2028/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/46235KW2O73HSM7BWRITYPHWLI_size-normalized.jpg&w=1440",
    //         "publishedAt": "2025-04-30T05:24:49Z",
    //         "content": "President Donald Trump hugged Gov. Gretchen Whitmer upon landing Tuesday in Michigan to announce a new fighter mission at Selfridge Air National Guard Base. He lavished praise on her during a speech … [+7154 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "ABC News",
    //         "title": "Trump administration removes Doug Emhoff from board of US Holocaust Memorial Museum - ABC News",
    //         "description": "",
    //         "url": "https://abcnews.go.com/Politics/trump-administration-removes-doug-emhoff-board-us-holocaust/story?id\\\\u003d121297023",
    //         "urlToImage": null,
    //         "publishedAt": "2025-04-30T04:32:36Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "Paul Wiseman, Anne D'Innocenzio, Christopher Rugaber",
    //         "title": "Trump’s tariffs loom over the economy as shipments from China fall - AP News",
    //         "description": "American businesses are cancelling orders from China, postponing expansion plans and hunkering down to see what trade policy surprises President Donald Trump plans to spring on them next. The president’s massive and unpredictable taxes on imports seems likely…",
    //         "url": "https://apnews.com/article/trump-tariff-economy-recession-china-imports-trade-8d90bb37735e833c43a7b7a9d5a0b9a2",
    //         "urlToImage": "https://dims.apnews.com/dims4/default/6312dc9/2147483647/strip/true/crop/8064x4536+0+420/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F65%2F36%2Fdee2f6b45c0180d57e0e1f81fb6e%2F2065660afc6848e789dbbe80dd195778",
    //         "publishedAt": "2025-04-30T04:01:00Z",
    //         "content": "WASHINGTON (AP) American businesses are cancelling orders from China, postponing expansion plans and hunkering down to see what trade policy surprises President Donald Trump plans to spring on them n… [+6969 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": null,
    //         "title": "Detroit Pistons vs. New York Knicks Live Score and Stats - April 29, 2025 Gametracker - CBS Sports",
    //         "description": "Get real-time NBA Basketball coverage and scores as Detroit Pistons takes on New York Knicks. We bring you the latest game previews, live stats, expert picks and recaps on CBSSports.com",
    //         "url": "https://www.cbssports.com/nba/gametracker/recap/NBA_20250429_DET@NY/",
    //         "urlToImage": "https://sportsfly.cbsistatic.com/fly-0949/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
    //         "publishedAt": "2025-04-30T03:33:45Z",
    //         "content": "NEW YORK (AP) The players the Pistons put together to turn a 14-win team into a playoff squad aren't ready to split up for the summer.\r\nInstead, they're going back to Detroit together - and maybe bac… [+2814 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "CBS Sports"
    //         },
    //         "author": null,
    //         "title": "Orlando Magic vs. Boston Celtics Live Score and Stats - April 29, 2025 Gametracker - CBS Sports",
    //         "description": "Get real-time NBA Basketball coverage and scores as Orlando Magic takes on Boston Celtics. We bring you the latest game previews, live stats, expert picks and recaps on CBSSports.com",
    //         "url": "https://www.cbssports.com/nba/gametracker/recap/NBA_20250429_ORL@BOS/",
    //         "urlToImage": "https://sportsfly.cbsistatic.com/fly-0949/bundles/sportsmediacss/images/fantasy/default-article-image-large.png",
    //         "publishedAt": "2025-04-30T03:14:44Z",
    //         "content": "BOSTON (AP) When Magic star Paolo Banchero went to the bench with five fouls, the Boston Celtics pulled away and cruised into the Eastern Conference semifinals.\r\nJayson Tatum had 35 points, 10 assist… [+2716 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "BBC News"
    //         },
    //         "author": null,
    //         "title": "Harvard head apologises as scathing reports on campus prejudice released - BBC",
    //         "description": "The university pledges to review its policies, though the proposals appear to fall short of White House demands.",
    //         "url": "https://www.bbc.com/news/articles/c0eljwdp545o",
    //         "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9962/live/6170e720-253c-11f0-8625-d567e193950b.jpg",
    //         "publishedAt": "2025-04-30T02:46:52Z",
    //         "content": "Harvard University President Alan Garber has apologised following the release of internal reports into antisemitic and anti-Muslim prejudice at America's oldest university.\r\nThe reports included test… [+2328 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Adrián Blanco Ramos, Anumita Kaur, Chico Harlan",
    //         "title": "Cause of Spain power outage still unclear after mass blackout, travel chaos - The Washington Post",
    //         "description": "Red Eléctrica, Spain’s electricity grid operator, ruled out a cyberattack, human error or unusual weather. Experts say it could take weeks to determine the cause.",
    //         "url": "https://www.washingtonpost.com/world/2025/04/29/spain-power-outage-cause-blackouts-travel-chaos/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QN5RVBRIJVV4JKA4ME5J4HI55E_size-normalized.jpg&w=1440",
    //         "publishedAt": "2025-04-30T02:10:45Z",
    //         "content": "MADRID Life in Spain and Portugal began to return to normal Tuesday, a day after a massive power outage paralyzed the Iberian Peninsula, leaving governments, companies and experts scrambling to figur… [+4395 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "NPR"
    //         },
    //         "author": "",
    //         "title": "Trump, back in rally mode, marks 100 days in office with boisterous Michigan speech - NPR",
    //         "description": "Trump used his time on stage to luxuriate in the crowd's adoration, blame Joe Biden for various national problems, and insist that he, as president, is not getting the credit he deserves.",
    //         "url": "https://www.npr.org/2025/04/29/nx-s1-5380216/trump-100-days-michigan-rally",
    //         "urlToImage": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6000x3375+0+335/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F13%2F1a%2F15fcf95f485e823ae1feecca3684%2Fgettyimages-2212645692.jpg",
    //         "publishedAt": "2025-04-30T02:03:40Z",
    //         "content": "Donald Trump's Michigan rally celebrating the 100th day of his second term wasn't a campaign rally, but it resembled one in many ways. He spoke for almost an hour and a half, falsely claimed to have … [+4358 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "associated-press",
    //             "name": "Associated Press"
    //         },
    //         "author": "John O'connor",
    //         "title": "Illinois town mourns the 4 youngsters killed when a car barreled through their after-school camp - AP News",
    //         "description": "Residents of a small central Illinois city are mourning the loss of three children and a teenager who were killed in a startling vehicle collision in a building that hosts a popular after-school camp. Authorities say it appears the crash Monday, in which a ca…",
    //         "url": "https://apnews.com/article/chatham-illinois-after-school-building-crash-bba11439918ba4324eaf35231e0778c0",
    //         "urlToImage": "https://dims.apnews.com/dims4/default/cae920e/2147483647/strip/true/crop/5600x3150+0+292/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1b%2F51%2Ffeebd53819cd01a9bc9c6026ffee%2F043c24f55d2e4c009f163d34cd4c6a95",
    //         "publishedAt": "2025-04-30T01:42:00Z",
    //         "content": "CHATHAM, Ill. (AP) Residents of a small central Illinois city on Tuesday mourned the loss of three children and a teenager killed in a startling crash in which a car barreled through a building used … [+6810 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "bleacher-report",
    //             "name": "Bleacher Report"
    //         },
    //         "author": "Scott Polacek",
    //         "title": "Pacers Stun Fans with OT Comeback as Haliburton Game-Winner Eliminates Giannis, Bucks - Bleacher Report",
    //         "description": "",
    //         "url": "https://bleacherreport.com/articles/25191677-pacers-stun-fans-ot-comeback-haliburton-game-winner-eliminates-giannis-bucks",
    //         "urlToImage": "https://gsp-image-cdn.wmsports.io/cms/prod/bleacher-report/getty_images/2212097963_large_image.jpg?w=3800&h=2000",
    //         "publishedAt": "2025-04-30T01:19:14Z",
    //         "content": "Tyrese Haliburton, Indiana hero.\r\nThe Indiana Pacers guard spearheaded his team's stunning comeback to eliminate the Milwaukee Bucks in the first round for the second consecutive season. He scored fi… [+2212 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "abc-news",
    //             "name": "ABC News"
    //         },
    //         "author": "ABC News",
    //         "title": "FULL TRANSCRIPT: Trump's exclusive 100 days broadcast interview with ABC News - ABC News",
    //         "description": "",
    //         "url": "https://abcnews.go.com/US/full-transcript-trumps-exclusive-100-days-broadcast-interview/story?id\\\\u003d121291672",
    //         "urlToImage": null,
    //         "publishedAt": "2025-04-30T01:03:34Z",
    //         "content": null
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "9to5google.com"
    //         },
    //         "author": "Ben Schoon",
    //         "title": "Google teases Pixel display improvement, likely starting with Pixel 10 - 9to5Google",
    //         "description": "A shortcoming of Pixel displays thus far may be addressed going forward, as Google is teasing better PWM dimming rates...",
    //         "url": "http://9to5google.com/2025/04/29/google-teases-pixel-display-improvement-likely-starting-with-pixel-10/",
    //         "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/08/google-pixel-9-pro-xl-3-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
    //         "publishedAt": "2025-04-30T00:45:00Z",
    //         "content": "A shortcoming of Pixel displays thus far may be addressed going forward, as Google is teasing better PWM dimming rates in the future, likely starting with the upcoming Pixel 10.\r\nThe PWM dimming rate… [+2096 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "The Action Network"
    //         },
    //         "author": "Alex Hinton",
    //         "title": "Clippers vs Nuggets Prediction, Odds: NBA Playoffs Game 5 Picks - Action Network",
    //         "description": "Read for our Clippers vs Nuggets predictions, picks, and odds for Game 5 of their first round NBA Playoff series on Tuesday, April 29.",
    //         "url": "https://www.actionnetwork.com/nba/clippers-vs-nuggets-prediction-odds-pick-for-nba-playoffs-game-5-on-tuesday-april-29-qs",
    //         "urlToImage": "https://images.actionnetwork.com/blog/2025/04/clippersnuggets429.jpg",
    //         "publishedAt": "2025-04-30T00:44:00Z",
    //         "content": "The Los Angeles Clippers (2-2) and Denver Nuggets (2-2) will face off in Game 5 of their first round NBA Playoff series tonight. Tipoff is set for 10 p.m. ET at Ball Arena in Denver, Colorado. The ga… [+3955 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "techcrunch",
    //             "name": "TechCrunch"
    //         },
    //         "author": "Maxwell Zeff",
    //         "title": "Meta’s LlamaCon was all about undercutting OpenAI - TechCrunch",
    //         "description": "Meta's LlamaCon was all about undercutting OpenAI.",
    //         "url": "https://techcrunch.com/2025/04/29/metas-llamacon-was-all-about-undercutting-openai/",
    //         "urlToImage": "https://techcrunch.com/wp-content/uploads/2025/04/LlamaCon.jpg?resize=1200,900",
    //         "publishedAt": "2025-04-30T00:15:45Z",
    //         "content": "On Tuesday, Meta held its first-ever AI developer conference, LlamaCon, at its Menlo Park, California headquarters. The company announced the launch of a consumer-facing Meta AI chatbot app, which wi… [+3016 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": null,
    //             "name": "Theregister.com"
    //         },
    //         "author": "Thomas Claburn",
    //         "title": "Trump admin freaks out over mere suggestion Amazon was going to show tariff impact on prices - theregister.com",
    //         "description": "World War Fee: Revealing import taxes would be 'hostile and political' to Dear Leader",
    //         "url": "https://www.theregister.com/2025/04/30/trump_outreach_to_bezos_shows/",
    //         "urlToImage": "https://regmedia.co.uk/2025/04/29/shutterstock_amazon_bezos.jpg",
    //         "publishedAt": "2025-04-30T00:13:00Z",
    //         "content": "World War Fee On Tuesday, White House Press Secretary Karoline Leavitt denounced Amazon after it was reported the tech giant intended to show how much President Trump's import tariffs would inflate t… [+3132 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "the-washington-post",
    //             "name": "The Washington Post"
    //         },
    //         "author": "Samantha Chery",
    //         "title": "Beyoncé’s daughters Blue Ivy and Rumi take on the Cowboy Carter Tour - The Washington Post",
    //         "description": "Beyoncé put her daughters Blue Ivy and Rumi front and center as she launched her Cowboy Carter Tour in Los Angeles.",
    //         "url": "https://www.washingtonpost.com/style/2025/04/29/blue-ivy-beyonce-cowboy-carter-tour-rumi/",
    //         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/NDRCGAMPMBDLFJI5BZB7L45AJ4_size-normalized.JPG&w=1440",
    //         "publishedAt": "2025-04-29T22:13:40Z",
    //         "content": "As her Cowboy Carter Tour hit the road, Beyoncé put her two daughters front and center, turning the country-infused concert into a celebration of their mother-daughter bond.\r\nDuring the sold-out Mond… [+2534 chars]"
    //     },
    //     {
    //         "source": {
    //             "id": "nbc-news",
    //             "name": "NBC News"
    //         },
    //         "author": "Kimmy Yam, Chloe Atkins",
    //         "title": "Visa revocations can now lead to legal status terminations, according to internal memo - NBC News",
    //         "description": "Immigration and Customs Enforcement has indicated it could start terminating a person’s legal status because of visa revocation.",
    //         "url": "https://www.nbcnews.com/news/us-news/visa-revocations-legal-status-terminations-ice-rcna203562",
    //         "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/210806-stanford-campus-mn-1620-adbd61.jpg",
    //         "publishedAt": "2025-04-29T21:25:21Z",
    //         "content": "Immigration and Customs Enforcement has indicated it could start terminating a persons legal status because of visa revocation.\r\nAn internal memo to all Student and Exchange Visitor Program personnel… [+4136 chars]"
    //     }
    // ]

    const [articles, setArticle] = useState([]);



    const [page, setPage] = useState(1);
    const [totres, setTotres] = useState(0);

    const getdata = async () => {
        setIsDataLoading(true);
        try {
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${categoryprob}&apiKey=30fcf821d9bb4944a93c7240b36da6fb&page=${page}&pageSize=9`);
            const data = await res.json();
            setArticle([...articles, ...data.articles]);
            setTotres(data.totalResults);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setIsDataLoading(false);
        }
    };

    useEffect(() => {
        console.log(isdark);
        
    }, [isdark]);

    useEffect(() => {
        getdata();
        console.log(categoryprob);
        console.log(articles.length);
        console.log(totres);

    }, [page])

    useEffect(() => {
        setArticle([]);
    }, [categoryprob]);

    useEffect(() => {
        if (articles.length === 0) {
            getdata();
        }
    }, [articles]);

    const fetchMoreData = () => {
        console.log("loaded");
        setPage(page + 1);
    };

    const hendleprevious = async () => {
        console.log("PREV");
        setPage(page - 1);
    }
    const hendlenext = async () => {
        console.log("Next");
        setPage(page + 1);
    }

    return (
        <div className={`container-fluid my-3 ${isdark?"bg-dark":""}`}>
            <h3 className={`text-center mt-5 mb-3 pt-3 ${isdark?" text-white":""}`}>News Top-headline on {categoryprob}</h3>
            {isDataLoading && <Loading />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length + 1 !== totres}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((art, index) => (
                            <div className="col-md-4" key={index}>
                                <Newsitm title={art.title ? art.title.slice(0, 45) : ""} disc={art.description ? art.description.slice(0, 88) : ""} imgUrl={art.urlToImage} newsUrl={art.url} author={art.author ? art.author : "unKnown"} date={art.publishedAt} source={art.source.name.slice(0, 10)} />
                            </div>
                        ))}
                    </div>
                </div>
            </InfiniteScroll>
            <div className="container d-flex justify-content-between my-5">
                <button disabled={page <= 1} type="button" className="btn btn-primary" onClick={hendleprevious}>&larr;Previous</button>
                <button disabled={page + 1 > Math.ceil(totres / 9)} type="button" className="btn btn-primary" onClick={hendlenext}>Next&rarr;</button>
            </div>
        </div>
    )
}

export default News
