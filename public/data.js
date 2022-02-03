export const questions = [
  {
    text: "What’s your primary goal?",
    options: [
      {
        imageSource: "/images/investor-profile-quiz/money.png",
        imageSourceSelected: "/images/investor-profile-quiz/money-white.png",
        title: "Financial Freedom",
        textStyle: {},
        isTrue: false,
      },
      {
        imageSource: "/images/investor-profile-quiz/wallet.png",
        imageSourceSelected: "/images/investor-profile-quiz/wallet-white.png",
        title: "Extra Income",
        textStyle: {},
        isTrue: false,
      },
      {
        imageSource: "/images/investor-profile-quiz/piggy-bank.png",
        imageSourceSelected:
          "/images/investor-profile-quiz/piggy-bank-white.png",
        title: "Save for the Future",
        textStyle: {},
        isTrue: false,
      },
      {
        imageSource: "images/investor-profile-quiz/shield.png",
        imageSourceSelected: "/images/investor-profile-quiz/shield-white.png",
        title: "Preserve Money",
        textStyle: {},
        isTrue: true,
      },
    ],
    whyAskQuestion: {
      answer:
        "Understanding your goals helps us suggest investment strategies that fit best with your personality.",
      example:
        "For example, some investment strategies take more risks than others, which improves the upside but also means you may lose money along the way. So, if you’re the type of person who prefers a calm investing experience then a volatile investment like cryptocurrency may not be a good fit for you.",
    },
  },
  {
    text: "Do you plan on purchasing a home soon?",
    options: [
      {
        imageSource: "/images/investor-profile-quiz/check.svg",
        imageSourceSelected: "/images/investor-profile-quiz/check-white.png",
        title: "Yes",
        isTrue: false,
      },
      {
        imageSource: "/images/investor-profile-quiz/cross-out.svg",
        imageSourceSelected:
          "/images/investor-profile-quiz/cross-out-white.png",
        title: "No",
        isTrue: true,
      },
    ],
    whyAskQuestion: {
      answer:
        "Purchasing a home usually requires a large down payment, which is money you may not want in risky investments.",
      example:
        "For example, if you’re planning to purchase a home within the next few years, we may suggest an investment strategy that focuses on preserving your money.",
    },
  },
  // {
  //   text: "Do you plan on sending your children to college soon?",
  //   options: [
  //     {
  //       imageSource: "/images/investor-profile-quiz/check.svg",
  //       imageSourceSelected: "/images/investor-profile-quiz/check-white.png",
  //       title: "Yes",
  //       isTrue: false,
  //     },
  //     {
  //       imageSource: "/images/investor-profile-quiz/cross-out.svg",
  //       imageSourceSelected:
  //         "/images/investor-profile-quiz/cross-out-white.png",
  //       title: "No",
  //       isTrue: true,
  //     },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "Sending your children to college or paying for higher education means a significant expense to cover tuition, books, food, and housing.",
  //     example:
  //       "For example, if you’re paying for 4-year private institution, you may not want to risk what you’ve already saved, but you may also need to grow the money you do have leading up to and during those years.",
  //   },
  // },
  // {
  //   text: "How long do you like to invest?",
  //   options: [
  //     {
  //       title: "4",
  //       subtitle: "years",
  //       prefixSymbol: "<",
  //       isTrue: true,
  //     },
  //     {
  //       title: "4-8",
  //       subtitle: "years",
  //       isTrue: false,
  //     },
  //     {
  //       title: "8",
  //       subtitle: "years",
  //       prefixSymbol: ">",
  //       isTrue: false,
  //     },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "This helps us understand the right investment strategies for you. For example, if you hold onto investments for a long time, it opens up new opportunities, gives more time for compounding to work on your behalf, and gives more time to recover from market downturns.",
  //   },
  // },
  // {
  //   text: "What level of risk do you feel comfortable with?",
  //   options: [
  //     {
  //       title: "Conservative",
  //       subtitle: "I don’t want to risk too much.",
  //       isTrue: false,
  //     },
  //     {
  //       title: "Moderate",
  //       subtitle: "I’ll risk a little for potential wins",
  //       score: 2.5,
  //       isTrue: false,
  //     },
  //     {
  //       title: "Aggressive",
  //       subtitle: "I’ll risk more for bigger wins",
  //       isTrue: true,
  //     },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "We prefer to suggest investment strategies that align with your comfort level for risk. This makes sure that you feel good about the decisions you make.",
  //     example:
  //       "For example, if you have many decades to retirement, are relatively debt free, and have a steady income, you may prefer to take on riskier investments so you can realize higher investment returns.",
  //   },
  // },
  // {
  //   text: "If your investment is down 15%, what do you do?",
  //   options: [
  //     {
  //       title: "Sell Everything",
  //       subtitle: "You don’t like losing money.",
  //       imageSource: "/images/investor-profile-quiz/price-tag.png",
  //       imageSourceSelected:
  //         "/images/investor-profile-quiz/price-tag-white.png",
  //       isTrue: false,
  //     },
  //     {
  //       title: "Do Nothing",
  //       subtitle: "You’re ok with ups and downs.",
  //       imageSource: "/images/investor-profile-quiz/meditation.svg",
  //       imageSourceSelected:
  //         "/images/investor-profile-quiz/meditation-white.png",
  //       score: 2.5,
  //       isTrue: false,
  //     },
  //     {
  //       title: "Buy More",
  //       subtitle: "You see an opportunity.",
  //       imageSource: "/images/investor-profile-quiz/credit-card.svg",
  //       imageSourceSelected:
  //         "/images/investor-profile-quiz/credit-card-white.png",
  //       isTrue: true,
  //     },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       'No matter what you invest in, there are always ups and downs that you will experience. The trick is making sure you’re comfortable with the level of this "volatility" going into the investment so are prepared for it when it happens.',
  //     example:
  //       '@assets are "on sale"). Many people change how they feel about this over the course of their life.',
  //   },
  // },
  // {
  //   text: "What’s your annual income?",
  //   options: [
  //     { title: "Greater than $250,000", score: 1, isTrue: false },
  //     { title: "$100,000 to $250,000", score: 2, isTrue: true },
  //     { title: "$50,000 to $100,000", score: 3, isTrue: false },
  //     { title: "Less than $50,000", score: 4, isTrue: false },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "It’s likely that the more money you earn, the more you can use to invest for your future. This helps us understand which level of investment strategies we can suggest and while also doing tax planning based on your tax bracket.",
  //     example:
  //       "For example, if you have more disposable income you may also be able to absorb larger market downturns, which means we can suggest more aggressive investment strategies to you.",
  //   },
  // },
  // {
  //   text: "How many years of investing experience do you have?",
  //   options: [
  //     {
  //       title: "2",
  //       subtitle: "years",
  //       prefixSymbol: "<",
  //       isTrue: false,
  //     },
  //     {
  //       title: "2-5",
  //       subtitle: "years",
  //       isTrue: true,
  //     },
  //     {
  //       title: "5-10",
  //       subtitle: "years",
  //       isTrue: false,
  //     },
  //     {
  //       title: "10",
  //       subtitle: "years",
  //       prefixSymbol: ">",
  //       isTrue: false,
  //     },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "Understanding your experience level helps us communicate with you better. Technical terms can confuse those who are new to investing but may let us communicate more precisely when architecting a personalized strategy for the more experienced.",
  //     example:
  //       "For example, if you’re an investment professional who has chosen to invest with us, we may talk about investing strategies in terms of alpha generation, sharpe ratios, and active share.",
  //   },
  // },
  // {
  //   text: "What is your investing style?",
  //   options: [
  //     { title: "Maximize gains", score: 1, isTrue: false },
  //     { title: "Minimize losses", score: 4, isTrue: true },
  //     { title: "Both equally", score: 2.5, isTrue: false },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "Understanding your investing priorities helps us suggest better strategies you may align with.",
  //     example:
  //       "For example, if you care more about maximizing gains, we may suggest stock options that can multiply the money you make with the same amount invested. But if you care about minimizing losses, stock options could also multiply your downside so we would rather suggest something safer like stocks, bonds, or even treasury bills.",
  //   },
  // },
  // {
  //   text: "How old are you?",
  //   options: [
  //     { title: "41 and over", score: 3, isTrue: false },
  //     { title: "32-40 years", score: 2, isTrue: false },
  //     { title: "25-32 years", score: 1, isTrue: false },
  //     { title: "18-24 years", score: 1, isTrue: true },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "Your age may have an impact on which investment strategies we suggest for you. The more time you have to invest, the more aggressive you may be in your choices.",
  //     example:
  //       "For example, if you’re investing for retirement and you’re 30 years old, you have more time to recover from any potential losses and for your money to multiply than if you’re 50 years old.",
  //   },
  // },
  // {
  //   text: "How much do you have available to invest?",
  //   options: [
  //     { title: "Greater than $100,000", score: 1, isTrue: false },
  //     { title: "$50,000 to $100,000", score: 2, isTrue: false },
  //     { title: "$20,000 to $50,000", score: 3, isTrue: true },
  //     { title: "Less than $20,000", score: 4, isTrue: false },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "Understanding how much you are able to invest lets us suggest better strategies more tailored to you.",
  //     example: "@assets.",
  //   },
  // },
  // {
  //   text: "How much do you plan to invest initially?",
  //   options: [
  //     { title: "Greater than $10,000", score: 1, isTrue: false },
  //     { title: "$5,000 to $10,000", score: 2, isTrue: false },
  //     { title: "$1,000 to $5,000", score: 3, isTrue: true },
  //     { title: "Less than $1,000", score: 4, isTrue: false },
  //   ],
  //   whyAskQuestion: {
  //     answer:
  //       "We not only allow our members to invest upon their initial deposit, but also schedule recurring deposits and enable our powerful A.I. to invest in the latest strategies based on answers to these questions, diversification scores, and market movements.",
  //   },
  // },
];
