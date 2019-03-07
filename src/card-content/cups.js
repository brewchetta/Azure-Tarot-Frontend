const cups = [
  {
    id: 23,
    name: `The Ace of Cups`,
    rank: 1,
    description: `The Ace is a card of potential. It represents the potential for connections and relationships. New friends, a new lover, a committed relationship. This card shows where it starts.`,
    revDescription: `Cups`,
    keywords: [`Cups`],
  },
  {
    id: 24,
    name: `The Two of Cups`,
    rank: 2,
    description: `What's not to love? This cup signifies a relationship, new or renewed. It can be passionate romance or the bonds of friendship, but either way it's a strong relationship. Look after this relationship and cherish it.`,
    revDescription: `Cups`,
    keywords: [`Cups`],
  },
  {
    id: 25,
    name: `The Three of Cups`,
    rank: 3,
    description: `This is the card of companionship. What's better than spending time with friends, celebrating life with people you feel close to? This card wants us to celebrate our friends and enjoy the people around us.`,
    revDescription: `Cups`,
    keywords: [`Cups`],
  },
  {
    id: 26,
    name: `The Four of Cups`,
    rank: 4,
    description: `The grass is always greener on the other side. It doesn't matter if it's true or not, sometimes it seems like we've been dealt a band hand and now we have to live with it. We're overcome with apathy or disappointment, we're greedy for the things we don't get. Instead of wallowing, it may be better to cherish the things we do have and count our blessings.`,
    revDescription: `Cups`,
    keywords: [`Apathetic`, `Disappointed`, `Greedy`],
  },
  {
    id: 27,
    name: `The Five of Cups`,
    rank: 5,
    description: `We all deal with sorrow every now and then. A death or a break up, a disappointment or a regret, these things happen. When they happen it's important not to hold on needlessly, to cling to the things we can't have.`,
    revDescription: `Cups`,
    keywords: [`Grieving`, `Sorrowful`],
  },
  {
    id: 28,
    name: `The Six of Cups`,
    rank: 6,
    description: `Our roots make us. This card asks us to remember the things we used to do, the friends we used to have, the places we used to live. What old dreams and ambitions will surface? What can we bring forward with us as we get older?`,
    revDescription: `Cups`,
    keywords: [`Familiar`, `Childish`, `Nostalgic`],
  },
  {
    id: 29,
    name: `The Seven of Cups`,
    rank: 7,
    description: `It's easy to take the shortest path. And sometimes those shortcuts, those things that are easy or pleasing cheat us of a greater experience. How much of our lives are built on things that we take for granted, things that could fall apart if the shortcut disappeared. Sometimes it's better to live without them before they do.`,
    revDescription: `Cups`,
    keywords: [`Deceptive`, `Cheating`, `Tempting`],
  },
  {
    id: 30,
    name: `The Eight of Cups`,
    rank: 8,
    description: `There are times you've been provided for, when everything is here, and now is <i>not</i> that time. It's time to look somewhere else for fulfillment, to pack our figurative or real bags and find something else.`,
    revDescription: `Cups`,
    keywords: [`Stagnant`, `Questing`],
  },
  {
    id: 31,
    name: `The Nine of Cups`,
    rank: 9,
    description: `Sometimes wishes do come true. This card represents just such a time when through hard work or chance we've found that one thing we've wanted. It's not always what we expect, but it will bring us happiness.`,
    revDescription: `Cups`,
    keywords: [`Harmonious`, `Happy`, `Fulfilled`],
  },
  {
    id: 32,
    name: `The Ten of Cups`,
    rank: 10,
    description: `This is a good time. A good time for friends, for celebrations. Something important has brought everybody together and united them, whether it's the power of family, friendship, or even just chance.`,
    revDescription: `Cups`,
    keywords: [`Radiant`, `Gregarious`, `Celebratory`, `Fulfilled`],
  },
  {
    id: 33,
    name: `The Seer of Cups`,
    rank: 11,
    description: `The Seer represents a person or an aspect of yourself whose creativity knows no bounds. This Seer overflows with fantasies that they paint all over their chosen canvas. Be careful, sometimes they aren't as grounded as they need to be and that can lead to trouble.`,
    revDescription: `Cups`,
    keywords: [`Creative`, `Emotional`, `Peaceful`],
  },
  {
    id: 34,
    name: `The Quester of Cups`,
    rank: 12,
    description: `The Quester might be someone around you or an aspect of yourself that's quiet and thoughtful. The Quester's creative side appears with self-reflection, which is to say often. They might seem shy or non-communicative, but in the silence they're hunting for something absolutely wonderful.`,
    revDescription: `Cups`,
    keywords: [`Idealistic`, `Sensitive`, `Introspective`],
  },
  {
    id: 35,
    name: `The Sibyl of Cups`,
    rank: 13,
    description: `This card represents a person or aspect of yourself that's deeply insightful. They wield that insight to protect and nurture. There are times they might seem overprotective or overreaching, but it's always done out of love.`,
    revDescription: `Cups`,
    keywords: [`Insightful`, `Nurturing`, `Loving`],
  },
  {
    id: 36,
    name: `The Sage of Cups`,
    rank: 13,
    description: `The Sage of Cups lives a complex life. They embrace love and family, often they're the placid anchor holding everyone together at the eye of the storm. And yet, they're deeply insecure, able to handle the emotions of others but uncomfortable with their own.`,
    revDescription: `Cups`,
    keywords: [`Familial`, `Diplomatic`, `Insecure`],
  },
]

export default cups.map(card => {return {...card, suit: "Cups"} })
