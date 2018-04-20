use blogger
db.createCollection("articles")

var zionArticle = 
{authorName : "Aisha Sultan", 
 email: "aisha.sultan@author.com",
 creationDate: ISODate("2018-06-01"),
 text : "When the recording on the shuttle bus warned about deadly flash floods, I smiled at my children decked in their waterproof Gore-Tex bodysuits and repeated the message. We laughed, in that nervous way when you wonder what you’ve gotten yourself into. I had persuaded my husband and our two young teenagers to hike the Narrows, renowned as one of the most scenic slot canyon hikes in the world. Hikers must wade through the Virgin River, which runs from wall to wall, as it cuts through the canyon in Utah’s Zion National Park. We were visiting in the early spring, when the snow melt can frequently cause the water level to rise too high, shutting it down for hikers. The temperature was in the 30s the morning we headed out. We had rented canyoneering shoes, Neoprene socks and walking sticks in addition to our wetsuits to keep us relatively dry and warm. I had deliberately chosen a family activity in which I knew neither child would be able to look at their phones for eight solid hours. The river demands your full attention. As a parent of teens, you relish the phone-free hours on a vacation. Before we left there was a heated debate about whose phone would be carried as tribute in the waterproof bag, along with our snacks and water bottles. The youngest child, with the oldest phone, finally agreed to let us stow his after we promised to replace it with an upgraded version if his phone became an unintended casualty of the adventure."
}

db.articles.insert(zionArticle)
db.articles.find()
