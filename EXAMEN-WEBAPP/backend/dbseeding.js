const mongoose = require('mongoose');
const Manga = mongoose.model('Manga');

exports.seedMangas = () => {
    //Remove all manga
    Manga.remove(function(err, removed) {

    });

    const mangas = [{
            title: "Mayo Chiki",
            coverUrl: "https://mcd.iosphe.re/n/52913/1/front/a/",
            synopsis: `Konoe Subaru, a classmate of Sakamachi Kinjirou, 
            has been serving as the butler of Suzutsuki Kanade in school. 
            Due to an accident, Sakamachi discovers Konoe's secret...that he 
            is actually a she!? Apparently she will be removed from her position 
            if anyone at school finds out. What will unfold from this chain of events?`,
            genres: ["Comedy", "Romance", "Seinen"]
        },
        {
            title: "GE - Good Ending",
            coverUrl: "https://mcd.iosphe.re/r/45881/1/front/a/",
            synopsis: `Good Ending follows the main character Utsumi's interactions with Kurokawa Yuki,
             a member of the school tennis team, in order for Utsumi to confess his feelings to the captain of the tennis team.
             It is implied that the title of the manga is derived from the "good endings" that are achieved in visual novels.`,
            genres: ["Drama", "Romance", "Shounen"]
        },
        {
            title: "Bonnouji",
            coverUrl: "https://mcd.iosphe.re/r/31270/1/front/a/",
            synopsis: `Fate brings two people who live in the same condo together on a typical afternoon. Ozawa (26) has just broken up with her boyfriend of five years and was in the process of trying to rebuild her life when she meets Oyamada who lives a couple floors below her. He is somewhat of a loner although he does have a few friends and his room is cluttered with all the random stuff that his impulse shopper brother sends him. Ozawa takes an interest with all the things in his room and the two start a friendship that slowly turns into something more.`,
            genres: ["Comedy", "Romance", "Seinen", "Slice of Life"]
        },
        {
            title: "Kimi no Iru Machi",
            coverUrl: "https://mcd.iosphe.re/r/31454/1/front/a/",
            synopsis: `Yuzuki Eba has mysteriously decided to go to high school in the countryside. But despite Haruto Kirishima's objections, she is living in his home. Now he has to put up with a freeloading city girl and even worse, make sure Nanami Kanzaki, the girl he likes, doesn't get the wrong idea!The story's setting is based on author Seo Kouji's hometown.`,
            genres: ["Drama", "Romance", "Shounen"]
        },
        {
            title: "Tasogare Otome x Amnesia",
            coverUrl: "https://mcd.iosphe.re/r/41618/1/front/a/",
            synopsis: `A young woman, by some strange occurrence, was left to die alone in the former building of the Academy for Sincere Teachings. Mysteriously, there is one person who can see her in ghost form: Niiya Teiichi, a freshman. Now they both seek to find out the reasoning behind her death, and what could have caused it.`,
            genres: ["Comedy", "Romance", "Seinen"]
        },
        {
            title: "Hetakoi",
            coverUrl: "https://mcd.iosphe.re/r/14443/1/front/a/",
            synopsis: `For his twentieth birthday, Shizuka chooses to go to a hot springs alone. To his surprise, he also ends up seeing his first naked woman... a passed out drunk girl. Soon afterward he enters college, and his friend from high school convinces him to join the female dominated travel and hot springs club. Amazingly, the girl he saw naked, Ruka, is also a member of the club! Now he must interact with his club more or less normally, and pretend he doesn't imagine Ruka naked every time he sees her. He is determined that his embarrassing secret never be made public!`,
            genres: ["Drama", "Romance", "Shounen"]
        },
        {
            title: "Karin",
            coverUrl: "https://mcd.iosphe.re/n/149/1/front/a/",
            synopsis: `Karin is a cute little girl who also happens to be a vampire... with a twist. Once a month, she experiences intense bleeding from her nose-we're talking gushers! In other words, she's a vamp with blood to spare, so rather than stealing blood from humans she actually gives her blood to them. If done right, this can be an extremely positive experience that benefits the "victim" as much as the vampire. The problem is that Karin never seems to do things right!`,
            genres: ["Comedy", "Romance", "Seinen"]
        },
        {
            title: "Sankarea",
            coverUrl: "https://mcd.iosphe.re/n/49450/1/front/a/",
            synopsis: `Furuya's obsessed with zombies. He collects any figurines, watches any movie, and plays any game with the living dead, and is even only interested in zombie girls. When his cat dies, Furuya begins trying to raise it from the dead using an ancient book of the occult he bought from a shop. But what will happen when he sees the idol of a nearby all girl's school walking close to where he conducts his experiment, wishing to die and be reborn as a different person?`,
            genres: ["Drama", "Romance", "Shounen"]
        },
        {
            title: "Toshiue no Hito",
            coverUrl: "https://mcd.iosphe.re/n/690/1/front/a/",
            synopsis: `The woman Tsutomu encounters in college was older and smaller than he is, and for some reason, looks like the same girl in his dreams. The heart-pounding love affair between him and the "older woman" begins.`,
            genres: ["Comedy", "Romance", "Seinen"]
        },
        {
            title: "Kodomo no Jikan",
            coverUrl: "https://mcd.iosphe.re/n/1930/1/front/a/",
            synopsis: `Daisuke is a 23 year-old new schoolteacher. He ends up being put in charge of a 3rd grade elementary school class since the previous teacher quit, and in that class there's a girl who's quite a troublemaker--Rin Kokonoe. You could call her a masegaki (used to describe a kid that acts more like an adult in some ways), and she's also part tsundere (though more dere than tsun).`,
            genres: ["Drama", "Romance", "Shounen"]
        }
    ]

    for (manga of mangas) {
        var newManga = new Manga(manga);
        newManga.save();
    }
}