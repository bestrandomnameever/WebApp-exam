const mongoose = require('mongoose');
const Manga = mongoose.model('Manga');
const User = mongoose.model('User');

exports.seedMangas = () => {
    //Remove all manga
    Manga.remove(function (err, removed) {

    });

    const mangas = [
        {

            "alternativeTitles": [],
            "artist": "Maybe",
            "author": "Maybe",
            "categories": [
                "Adapted to Anime",
                "Amnesia",
                "Ghost",
                "Protagonist",
                "Ghost/s",
                "Hidden Past",
                "Human-Nonhuman Relationship",
                "Paranormal",
                "Investigator",
                "Sacrifice/s",
                "Strong Female Lead",
                "Unorthodox Female Love Interest"
            ],
            "coverUrl": "https://mcd.iosphe.re/r/41618/1/front/a/",
            "genres": [
                "Comedy",
                "Romance",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "A young woman, by some strange occurrence, was left to die alone in the former building of the Academy for Sincere Teachings. Mysteriously, there is one person who can see her in ghost form: Niiya Teiichi, a freshman. Now they both seek to find out the reasoning behind her death, and what could have caused it.",
            "title": "Tasogare Otome x Amnesia",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "SEO Kouji",
            "author": "SEO Kouji",
            "categories": [
                "Adapted to Anime",
                "Angst",
                "Beautiful Female Lead",
                "Childhood Friend/s",
                "Long-Distance Relationship",
                "Love Triangle/s",
                "Misunderstanding/s",
                "Naive Male Lead",
                "Post-Secondary School",
                "Student/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/r/31454/1/front/a/",
            "genres": [
                "Drama",
                "Romance",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "Yuzuki Eba has mysteriously decided to go to high school in the countryside. But despite Haruto Kirishima's objections, she is living in his home. Now he has to put up with a freeloading city girl and even worse, make sure Nanami Kanzaki, the girl he likes, doesn't get the wrong idea!The story's setting is based on author Seo Kouji's hometown.",
            "title": "Kimi no Iru Machi",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "AMAZUME Ryuta",
            "author": "AMAZUME Ryuta",
            "categories": [
                "Appearance Different from Actual Age",
                "Borderline H",
                "Cohabitation",
                "Couple Growth",
                "Impotency",
                "Job Hunting",
                "Older Female Younger Male",
                "Post-Secondary School",
                "Small Breasts",
                "Widow / Widower"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/690/1/front/a/",
            "genres": [
                "Comedy",
                "Romance",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "The woman Tsutomu encounters in college was older and smaller than he is, and for some reason, looks like the same girl in his dreams. The heart-pounding love affair between him and the \"older woman\" begins.",
            "title": "Toshiue no Hito",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "HATTORI Mitsuru",
            "author": "HATTORI Mitsuru",
            "categories": [
                "Adapted to Anime",
                "Childhood Friend/s",
                "Cohabitation",
                "Dead Pet",
                "Love Triangle/s",
                "Resurrection",
                "Tragic Accident/s",
                "Undead",
                "Unorthodox Female Love Interest",
                "Zombie/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/49450/1/front/a/",
            "genres": [
                "Drama",
                "Romance",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "Furuya's obsessed with zombies. He collects any figurines, watches any movie, and plays any game with the living dead, and is even only interested in zombie girls. When his cat dies, Furuya begins trying to raise it from the dead using an ancient book of the occult he bought from a shop. But what will happen when he sees the idol of a nearby all girl's school walking close to where he conducts his experiment, wishing to die and be reborn as a different person?",
            "title": "Sankarea",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "KAGESAKI Yuna",
            "author": "KAGESAKI Yuna",
            "categories": [
                "Adapted to Anime",
                "Clumsy Protagonist",
                "Couple",
                "Growth",
                "Crybaby Protagonist",
                "Family",
                "First Love",
                "Human-Nonhuman Relationship",
                "Paranormal Romance",
                "Single Parent",
                "Vampire/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/149/1/front/a/",
            "genres": [
                "Comedy",
                "Romance",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "Karin is a cute little girl who also happens to be a vampire... with a twist. Once a month, she experiences intense bleeding from her nose-we're talking gushers! In other words, she's a vamp with blood to spare, so rather than stealing blood from humans she actually gives her blood to them. If done right, this can be an extremely positive experience that benefits the \"victim\" as much as the vampire. The problem is that Karin never seems to do things right!",
            "title": "Karin",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "WATASHIYA Kaworu",
            "author": "WATASHIYA Kaworu",
            "categories": [
                "Adapted to Anime",
                "Age Gap",
                "Dead Family Member/s",
                "Elementary School",
                "Forbidden Love",
                "Glasses-Wearing Male Lead",
                "Guardian Relationship",
                "Mature Child",
                "Student-Teacher Relationship",
                "Student/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/1930/1/front/a/",
            "genres": [
                "Drama",
                "Romance",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "Daisuke is a 23 year-old new schoolteacher. He ends up being put in charge of a 3rd grade elementary school class since the previous teacher quit, and in that class there's a girl who's quite a troublemaker--Rin Kokonoe. You could call her a masegaki (used to describe a kid that acts more like an adult in some ways), and she's also part tsundere (though more dere than tsun).",
            "title": "Kodomo no Jikan",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "刻どキ",
                "Tokidoki"
            ],
            "artist": "KOMI Naoshi",
            "author": "KOMI Naoshi",
            "categories": [
                "High-School Student/s",
                "Love Interest Dies",
                "Music",
                "Summer",
                "Terminal Illness"
            ],
            "coverUrl": "http://www.anime-planet.com/images/manga/covers/tokidoki-20161.jpg?t=1478289382",
            "genres": [
                "Drama",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "What do you spend the time left of your life when it's measured in heartbeats? This is the story of Hato Iijima and Hatsu Takagi, connected to each other by a rare disease called \"Tempocardy\".",
            "title": "Toki Doki",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "Niito",
            "author": "ASANO Hajime",
            "categories": [
                "Adapted to Anime",
                "Based on a Novel",
                "Butler/s",
                "Cross-dressing",
                "Fan Club",
                "Phobia/s",
                "Rich Female Lead",
                "Sadist/s",
                "Secret Identity",
                "Strong Female Lead"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/52913/1/front/a/",
            "genres": [
                "Comedy",
                "Romance",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "Konoe Subaru, a classmate of Sakamachi Kinjirou, \n            has been serving as the butler of Suzutsuki Kanade in school. \n            Due to an accident, Sakamachi discovers Konoe's secret...that he \n            is actually a she!? Apparently she will be removed from her position \n            if anyone at school finds out. What will unfold from this chain of events?",
            "title": "Mayo Chiki",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "SASUGA Kei",
            "author": "SASUGA Kei",
            "categories": [
                "Beautiful Female Lead",
                "Character Growth",
                "Coworker/s",
                "Dating Advice",
                "Friends Become Lovers",
                "Love Polygon",
                "Misunderstanding/s",
                "Slow Romance",
                "Tragic Past",
                "Weak Male Lead"
            ],
            "coverUrl": "https://mcd.iosphe.re/r/45881/1/front/a/",
            "genres": [
                "Drama",
                "Romance",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "Good Ending follows the main character Utsumi's interactions with Kurokawa Yuki,\n             a member of the school tennis team, in order for Utsumi to confess his feelings to the captain of the tennis team.\n             It is implied that the title of the manga is derived from the \"good endings\" that are achieved in visual novels.",
            "title": "GE - Good Ending",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "AKI Eda",
            "author": "AKI Eda",
            "categories": [
                "Alcohol",
                "Apartment Life",
                "Career Woman",
                "Finding Love Again",
                "Friends Become Lovers",
                "Friendship",
                "Glasses-Wearing Male Lead",
                "Male Lead Falls in Love First",
                "Office Worker/s",
                "Older Female",
                "Younger Male"
            ],
            "coverUrl": "https://mcd.iosphe.re/r/31270/1/front/a/",
            "genres": [
                "Comedy",
                "Romance",
                "Seinen",
                "Slice of Life"
            ],
            "isCompleted": true,
            "synopsis": "Fate brings two people who live in the same condo together on a typical afternoon. Ozawa (26) has just broken up with her boyfriend of five years and was in the process of trying to rebuild her life when she meets Oyamada who lives a couple floors below her. He is somewhat of a loner although he does have a few friends and his room is cluttered with all the random stuff that his impulse shopper brother sends him. Ozawa takes an interest with all the things in his room and the two start a friendship that slowly turns into something more.",
            "title": "Bonnouji",
            "type": "Manga"
        },
        {

            "alternativeTitles": [],
            "artist": "NAKANO Junko",
            "author": "NAKANO Junko",
            "categories": [
                "Beautiful Female Lead",
                "Club/s",
                "Hot Spring/s",
                "Love Triangle/s",
                "Misunderstanding/s",
                "Partial Nudity",
                "Polite Male Lead",
                "Post-Secondary School",
                "Student/s",
                "Younger Brother"
            ],
            "coverUrl": "https://mcd.iosphe.re/r/14443/1/front/a/",
            "genres": [
                "Drama",
                "Romance",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "For his twentieth birthday, Shizuka chooses to go to a hot springs alone. To his surprise, he also ends up seeing his first naked woman... a passed out drunk girl. Soon afterward he enters college, and his friend from high school convinces him to join the female dominated travel and hot springs club. Amazingly, the girl he saw naked, Ruka, is also a member of the club! Now he must interact with his club more or less normally, and pretend he doesn't imagine Ruka naked every time he sees her. He is determined that his embarrassing secret never be made public!",
            "title": "Hetakoi",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "Nisekoi: False Love",
                "Nisekoi : Amours, mensonges et yakuzas",
                "니세코이",
                "รักลวงป่วนใจ",
                "伪恋",
                "ニセコイ"
            ],
            "artist": "KOMI Naoshi",
            "author": "KOMI Naoshi",
            "categories": [
                "Childhood Friend/s",
                "Childhood Love",
                "Childhood Promise",
                "Family Rivals",
                "Gang/s",
                "Mafia",
                "Misunderstanding/s",
                "Pretend Lovers",
                "Promise/s",
                "Strong Female Lead"
            ],
            "coverUrl": "https://mcd.iosphe.re/r/62667/1/front/a/",
            "genres": [
                "Comedy",
                "Drama",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "On May 9th, 1999, Raku Ichijou was born into the Yakuza heir. On June 7th, 1999, Chitoge Kirisaki was born into the Bee Hive Gangsters. Even though Raku may be the next heir to a Yakuza group, he's actually a normal highschool student who wishes for peace and quiet. However, when he meets violent transfer student Chitoge Kirisaki, his life takes a sharp turn for the worse!",
            "title": "Nisekoi",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "シャーマンキング"
            ],
            "artist": "TAKEI Hiroyuki",
            "author": "TAKEI Hiroyuki",
            "categories": [
                "Adapted to Anime",
                "Enemies Become Friends",
                "Female Fighter/s",
                "Ghost/s",
                "Reincarnation",
                "Samurai",
                "Shaman/s",
                "Special Ability/ies",
                "Strong Female Lead",
                "Tournament/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/17/32/front/a/",
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Shounen",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "Yoh Asakura is a shaman--one of the gifted few who, thanks to training or natural talent, can channel spirits that most people can't even see. With the help of his fiancée, Anna, Yoh is in training for the ultimate shaman sports event: the \"Shaman Fight in Tokyo,\" the once-every-500-years tournament to see who can shape humanity's future and become the Shaman King. But unfortunately for Yoh, every shaman in the world is competing for the same prize\ufffd",
            "title": "Shaman King",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "Шальные девчонки",
                "少女・ザ・ワイルズ",
                "油腻的师姐",
                "狂野少女",
                "소녀 the Wild's",
                "소녀더와일즈",
                "Girl the Wild's",
                "Girl's of the Wild's",
                "Merginos i\ufffd Laukinės mokyklos",
                "Shoujo of the Wild's"
            ],
            "artist": "Zhena",
            "author": "Hun",
            "categories": [
                "Abandoned Child",
                "All-Girls School Becomes Integrated",
                "Boxing",
                "Bullying",
                "Female Fighter/s",
                "Full Color",
                "Hard-Working Protagonist/s",
                "Poor Male Lead",
                "Rich Female Lead",
                "Strong Female Lead"
            ],
            "coverUrl": "https://static.comicvine.com/uploads/scale_large/11/113021/3221919-girls+of+the+wild%27s.jpg",
            "genres": [
                "Action",
                "Comedy",
                "Drama",
                "Harem",
                "Martial Arts",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "Wild's High has a 42-year history as a fighting specialized, girls only, private high school meant solely for the elite. It is also the place that Wild's-League is held: the most popular event in the country and the only place in the world where teenage girls have brutal fights with their lives on the line.One year the school changed from a girls only school to a mixed gender school. The only male student, Song Jae Gu, has been granted a full 3-year scholarship regardless of grades. Being someone who had to spend every moment either working or taking care of his younger brother and sister, he accepted.But after meeting Queen, the bloody champion of Wild's-League, drenching her in coffee, calling her a monster, and getting caught seeing her while she was taking a shower... his scholarship could prove fatal.Original Webtoon / Official English Version",
            "title": "Girls of the Wild's",
            "type": "Manhwa"
        },
        {

            "alternativeTitles": [
                "ふぁみドル！",
                "恋染紅葉",
                "恋染红叶",
                "FamiDol!"
            ],
            "artist": "MIURA Tadahiro",
            "author": "SAKAMOTO Tsugirou",
            "categories": [
                "Acting",
                "Actress/es",
                "Celebrity/ies",
                "Childhood Friend/s",
                "First Love",
                "Inexperienced in Love",
                "Love at First Sight",
                "Love Triangle/s",
                "Popular Female Lead",
                "Pretend Lovers"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/77849/4/front/a/",
            "genres": [
                "Comedy",
                "Ecchi",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "Oneshot:There is a saying that if you find a Japanese maple leaf with eight tips you will find everlasting love. A popular high school actress is now making a film about that legend at the main character's high school, who in turn has a crush on her. One day after school he runs into her and helps her escape from some pursuing staff members. It turns out that since she started acting right after middle school she hasn't had any experience with love and that is hurting the production of the movie. So to get some experience with love she invites him out on a date.Included the following stories:Volume 1: Koisome Momiji (Pilot)Volume 2: FamiDol!Daichi's, a teenage boy with little experience with women, life takes an unexpected turn of events.After his mother's remarriage, he obtains a new sister, who is no other than the famous idol Asano Nanami.What is Daichi going to do when they end up alone together and Nanami wants nothing to do with him?",
            "title": "Koisome Momiji",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "青春ポップ!",
                "青春pop!"
            ],
            "artist": "KITAKAWA Touta",
            "author": "KITAKAWA Touta",
            "categories": [
                "Absent Parent/s",
                "Borderline H",
                "Brother Complex",
                "Incest",
                "Music",
                "Music Band/s",
                "Musician/s",
                "Older Sister",
                "Sister Complex",
                "Younger Brother"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/41979/4/front/a/",
            "genres": [
                "Adult",
                "Comedy",
                "Drama",
                "Romance",
                "School Life",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "Every day Sakuta Gotou likes to zone out to his favorite band, Incest, because it makes him feel at ease.  However, this band is very secretive and has yet to have a live performance.  Now, when the chance comes to Gotou to see his idol Iive, the band's singer, on stage, he finds out that she is the new transfer student in the classroom next door... and to make this even better she stops the concert and grabs him saying, \"I've wanted to see you.\"  What is he going to do now?",
            "title": "Seishun Pop!",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "たいようのいえ",
                "بيت الشمس",
                "太阳之家",
                "太陽之家",
                "บ้านแสงตะวัน (Thai)",
                "Haus der Sonne (German)",
                "House of the Sun",
                "Taino no Ie"
            ],
            "artist": "TAAMO",
            "author": "Taamo",
            "categories": [
                "Age Gap",
                "Childhood Friend/s",
                "Cohabitation",
                "Divorced Parent/s",
                "Family",
                "Female Lead Falls in Love First",
                "Live-in Lover",
                "Loneliness",
                "Older Male Younger Female",
                "Tsundere"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/52772/1/front/a/",
            "genres": [
                "Comedy",
                "Drama",
                "Romance",
                "School Life",
                "Shoujo",
                "Slice of Life"
            ],
            "isCompleted": true,
            "synopsis": "From Mixini Studios:Back in the day, that place was a house filled with magic - a place where you ended up smiling even if you were crying. Surely, an invisible wizard must have lived there. Or so I thought.What's a young child to do when her mother leaves her father for another man? Or when her father remarries a woman who brings along a child from a previous marriage? Or when her childhood neighbor friend invites her to live with him?",
            "title": "Taiyou no Ie",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "あいれん",
                "愛人 (田中ユタカ)",
                "爱人",
                "애인"
            ],
            "artist": "TANAKA Yutaka",
            "author": "TANAKA Yutaka",
            "categories": [
                "Calm Protagonist",
                "Cohabitation",
                "Death",
                "Disability",
                "First-Time Intercourse",
                "Future",
                "Illness",
                "Post-Apocalyptic",
                "Terminal Illness",
                "Unconditional Love"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/744/1/front/a/",
            "genres": [
                "Drama",
                "Mature",
                "Psychological",
                "Romance",
                "Sci-fi",
                "Seinen",
                "Slice of Life",
                "Tragedy"
            ],
            "isCompleted": true,
            "synopsis": "Taken from Solaris-SVU:Ikuru is a boy who doesn't have long to live. Growing up questioning the purpose of his life and the reason for his impending death, he's constantly confused and lonely. After learning that he doesn't have much time left, he requests that a special \"girl\" called a AGH-RMS (Artificial Genes Human Regenerated for Mental Support) be given to him. These people are genetically made so that they help heal and ease the mental burdens of the terminally ill. This manga is cute, sad, and ultimately a story about life, death, and humanity.",
            "title": "Ai-Ren",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "ワンピース",
                "وان پیس",
                "ون بيس",
                "海盗路飞",
                "海贼王",
                "航海王",
                "วันพีซ",
                "원피스"
            ],
            "artist": "ODA Eiichiro",
            "author": "ODA Eiichiro",
            "categories": [
                "Adapted to Anime",
                "Ambitious Goal/s",
                "Banding Together",
                "Character Growth",
                "Pirate/s",
                "Sailing",
                "Special Ability/ies",
                "Teamwork",
                "Treasure Hunt",
                "World Travel"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/33/75/front/a/",
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Shounen"
            ],
            "isCompleted": false,
            "synopsis": "Before the Pirate King was executed, he dared the many pirates of the world to seek out the fortune that he left behind in one piece.As a child, Monkey D. Luffy dreamed of becoming the King of the Pirates. But his life changed when he accidentally gained the power to stretch like rubber...at the cost of never being able to swim again! Now Luffy, with the help of a motley collection of nakama, is setting off in search of \"One Piece\", said to be the greatest treasure in the world.Note: The best-selling series in manga history.Was a finalist for the Tezuka Osamu Cultural Prize from 2000 to 2002. The German translation of Vol 44 won the Sondermann audience award at the Frankfurt Book Fair Comics Centre in 2005.Won the 41st Japan Cartoonists Association Award Grand Prize alongside Neko Darake in 2012.",
            "title": "One Piece",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "ちょこっとシスター",
                "ちょこッとSister",
                "Chocotto Sister"
            ],
            "artist": "TAKEUCHI Sakura",
            "author": "ZAPPA Go",
            "categories": [
                "Absent Parent/s",
                "Adapted to Anime",
                "Apartment Life",
                "Brother-Sister Relationship",
                "Childcare",
                "Comedic Undertone",
                "Drunk",
                "Japan",
                "Manager",
                "Younger Sister"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/1253/8/front/a/",
            "genres": [
                "Comedy",
                "Ecchi",
                "Romance",
                "Seinen",
                "Slice of Life",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "As a child, Kawagoe Haruma eagerly awaited the birth of his little sister. However, his mother had a miscarriage, followed by an operation that left her barren. That Christmas, Haruma made his Christmas wish. It was a wish so innocent and heartfelt that it was accepted instantly, unbeknownst to him. Many years later, on Christmas morning, college student Haruma is awoken by a woman riding a hovering motorcycle and claiming to be Santa Claus. She throws him a bag, and he opens it to find his new little sister!Complaining to Santa Claus that he made this wish a long time ago, she tells him that it takes much longer for a sister than it does a toy car. After naming her Choko because of the Anchoko (mini-guidebook) she carries around, they begin their new life as brother and sister in a crazy apartment building filled with interesting neighbors.",
            "title": "Chokotto Sister",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "惡魔公主 in Box",
                "箱入りデビルプリンセス",
                "箱子里冒出个恶魔公主",
                "My Dearest Devil Princess"
            ],
            "artist": "NETSU Maika (ネツマイカ)",
            "author": "MATSUMOTO Makoto",
            "categories": [
                "Angel/s",
                "Contract/s",
                "Demon/s",
                "Half-Human",
                "Princess/es",
                "Weak to Strong",
                "Wish/es"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/5463/6/front/a/",
            "genres": [
                "Comedy",
                "Ecchi",
                "Harem",
                "Romance",
                "Shounen",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "A box that grants three wishes might seem like a dream come true.At least that's what Keita thought, but inside the box he finds a girl. And this girl is no genie--Maki's a devil princess, and she's come to take Keita's soul! But she can only take his soul after he makes his third wish.So, as a sheltered demon with little knowledge of how to be evil, Maki must rely on her trusty guidebook to teach herself the ways of the nefarious arts and trick Keita into using up his wishes. Until then, Maki's going to live with Keita until he can't stand living anymore.",
            "title": "Hakoiri Devil Princess",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "مربى البرتقال",
                "橘皮馬末蘭果醬",
                "오렌지 마말레이드"
            ],
            "artist": "Seok Woo",
            "author": "Seok Woo",
            "categories": [
                "Beautiful Female Lead",
                "Bishounen",
                "Cold Female Lead",
                "Cool Male Lead",
                "Full Color",
                "Loner Protagonist",
                "Male Lead Falls in Love First",
                "Music Band/s",
                "Slow Romance",
                "Vampire/s"
            ],
            "coverUrl": "https://myanimelist.cdn-dena.com/images/manga/1/95567.jpg",
            "genres": [
                "Comedy",
                "Drama",
                "Romance",
                "School Life",
                "Shoujo",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "Vampires have evolved and don't rely on human blood anymore. They now co-exist secretly as normal citizens even though they are still feared and discriminated against by the society. So what happens to a female vampire trying to live a normal school life when she meets the most popular boy in school and accidentally nips his neck?Original Webtoon / English Version by Naver",
            "title": "Orange Marmalade",
            "type": "Manhwa"
        },
        {

            "alternativeTitles": [
                "خطة السلام المضمونة",
                "絶対平和大作戦",
                "绝对平和大作战",
                "ยุทธการรักขจัดรบ",
                "Absolute Peace Project",
                "Absolute Peace Strategy",
                "Peace at Any Price"
            ],
            "artist": "OGURA Akane",
            "author": "OGURA Akane",
            "categories": [
                "Enemies Become Lovers",
                "European Ambient",
                "Fake Relationship",
                "Political Marriage",
                "Politics",
                "Pretend Lovers",
                "Prince/s",
                "Princess/es",
                "Royal Family",
                "War/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/24433/4/front/a/",
            "genres": [
                "Action",
                "Comedy",
                "Drama",
                "Fantasy",
                "Historical",
                "Romance",
                "Shoujo"
            ],
            "isCompleted": true,
            "synopsis": "From Aerandria Scans:The long-lasting war between the Northern and the Southern Kingdoms is unbearable. So the northern Prince Johane and the southern Princess Euda decide to tell everyone they are in love, because their marriage can stop the war. But the truth is they don\ufffdt get along at all!",
            "title": "Zettai Heiwa Daisakusen",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "いんブラ!~美少女吸血鬼の恥ずかしい秘密~",
                "吸血娘!",
                "Bloodline in the Dark",
                "In Bura!",
                "Inbura!"
            ],
            "artist": "ENDOU Tatsuya (炎堂たつや)",
            "author": "ENDOU Tatsuya (炎堂たつや)",
            "categories": [
                "Big Breasts",
                "Childhood Friend/s",
                "Familiar/s",
                "High School",
                "Partial Nudity",
                "School Girl/s",
                "School Idol",
                "Special Blood",
                "Student-Student Relationship",
                "Vampire/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/78894/2/front/a/",
            "genres": [
                "Adult",
                "Comedy",
                "Ecchi",
                "Harem",
                "Romance",
                "School Life",
                "Shounen",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "After an accident our protagonist Amagi Kouichi becomes involved with Itanami-san a well known beauty of his school and secretly a vampire.",
            "title": "Inbura! - Bishoujo Kyuuketsuki no Hazukashii Himitsu",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "青春フォーゲット！",
                "Seishun Forget",
                "Seishun Forget!",
                "Youth For-get!",
                "Youth Forget!"
            ],
            "artist": "MIKABE Sesuna",
            "author": "MIKABE Sesuna",
            "categories": [
                "Amnesia",
                "Childhood Love",
                "Love at First Sight",
                "Perfectionist/s",
                "Persistence",
                "Strong Female Lead",
                "Talented Female Lead",
                "Tragic Past"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/64117/4/front/a/",
            "genres": [
                "Comedy",
                "Mystery",
                "Romance",
                "School Life",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "From FairGame:\"Live with Sincerity\" is Natsuki Taiyou's motto. It's the first day of high school, Taiyou was heading to school and then he meets Hinata during the way there. He fell in love at first sight and suddenly confessed to her. Her answer was yes but then she ran away without saying who she was, but it turns out that she was his classmate. Taiyou felt a destiny between them. However, on the next day, she doesn't remember who he is. Why could that be...?",
            "title": "Seishun For-get!",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "Стальной алхимик",
                "แขนกล คนแปรธาตุ",
                "鋼の錬金術師",
                "钢之炼金术师",
                "강철의 연금술사",
                "Alchemist of Steel",
                "Alquimista de Aço",
                "FMA",
                "Full Metal Alchemist",
                "Giả Kim Thuật Sư",
                "Hagaren",
                "Hagane no Renkinjutsushi"
            ],
            "artist": "ARAKAWA Hiromu",
            "author": "ARAKAWA Hiromu",
            "categories": [
                "Adapted to Anime",
                "Alchemy",
                "Award-Winning Work",
                "European Ambient",
                "Experiment/s",
                "Military",
                "Monster/s",
                "Seven Deadly Sins",
                "Tragic Past",
                "War/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/412/27/front/a/",
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Sci-fi",
                "Shounen",
                "Supernatural",
                "Tragedy"
            ],
            "isCompleted": true,
            "synopsis": "In an alchemical ritual gone wrong, Edward Elric lost his arm and his leg, and his brother Alphonse became nothing but a soul in a suit of armor. Equipped with mechanical \"auto-mail\" limbs, Edward becomes a state alchemist, seeking the one thing that can restore his brother and himself... the legendary Philosopher's Stone.Won the 49th Shogakukan Manga Award in the Shounen category.Won the 15th Tezuka Osamu Cultural Award New Artist Prize.Won the Eagle Award's \"Favourite Manga\" in 2010/2011.Won the Seiun Award for best science fiction comic in 2011.",
            "title": "Fullmetal Alchemist",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "Недосягаемый",
                "シューピアリア",
                "魔王爱勇者",
                "수피리어"
            ],
            "artist": "Ichtys",
            "author": "Ichtys",
            "categories": [
                "Changed by Love",
                "Demon Queen",
                "Demon-Human Relationship",
                "Demon/s",
                "Secret Identity",
                "Star-Crossed Lovers",
                "Strong Female Lead",
                "Strong Male Lead",
                "Sword and Sorcery",
                "Unorthodox Female Love Interest"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/6685/9/front/a/",
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Fantasy",
                "Romance",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "The demon queen subdued enormous and powerful monsters and slaughtered over half of the world's population. Surviving members of the human race elected a hero to slay the demon queen, beseeching release from her oppressive rule. However, he questions his mission to eradicate the monsters: in his opinion, they too are conscious and alive, and so he anguishes over that fact. Sheila the Demon Queen became interested in him and decides to join his journey, hiding her identity and planning to kill him after she has gained his trust. Immediately, however, she realizes that she's fallen in love with the hero, and hence their journey begins...",
            "title": "Superior",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "死に至る病",
                "Deadly Disease",
                "Shiniitarubyou",
                "Sickness Unto Death",
                "Terminal Illness"
            ],
            "artist": "SEGUCHI Takahiro",
            "author": "ASADA Hikari",
            "categories": [
                "Character Growth",
                "Depression",
                "Despair",
                "Glasses-Wearing Male Lead",
                "Live-in Lover",
                "Love at First Sight",
                "Mental Illness",
                "Psychologist",
                "Split Personality",
                "Tragic Past"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/41637/2/front/a/",
            "genres": [
                "Adult",
                "Drama",
                "Psychological",
                "Romance",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "This is the mysterious story of Futaba Kazuma's first patient. At 18, Futaba Kazuma went to school to get his qualification in clinical psychology. While attending school, he boards at a creepy mansion which even has a butler. Also living there is a strange young woman called Emiru. She is suffering from a terminal illness of the heart --- despair.This deep psychological problem has eerie physical effects as well: her hair has turned white, her body temperature is well below normal, and her blood pressure is bizarre. No psychologists or counselors have been able to help cure her of this problem. Will Kazuma be able to determine the cause of Emiru's despair and save her before it's too late?",
            "title": "Shi ni Itaru Yamai",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "魔王なオレと不死姫の指輪",
                "魔王的我和不死姬的指环",
                "Maou na Ore to Fushi-hime no Yubiwa"
            ],
            "artist": "YAYA Hinata",
            "author": "KANKITSU Yusura",
            "categories": [
                "Based on a Novel",
                "Brother Complex",
                "Demon/s",
                "Dragon Girl/s",
                "Dragon/s",
                "Human-Nonhuman Relationship",
                "Yandere",
                "Zombie/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/89319/1/front/a/",
            "genres": [
                "Action",
                "Comedy",
                "Ecchi",
                "Fantasy",
                "Harem",
                "Romance",
                "Seinen"
            ],
            "isCompleted": true,
            "synopsis": "From MangaHelpers:Kusumi Chiharu gets a message one day that he has been selected as a Monster Tamer, and he is prompted to select his first partner. He thinks little of the message until he receives a giant package the following day. He assumes it's the porn books he ordered, but the huge box ends up containing the unconscious body of a mostly naked girl! She's a ghoul named Zonmi, who intends to fight with him as his partner. However, it turns out that other hot girls at his mostly-male high school are also magical creatures, and Zonmi may not be the only one who wants to fight by his side.",
            "title": "Maou na Ore to Fushihime no Yubiwa",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "鏡の国の針栖川",
                "镜之国的针栖川",
                "Harisugawa ở thế giới trong gương",
                "Harisugawa in Mirror World"
            ],
            "artist": "KANO Yasuhiro",
            "author": "KANO Yasuhiro",
            "categories": [
                "Beautiful Female Lead",
                "Childhood Friend/s",
                "Childhood Love",
                "Cool Male Lead",
                "Love Triangle/s",
                "Mirrors",
                "Misunderstanding/s",
                "Misunderstood Protagonist",
                "Parallel Dimension",
                "Trapped"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/67843/3/front/a/",
            "genres": [
                "Comedy",
                "Ecchi",
                "Romance",
                "School Life",
                "Shounen",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "High school student Akira Harisugawa has been in love with Mao Satomi, a girl in his grade, ever since grade school. The only problem? They've been best friends ever since Akira saved her from being hit by a car, and he doesn't want to ruin their friendship! That is until one day, when he finds a mysterious mirror...",
            "title": "Kagami no Kuni no Harisugawa",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "ちぇんじひふみ",
                "ちぇんじ123",
                "变身123",
                "Change Hifumi",
                "Change123"
            ],
            "artist": "IWASAWA Shiuri",
            "author": "SAKAGUCHI Iku",
            "categories": [
                "Bespectacled Protagonist",
                "Childhood Trauma",
                "Female Fighter/s",
                "Judo",
                "Karate",
                "Otaku",
                "Split Personality",
                "Strong Female Lead",
                "Unarmed Combat",
                "Weak Male Lead"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/11058/12/front/a/",
            "genres": [
                "Action",
                "Comedy",
                "Drama",
                "Ecchi",
                "Martial Arts",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "In Change 123, we meet Motoko, a girl with a very strange problem. In order to cope with her 3 adoptive fathers' incredibly intensive training methods, she developed multiple personalities, each with a different martial specialty. But what happens if none of them can beat her opponent on their own? And what further nugget of wisdom will be imparted by the great Kamen Raider?",
            "title": "Change 123",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "我間乱",
                "我间乱"
            ],
            "artist": "NAKAMARU Yousuke",
            "author": "NAKAMARU Yousuke",
            "categories": [
                "Armed Combat",
                "Clan/s",
                "Edo Period",
                "Prodigy",
                "Strong Male Lead",
                "Swordplay",
                "Swordsman",
                "Time Skip",
                "Tournament/s",
                "Training"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/43670/18/front/a/",
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Historical",
                "Martial Arts",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "\"Middle Edo Period -- One state becomes the gathering place for sinful martial artists, who believe in nothing other than power, know no other way of life than letting oneself go wild in battle. That state is the Unabara State, the \"Haunt of Demons\"...\"Washitzu Naosata, the ruler of the powerful state, Unabara, is looking for his successor. He calls upon all 31 of his sons and tells them to search for whoever they believe to be the strongest martial artist of all. Each of their chosen martial artists are then to fight against each other - until only one remains. Whoever is the winner, whoever has the strongest martial artist in the nation by his side, will become his successor...Out in the midst of the mountains is the doujo of \"Oogame Ryuu\" (Giant Tortoise Style). There lives Kurogane Gama, the son of the legendary swordsman, Kurogane Jinsuke, who is believed to have killed 1000 martial artists in Unabara. There, one of the sons of Washitzu Naosata, Washitzu Naoshi, arrives in search of the legendary swordsman, only to find that he has been missing for several years. After seeing the battle style of Gama, Naoshi decides to ask Gama to come with him instead. Wanting to become stronger, Gama agrees with his offer, and that marks the beginning of Gama's battle to become the strongest of all...",
            "title": "Gamaran",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "はじまりのにいな",
                "新菜重新开始",
                "เกิดกี่ครั้งขอรักเพียงเธอ",
                "重新出發新菜",
                "La nouvelle vie de Niina (French)",
                "Niina\ufffds First Love Story"
            ],
            "artist": "MINAMORI Koyomi",
            "author": "MINAMORI Koyomi",
            "categories": [
                "Accident/s",
                "Age Gap",
                "Cool Male Lead",
                "Death of Loved One/s",
                "Memories",
                "Older Male Younger Female",
                "Past Plays a Big Role",
                "Reincarnation",
                "Starting a New Life",
                "Time Skip"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/66755/3/front/a/",
            "genres": [
                "Drama",
                "Romance",
                "Shoujo",
                "Slice of Life",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "From Shoujo Crusade]:10-year old Niina is special. This is because she has the memories of her past life as a girl named Chitose still intact. Among these memories is a promise with Chitose's boyfriend which Niina then decides to try and fulfill. But can she really?Includes the following one-shots:Koi Baka. (volume 1)Toda is a really smart girl but has no passion for anything. She admires idiots who are passionate, especially her classmate, Iijima.Machibito (volume 4)Komako is a carefree girl, who's pretty incoherent. Whe. a random guy asks her to eat sweet potatoes with him, she can't help but wonder why he pats her head and thanks her everytime.",
            "title": "Hajimari no Niina",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "حياة سيئة",
                "NGライフ",
                "NG人生",
                "No Good Life"
            ],
            "artist": "KUSANAGI Mizuho",
            "author": "KUSANAGI Mizuho",
            "categories": [
                "Beautiful Female Lead",
                "Character Growth",
                "Friendship",
                "Quirky Characters",
                "Reincarnation",
                "Slow Romance",
                "Smart Female Lead",
                "Strong Female Lead",
                "Strong Male Lead",
                "Unrequited Love"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/6524/1/front/a/",
            "genres": [
                "Comedy",
                "Drama",
                "Gender Bender",
                "Historical",
                "Romance",
                "School Life",
                "Shoujo",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "From TokyoPop:Keidai Saeki is a high school student who remembers his past life in Pompeii, living as the Italian warrior Sirix... His friends around him are all also reincarnated - although they don't quite remember things the way he does.  Keidai's wife from the past? He's now a middle school boy - while his best male friend is now a cute girl?!  Throw in a case of love at first sight, and you have a new look at romance - manga-style!",
            "title": "NG Life",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "브레이커",
                "Breaker"
            ],
            "artist": "PARK Jin-Hwan",
            "author": "JEON Geuk-jin",
            "categories": [
                "Bullying",
                "Character Growth",
                "Dead Master",
                "Master-Disciple Relationship",
                "Secret Identity",
                "Secret Organization/s",
                "Special Ability/ies",
                "Special Technique",
                "Training",
                "Underworld Society"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/27595/10/front/a/",
            "genres": [
                "Action",
                "Comedy",
                "Drama",
                "Martial Arts",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "The new English teacher, Chun-Woo, is not your ordinary teacher. Shioon, a victim of constant bullying, unexpectedly witnesses Chun-Woo's fighting prowess, and begs him to make him his disciple. Chun-Woo claims he can teach Shioon only if he is truly determined, and Shioon must put his life on the line to prove it. It turns out, however, that Chun-Woo and his powers are more than meets the eye.  Shioon makes a grand entrance into the Murim (the hidden world of martial arts), and he is about to be taught by the best there is!The Breaker series has 2 parts, of which \"The Breaker\" is Part 1 (vol 1-10) and \"The Breaker: New Waves\" is Part 2.Daum Web Publication",
            "title": "The Breaker",
            "type": "Manhwa"
        },
        {

            "alternativeTitles": [
                "Крушитель: Новые волны",
                "المحطم موجات جديدة",
                "브레이커2",
                "브레이커NW",
                "The Breaker 2",
                "The Breaker New Waves",
                "The Breaker: New Waves"
            ],
            "artist": "PARK Jin-Hwan",
            "author": "JEON Geuk-jin",
            "categories": [
                "Bodyguard/s",
                "Disciple",
                "Master-Disciple Relationship",
                "Romantic Subplot",
                "Secret Organization/s",
                "Special Ability/ies",
                "Special Technique",
                "Sudden Strength Gain",
                "Underworld Society",
                "Weak to Strong"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/58941/4/front/a/",
            "genres": [
                "Action",
                "Comedy",
                "Drama",
                "Ecchi",
                "Harem",
                "Martial Arts",
                "Romance",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "In the aftermath of the desperate battle between Goomoonryong and the Martial Arts Alliance -- Yi Shioon's ki-center was destroyed by his own master Goomoonryong, leaving him unable to practice martial arts...Even though Shioon is no longer a murim-in, more assailants continue to pursue him. Through his encounter with Goomoonryong, the bullied boy has grown in to a respectable man. However, Shioon must now learn to survive in this chilly world of Murim without his master...Web Publication",
            "title": "The Breaker - New Waves",
            "type": "Manhwa"
        },
        {

            "alternativeTitles": [
                "Часы нашего счастья",
                "私たちの幸せな時間",
                "우리들의 행복한 시간",
                "Maundy Thursday [film title]",
                "Our Happy Hours",
                "Watashi-tachi no Shiawase na Jikan"
            ],
            "artist": "SAHARA Mizu",
            "author": "GONG Ji-youngSAHARA Mizu",
            "categories": [
                "Attempted Suicide",
                "Based on a Novel",
                "Childhood Trauma",
                "Dead Family Member/s",
                "Death Penalty",
                "Depression",
                "Murder/s",
                "Piano",
                "Prison",
                "Tragic Past"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/27818/1/front/a/",
            "genres": [
                "Mature",
                "Psychological",
                "Romance",
                "Seinen",
                "Slice of Life",
                "Tragedy"
            ],
            "isCompleted": true,
            "synopsis": "From Psycho Pandas:\"I have something I don't want to lose\ufffdSo much so that these terrible feelings have grown.\"A pianist who attempted suicide 3 times, Juri, is taken to help her aunt at a prison where murderers who killed indiscriminately are sentenced to death. There, she meets a man named Yuu who took the lives of 3 people. A mother's antagonism--a brother's death... Together they embrace the violent rebellion in their hearts caused by the large, deep scars they carry. However, before long, they both embrace an earnest hope in their hearts. \"I want to live...\"An adaptation of a novel by South Korea's most popular female novelist, Gong Ji-Young.",
            "title": "Watashitachi no Shiawase na Jikan",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "ワンパンマン",
                "一拳超人",
                "One Punch Man",
                "One-Punch Man",
                "Onepunch Man",
                "Onepunch-Man",
                "Onepunchman",
                "Wanpanman"
            ],
            "artist": "MURATA Yuusuke",
            "author": "ONE",
            "categories": [
                "Calm Protagonist",
                "Comedic Undertone",
                "Comedic Violence",
                "Cyborg/s",
                "Inhuman Power",
                "Invincible Protagonist",
                "Strong Male Lead",
                "Super Hero/es",
                "Super Powers",
                "Super Villain/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/80345/1/front/a/",
            "genres": [
                "Action",
                "Comedy",
                "Fantasy",
                "Mature",
                "Mystery",
                "Psychological",
                "Sci-fi",
                "Seinen",
                "Supernatural"
            ],
            "isCompleted": false,
            "synopsis": "In this new action-comedy, everything about a young man named Saitama screams \"AVERAGE,\" from his lifeless expression, to his bald head, to his unimpressive physique. However, this average-looking fellow doesn't have your average problem... He's actually a superhero that's looking for tough opponents! The problem is, every time he finds a promising candidate he beats the snot out of them in one punch. Can Saitama finally find an evil villain strong enough to challenge him? Follow Saitama through his hilarious romps as he searches for new bad guys to challenge!Note: - One Punch-Man is the remake of the original webcomic.- Nominated for the 7th annual Manga Taishou Award.",
            "title": "One Punch-Man",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "乙嫁語り",
                "姊嫁物語",
                "少女新娘物语",
                "เจ้าสาวแห่งทางสายไหม",
                "신부이야기",
                "A Bride's Story",
                "Aron morsiamet",
                "Bride Stories",
                "Opowieść Panny Młodej",
                "Young Bride's Story"
            ],
            "artist": "MORI Kaoru",
            "author": "MORI Kaoru",
            "categories": [
                "Age Gap",
                "Archery",
                "Arranged Marriage",
                "Big Family",
                "Bride/s",
                "Marriage",
                "Married Couple",
                "Mature Child",
                "Older Female Younger Male",
                "Tribal"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/37308/6/front/a/",
            "genres": [
                "Comedy",
                "Drama",
                "Historical",
                "Romance",
                "Seinen",
                "Slice of Life"
            ],
            "isCompleted": false,
            "synopsis": "Set in Central Asia in a rural town near the Caspian Sea during the 19th century, the story revolves around a young woman, Amir, who arrives from a distant village across the mountains to marry Karluk, a boy eight years her junior. The story unfolds among details of everyday family and community life. However, the peaceful atmosphere is disturbed when Amir's family demands to take her back to their village.Note: Won the 7th annual Manga Taishou Award in 2014 and the intergénérations prize at the Angoulême International Comics Festival in 2012.",
            "title": "Otoyomegatari",
            "type": "Manga"
        },
        {

            "alternativeTitles": [
                "蟲師",
                "กีฏจารย์กับอาถรรพ์แมลงพิสดาร",
                "충사",
                "Bug Master",
                "Mushi-shi"
            ],
            "artist": "URUSHIBARA Yuki",
            "author": "URUSHIBARA Yuki",
            "categories": [
                "Adapted to Anime",
                "Adapted to Movie",
                "Award-Winning Work",
                "Calm Protagonist",
                "Episodic",
                "Existential",
                "Loner Protagonist",
                "Philosophical",
                "Poetic",
                "Spirit/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/452/1/front/a/",
            "genres": [
                "Adventure",
                "Drama",
                "Fantasy",
                "Historical",
                "Mystery",
                "Seinen",
                "Slice of Life",
                "Supernatural"
            ],
            "isCompleted": true,
            "synopsis": "They exist in the most unexpected places\ufffdbe it within your eyes and ears, under the floor and roof of your house, or in the trees and flowers in your garden. They are everywhere, and yet nowhere, at the same time. Are they alive or not? Perhaps it is more apt to say they are beings who transcend the concept of life and death itself... They are mushi.Some wreak havoc in the lives of humans; others bring them deliverance from suffering. Mushi are neither good, nor evil: for just like any other creature, they are merely striving to survive in this harsh, competitive world. Ginko, a lone wanderer with a reclusive personality, offers help and guidance to those plagued by mushi. This is the tale of his travels and exploits in a wondrous world populated by these mysterious entities.Awards - Excellence Prize for Manga at the 7th Japan Media Arts Festival (2003)- Kodansha Manga Award - General Manga (2006)- 9th place on Japan's Agency for Cultural Affairs List of Best Manga. - The anime adaptation further won grand prizes in the categories of Television Series and Best Art Direction (for Takashi Waki) at the 5th Tokyo Anime Awards held at the Tokyo International Anime Fair in 2006.",
            "title": "Mushishi",
            "type": "Manga"
        },
        {
            "alternativeTitles": [
                "ジー ティー オー",
                "Great Teacher Onizuka"
            ],
            "artist": "FUJISAWA Tohru",
            "author": "FUJISAWA Tohru",
            "categories": [
                "Adapted to Anime",
                "Adapted to Live Action",
                "Adults Behaving Badly",
                "Award-Winning Work",
                "Delinquent/s",
                "Ex-Delinquent/s",
                "Immature Adult/s",
                "Romantic Subplot",
                "School Trip/s",
                "Student/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/185/1/front/a/",
            "genres": [
                "Comedy",
                "Drama",
                "Ecchi",
                "School Life",
                "Shounen"
            ],
            "isCompleted": true,
            "synopsis": "Meet Eikichi Onizuka a 22-year-old ex-biker. He's crude, foul-mouthed, and has a split-second temper. His unlikely goal: to be the Greatest High School Teacher in the World! Of course, the only reason he wants to be a teacher is so he can try to score with the hot students. Before he can become a full instructor, he's got to work as a student teacher to earn his credentials. Onizuka may think he's the toughest guy on campus, but when he meets his class full of bullies, blackmailers, and scheming sadists, he'll have to prove it.Note: Won the 22nd Kodansha Manga Award for Best Shounen Manga.",
            "title": "GTO",
            "type": "Manga"
        },
        {
            "alternativeTitles": [
                "ホリミヤ",
                "هوريميا",
                "堀与宫村",
                "堀與宮村",
                "崛与宫村",
                "โฮริมิยะ สาวมั่นกับนายมืดมน (Thai)"
            ],
            "artist": "HAGIWARA Daisuke",
            "author": "HERO",
            "categories": [
                "Appearance Different from Personality",
                "Cool Male Lead",
                "Friendship",
                "Glasses-Wearing Male Lead",
                "Independent Female Lead",
                "Older Sister",
                "Popular Female Lead",
                "Secret Identity",
                "Siblings",
                "Tattoo/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/70263/1/front/a/",
            "genres": [
                "Comedy",
                "Romance",
                "School Life",
                "Shounen",
                "Slice of Life"
            ],
            "isCompleted": false,
            "synopsis": "Hori is your average teenage girl... who has a side she wants no one else to ever find out about. Then there's her classmate Miyamura, your average glasses-wearing boy in school and a totally different person out. When the two meet unexpectedly, they discover each others' secrets and develop an unexpected friendship.",
            "title": "Horimiya",
            "type": "Manga"
        },
        {
            "alternativeTitles": [
                "ラブ ソー ライフ",
                "الحب حياة",
                "러브 소 라이프",
                "Love So Life เลิฟ โซ ไลฟ์",
                "Love So Life ~溫馨的愛~"
            ],
            "artist": "KOUCHI Kaede",
            "author": "KOUCHI Kaede",
            "categories": [
                "Age Gap",
                "Baby/ies",
                "Babysitter",
                "Childcare",
                "Family",
                "Makeshift Family",
                "Older Male Younger Female",
                "Orphan/s",
                "Slow Romance",
                "Twin/s"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/39200/1/front/a/",
            "genres": [
                "Comedy",
                "Drama",
                "Romance",
                "Shoujo",
                "Slice of Life"
            ],
            "isCompleted": true,
            "synopsis": "From Which Scanlations:Shiharu is a high-school student who loves kids, lives in an orphanage, and works at a daycare... Until the handsome uncle of two-year-old twins offers her a raise if she'll be their babysitter.  Often relying on memories of her mother's actions for guidance, Shiharu quickly finds herself falling in love with her new makeshift family.",
            "title": "Love So Life",
            "type": "Manga"
        },
        {
            "alternativeTitles": [
                "銀魂",
                "Gin Tama",
                "Silver Soul"
            ],
            "artist": "SORACHI Hideaki",
            "author": "SORACHI Hideaki",
            "categories": [
                "Adapted to Anime",
                "Adapted to Movie",
                "Alien/s",
                "Alternate History",
                "Alternate Universe",
                "Episodic",
                "Gag",
                "Parody",
                "Samurai",
                "Shinsengumi"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/228/1/front/a/",
            "genres": [
                "Action",
                "Adventure",
                "Comedy",
                "Drama",
                "Historical",
                "Sci-fi",
                "Shounen",
                "Slice of Life",
                "Supernatural"
            ],
            "isCompleted": false,
            "synopsis": "Sakata Gintoki is a samurai living in an era when samurai are no longer needed. To add to his troubles, oppressive aliens have moved in to invade. Gintoki lives with Kagura and Shinpachi, taking on odd jobs to make the world a better place... and to pay their rent.",
            "title": "Gintama",
            "type": "Manga"
        },
        {
            "alternativeTitles": [
                "バガボンド"
            ],
            "artist": "INOUE Takehiko",
            "author": "INOUE TakehikoYOSHIKAWA Eiji",
            "categories": [
                "Armed Combat",
                "Award-Winning Work",
                "Character Growth",
                "Deliberate Loner",
                "Loner Protagonist",
                "Rivalry",
                "Samurai",
                "Sengoku Era",
                "Serial Killer/s",
                "Swordplay"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/387/37/front/a/",
            "genres": [
                "Action",
                "Adventure",
                "Drama",
                "Historical",
                "Martial Arts",
                "Mature",
                "Psychological",
                "Seinen"
            ],
            "isCompleted": false,
            "synopsis": "Growing up in the late 16th century Sengoku era Japan, Shinmen Takezō is shunned by the local villagers as a devil child due to his wild and violent nature. Running away from home with a fellow boy at age 17, Takezo joins the Toyotomi army to fight the Tokugawa clan at the Battle of Sekigahara. However, the Tokugawa win a crushing victory, leading to nearly three hundred years of Shogunate rule. Takezo and his friend manage to survive the battle and afterwards swear to do great things with their lives. However, after their paths separate, Takezo becomes a wanted criminal and must change his name and his nature in order to escape an ignoble death.Note: Won the Kodansha Manga Award for Best General Manga and the 24th Kodansha Manga Award in the general category in 2000.  Won the Tezuka Osamu Cultural Prize in 2002 and was nomination for the 2003 Eisner Award in the Best Writer/Artist category.",
            "title": "Vagabond",
            "type": "Manga"
        },
        {
            "alternativeTitles": [
                "ばらかもん",
                "元气囝仔"
            ],
            "artist": "YOSHINO Satsuki",
            "author": "YOSHINO Satsuki",
            "categories": [
                "Adapted to Anime",
                "Calligraphy",
                "Child/ren",
                "City Boy",
                "Countryside",
                "Handsome Male Lead",
                "Island/s",
                "Lifestyle Change",
                "Neighbor/s",
                "Quirky Characters"
            ],
            "coverUrl": "https://mcd.iosphe.re/n/25022/1/front/a/",
            "genres": [
                "Comedy",
                "Shounen",
                "Slice of Life"
            ],
            "isCompleted": false,
            "synopsis": "For certain personal reasons, handsome young calligrapher Handa Seishuu is forced to uproot himself from the city he's lived in all his life and move to an island on the westernmost edge of Japan. \ufffdSensei,\ufffd as he comes to be known, is a city boy through-and-through, having never experienced rural life until now. And by the looks of it, he has much to learn! From navigating public roads by tractor to having his home commandeered by the local children as their brand-new hangout, the list of Sensei's hardships soon becomes very long indeed.Here unfolds a heartfelt island comedy about a \"gruff on the outside, soft on the inside\" urbanite and his unfailingly tolerant island neighbours!",
            "title": "Barakamon",
            "type": "Manga"
        }
    ];


    for (manga of mangas) {
        var newManga = new Manga(manga);
        newManga.save();
    }
}

exports.seedUsers = () => {
    //Remove all manga
    User.remove(function (err, removed) {

    });

    const users = [
        {
            //Normal user
            "username" : "test",
            "email" : "test@gmail.com",
            "password" : "test",
            "isAdmin" : false
        },
        {
            //Admin priviliges user
            "username" : "testadmin",
            "email" : "testadmin@gmail.com",
            "password" : "test",
            "isAdmin" : true
        }
    ]

    for(user of users) {
        var newUser = new User();
        console.log("test");
        newUser.username = user.username;
        newUser.email = user.email;
        newUser.setPassword(user.password);
        newUser.isAdmin = user.isAdmin;
        
        console.log("test2");
        newUser.save();
    }
}