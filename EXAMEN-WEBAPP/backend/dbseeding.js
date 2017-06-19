const mongoose = require('mongoose');
const Manga = mongoose.model('Manga');

exports.seedMangas = () => {
    //Remove all manga
    Manga.remove(function (err, removed) {

    });

    const mangas = [{
        title: "Mayo Chiki",
        coverUrl: "https://mcd.iosphe.re/n/52913/1/front/a/",
        synopsis: `Konoe Subaru, a classmate of Sakamachi Kinjirou, 
            has been serving as the butler of Suzutsuki Kanade in school. 
            Due to an accident, Sakamachi discovers Konoe's secret...that he 
            is actually a she!? Apparently she will be removed from her position 
            if anyone at school finds out. What will unfold from this chain of events?`,
        author: "ASANO Hajime",
        artist: "Niito",
        genres: ["Comedy", "Romance", "Seinen"],
        categories: ["Adapted to Anime", "Based on a Novel", "Butler/s", "Cross-dressing", "Fan Club", "Phobia/s", "Rich Female Lead", "Sadist/s", "Secret Identity", "Strong Female Lead"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "GE - Good Ending",
        coverUrl: "https://mcd.iosphe.re/r/45881/1/front/a/",
        synopsis: `Good Ending follows the main character Utsumi's interactions with Kurokawa Yuki,
             a member of the school tennis team, in order for Utsumi to confess his feelings to the captain of the tennis team.
             It is implied that the title of the manga is derived from the "good endings" that are achieved in visual novels.`,
        author: "SASUGA Kei",
        artist: "SASUGA Kei",
        genres: ["Drama", "Romance", "Shounen"],
        categories: ["Beautiful Female Lead", "Character Growth", "Coworker/s", "Dating Advice", "Friends Become Lovers", "Love Polygon", "Misunderstanding/s", "Slow Romance", "Tragic Past", "Weak Male Lead"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Bonnouji",
        coverUrl: "https://mcd.iosphe.re/r/31270/1/front/a/",
        synopsis: `Fate brings two people who live in the same condo together on a typical afternoon. Ozawa (26) has just broken up with her boyfriend of five years and was in the process of trying to rebuild her life when she meets Oyamada who lives a couple floors below her. He is somewhat of a loner although he does have a few friends and his room is cluttered with all the random stuff that his impulse shopper brother sends him. Ozawa takes an interest with all the things in his room and the two start a friendship that slowly turns into something more.`,
        author: "AKI Eda",
        artist: "AKI Eda",
        genres: ["Comedy", "Romance", "Seinen", "Slice of Life"],
        categories: ["Alcohol", "Apartment Life", "Career Woman", "Finding Love Again", "Friends Become Lovers", "Friendship", "Glasses-Wearing Male Lead", "Male Lead Falls in Love First", "Office Worker/s", "Older Female", "Younger Male"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Kimi no Iru Machi",
        coverUrl: "https://mcd.iosphe.re/r/31454/1/front/a/",
        author: "SEO Kouji",
        artist: "SEO Kouji",
        synopsis: `Yuzuki Eba has mysteriously decided to go to high school in the countryside. But despite Haruto Kirishima's objections, she is living in his home. Now he has to put up with a freeloading city girl and even worse, make sure Nanami Kanzaki, the girl he likes, doesn't get the wrong idea!The story's setting is based on author Seo Kouji's hometown.`,
        genres: ["Drama", "Romance", "Shounen"],
        categories: ["Adapted to Anime", "Angst", "Beautiful Female Lead", "Childhood Friend/s", "Long-Distance Relationship", "Love Triangle/s", "Misunderstanding/s", "Naive Male Lead", "Post-Secondary School", "Student/s"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Tasogare Otome x Amnesia",
        coverUrl: "https://mcd.iosphe.re/r/41618/1/front/a/",
        synopsis: `A young woman, by some strange occurrence, was left to die alone in the former building of the Academy for Sincere Teachings. Mysteriously, there is one person who can see her in ghost form: Niiya Teiichi, a freshman. Now they both seek to find out the reasoning behind her death, and what could have caused it.`,
        author: "Maybe",
        artist: "Maybe",
        genres: ["Comedy", "Romance", "Seinen"],
        categories: ["Adapted to Anime", "Amnesia", "Ghost", "Protagonist", "Ghost/s", "Hidden Past", "Human-Nonhuman Relationship", "Paranormal", "Investigator", "Sacrifice/s", "Strong Female Lead", 'Unorthodox Female Love Interest'],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Hetakoi",
        coverUrl: "https://mcd.iosphe.re/r/14443/1/front/a/",
        synopsis: `For his twentieth birthday, Shizuka chooses to go to a hot springs alone. To his surprise, he also ends up seeing his first naked woman... a passed out drunk girl. Soon afterward he enters college, and his friend from high school convinces him to join the female dominated travel and hot springs club. Amazingly, the girl he saw naked, Ruka, is also a member of the club! Now he must interact with his club more or less normally, and pretend he doesn't imagine Ruka naked every time he sees her. He is determined that his embarrassing secret never be made public!`,
        author: "NAKANO Junko",
        artist: "NAKANO Junko",
        genres: ["Drama", "Romance", "Shounen"],
        categories: ["Beautiful Female Lead", "Club/s", "Hot Spring/s", "Love Triangle/s", "Misunderstanding/s", "Partial Nudity", "Polite Male Lead", "Post-Secondary School", "Student/s", "Younger Brother"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Karin",
        coverUrl: "https://mcd.iosphe.re/n/149/1/front/a/",
        synopsis: `Karin is a cute little girl who also happens to be a vampire... with a twist. Once a month, she experiences intense bleeding from her nose-we're talking gushers! In other words, she's a vamp with blood to spare, so rather than stealing blood from humans she actually gives her blood to them. If done right, this can be an extremely positive experience that benefits the "victim" as much as the vampire. The problem is that Karin never seems to do things right!`,
        author: "KAGESAKI Yuna",
        artist: "KAGESAKI Yuna",
        genres: ["Comedy", "Romance", "Seinen"],
        categories: ["Adapted to Anime", "Clumsy Protagonist", "Couple", "Growth", "Crybaby Protagonist", "Family", "First Love", "Human-Nonhuman Relationship", "Paranormal Romance", "Single Parent", "Vampire/s"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Sankarea",
        coverUrl: "https://mcd.iosphe.re/n/49450/1/front/a/",
        synopsis: `Furuya's obsessed with zombies. He collects any figurines, watches any movie, and plays any game with the living dead, and is even only interested in zombie girls. When his cat dies, Furuya begins trying to raise it from the dead using an ancient book of the occult he bought from a shop. But what will happen when he sees the idol of a nearby all girl's school walking close to where he conducts his experiment, wishing to die and be reborn as a different person?`,
        author: "HATTORI Mitsuru",
        artist: "HATTORI Mitsuru",
        genres: ["Drama", "Romance", "Shounen"],
        categories: ["Adapted to Anime", "Childhood Friend/s", "Cohabitation", "Dead Pet", "Love Triangle/s", "Resurrection", "Tragic Accident/s", "Undead", "Unorthodox Female Love Interest", "Zombie/s"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Toshiue no Hito",
        coverUrl: "https://mcd.iosphe.re/n/690/1/front/a/",
        synopsis: `The woman Tsutomu encounters in college was older and smaller than he is, and for some reason, looks like the same girl in his dreams. The heart-pounding love affair between him and the "older woman" begins.`,
        author: "AMAZUME Ryuta",
        artist: "AMAZUME Ryuta",
        genres: ["Comedy", "Romance", "Seinen"],
        categories: ["Appearance Different from Actual Age", "Borderline H", "Cohabitation", "Couple Growth", "Impotency", "Job Hunting", "Older Female Younger Male", "Post-Secondary School", "Small Breasts", "Widow / Widower"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Kodomo no Jikan",
        coverUrl: "https://mcd.iosphe.re/n/1930/1/front/a/",
        synopsis: `Daisuke is a 23 year-old new schoolteacher. He ends up being put in charge of a 3rd grade elementary school class since the previous teacher quit, and in that class there's a girl who's quite a troublemaker--Rin Kokonoe. You could call her a masegaki (used to describe a kid that acts more like an adult in some ways), and she's also part tsundere (though more dere than tsun).`,
        author: "WATASHIYA Kaworu",
        artist: "WATASHIYA Kaworu",
        genres: ["Drama", "Romance", "Shounen"],
        categories: ["Adapted to Anime", "Age Gap", "Dead Family Member/s", "Elementary School", "Forbidden Love", "Glasses-Wearing Male Lead", "Guardian Relationship", "Mature Child", "Student-Teacher Relationship", "Student/s"],
        type: "Manga",
        isCompleted: true
    },
    {
        title: "Nisekoi",
        alternativeTitles: ["Nisekoi: False Love", "Nisekoi : Amours, mensonges et yakuzas", "니세코이", "รักลวงป่วนใจ", "伪恋", "ニセコイ"],
        coverUrl: "https://mcd.iosphe.re/r/62667/1/front/a/",
        synopsis: "On May 9th, 1999, Raku Ichijou was born into the Yakuza heir. On June 7th, 1999, Chitoge Kirisaki was born into the Bee Hive Gangsters. Even though Raku may be the next heir to a Yakuza group, he's actually a normal highschool student who wishes for peace and quiet. However, when he meets violent transfer student Chitoge Kirisaki, his life takes a sharp turn for the worse!",
        author: "KOMI Naoshi",
        artist: "KOMI Naoshi",
        genres: ["Comedy", "Drama", "Romance", "School Life", "Shounen"],
        categories: ["Childhood Friend/s", "Childhood Love", "Childhood Promise", "Family Rivals", "Gang/s", "Mafia", "Misunderstanding/s", "Pretend Lovers", "Promise/s", "Strong Female Lead"],
        type: "Manga",
        isCompleted: true
    }
    ]

    for (manga of mangas) {
        var newManga = new Manga(manga);
        newManga.save();
    }
}

/*exports.seedGenres = () => {

}*/