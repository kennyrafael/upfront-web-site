import type { Dictionary } from './pt';

/**
 * English, typed against the Portuguese dictionary.
 *
 * `Dictionary` is `typeof pt`, so this object has to match it key for key. A string added
 * to `pt.ts` and forgotten here is a compile error rather than a paragraph that quietly
 * shows up in the wrong language.
 */
export const en: Dictionary = {
  meta: {
    title: 'Upfront — bookings, payments and compliance for independent providers',
    description:
      'The operations platform for independent service providers: a public booking page, MB Way deposits, a calendar with a column per person, and recibos verdes and IVA deadlines kept in order.',
    plansTitle: 'Plans and pricing — Upfront',
    plansDescription:
      'Four plans for independent providers and small shops in Portugal. The commission on payments is the same on every one; the plan changes what you can do.',
    localeTag: 'en',
  },

  nav: {
    sections: 'Sections',
    bookings: 'Bookings',
    payments: 'Payments',
    compliance: 'Compliance',
    plans: 'Plans',
    openApp: 'Open the app',
    skipToContent: 'Skip to content',
    language: 'Language',
  },

  hero: {
    pill: 'Bookings, payments and compliance',
    headline: 'Your shop keeps running while you are with a client.',
    lede: 'Upfront is an operations platform for independent service providers. A booking page your clients use themselves, deposits that hold the slot, a calendar with a column per person, and your recibos verdes and IVA dates kept in order — instead of four tools that have never heard of each other.',
    ctaPrimary: 'See what it does',
    ctaSecondary: 'Open the app',
    note: 'Built for Portugal, then Spain. Not an answering service with a dashboard bolted on.',
  },

  heroFigure: {
    thisWeek: 'This week',
    timezone: 'Europe/Lisbon',
    bookedName: 'Marta Costa',
    bookedWhen: 'booked Thursday 14:30',
    bookedPaid: '· deposit paid',
    alt: 'A week of calendar filling up with bookings.',
  },

  pains: {
    eyebrow: 'Why this exists',
    title: 'Three problems that are really one problem',
    lede: "They are not separate tools in a provider's day. A missed call is a lost booking, a lost booking is a gap in the takings, and the takings are what the paperwork is made of.",
    phoneHeading: 'The phone rings mid-appointment',
    phoneBody:
      'You are holding scissors. It goes to voicemail, and most of those people book somewhere else instead of calling back.',
    trustHeading: 'The slot was held on trust',
    trustBody:
      'Someone who paid nothing to book has no reason to turn up, and an empty chair on a Saturday is the most expensive hour of the week.',
    paperHeading: 'The paperwork is a separate life',
    paperBody:
      'Recibos verdes in one place, the IVA ceiling in nobody’s head, and Segurança Social dates you remember the week after.',
  },

  bookings: {
    eyebrow: 'Bookings',
    title: 'Taken while you are working, not after you close',
    lede: 'A public page per shop, backed by the same availability rules the app itself enforces — so a client can never book something the calendar would refuse.',
    pageHeading: 'A page your clients use themselves',
    pageBody:
      'Your own address, your own colours, your own logo. Off until you publish it — the calendar is private until you say otherwise.',
    freeHeading: 'Times that are actually free',
    freeBody:
      'Availability is the shop being open, that person working, and them being neither away nor already booked. Offering a slot you cannot honour is worse than offering none.',
    manageHeading: 'Clients cancel and move without ringing you',
    manageBody:
      'A manage link in their confirmation, so the slot comes back on the calendar the moment they let it go, rather than when you find out.',
    teamHeading: 'Most shops are not one person',
    teamBodyOne:
      'Everyone gets their own hours, their own time off and their own list of services — with a different price or a different length where they need one. A client picks a person or leaves it to you, and one visit can span two of them: a cut with Ana and a beard trim with Rui, on one booking.',
    teamBodyTwo:
      'Owners and managers see the whole floor. Staff see their own day. The front desk takes money and books people in without being able to read the compliance file.',
  },

  availabilityFigure: {
    shopHours: 'Shop hours',
    employeeHours: "Ana's hours",
    free: 'Not booked or away',
    title: 'How a bookable slot is worked out',
    alt: "Three overlapping circles — shop hours, one employee's hours, and time that is neither booked nor away. A bookable slot is the small area where all three overlap.",
  },

  teamFigure: {
    day: 'Thursday',
    people: '4 people',
  },

  payments: {
    eyebrow: 'Payments',
    title: 'Money that arrives with the booking',
    lede: 'MB Way and card collection tied to the appointment rather than sitting beside it, so a paid deposit and a held slot are the same fact.',
    modesHeading: 'Nothing, a deposit, or the whole price',
    modesBody:
      'Your call, per shop. A deposit is the most direct defence against a no-show there is, and it is the thing that makes a public link safe to hand to a stranger.',
    counterHeading: 'Take the rest at the counter',
    counterBody:
      'When the work is done, push a request for what is still owed to their phone — or to another number, given there and then. It replaces a card terminal you may not have.',
    settlementHeading: 'Money reaches you, not us',
    settlementBody:
      'Client funds are credited to your own account at the payment institution and paid out from there. Upfront instructs the split; it never holds your money.',
  },

  splitFigure: {
    service: 'Coloração',
    price: '65,00 €',
    keptAmount: '13,00',
    returnedAmount: '52,00',
    keptHeading: 'Kept if they cancel',
    keptBody: "The deposit portion. The slot was lost at the shop's expense.",
    returnedHeading: 'Returned',
    returnedBody: 'With the notice the client was promised before they paid.',
  },

  compliance: {
    eyebrow: 'Compliance',
    title: 'The paperwork is made of work you have already done',
    lede: 'Every appointment that happened is a line on a recibo and a number against your IVA ceiling. Upfront already knows about both, so it keeps the count for you.',
    recibosHeading: 'Recibos verdes, drafted from the bookings',
    recibosBody:
      'Pick the appointments, get a numbered draft with the IVA worked out. Sequential, and fixed once issued.',
    ceilingHeading: 'The exemption ceiling, watched all year',
    ceilingBody:
      'It warns you on the way up rather than after you have crossed it, which is when it stops being a choice.',
    datesHeading: 'IVA and Segurança Social dates',
    datesBody: 'The ones that arrive quarterly and are remembered annually.',
    disclaimerStrong: 'Upfront never files anything.',
    disclaimerBody:
      ' It produces drafts, counts and reminders, and an export your accountant can work from. What goes to the Autoridade Tributária is sent by a person who meant to send it.',
  },

  ceilingFigure: {
    percent: '62%',
    caption: 'of the exemption ceiling',
    article: 'art. 53.º',
    alt: 'A semicircular gauge a little under two thirds full, showing turnover against the IVA exemption ceiling.',
    title: 'Turnover against the IVA exemption ceiling',
  },

  capabilities: {
    eyebrow: 'Also in the box',
    title: 'The unglamorous half',
    lede: 'None of this is a headline feature. All of it is the difference between software you keep using and software you tried.',
    clientsTitle: 'Client records that build themselves',
    clientsBody:
      'Every booking matches a client by phone rather than making a new one, so a regular is a history instead of nine near-identical rows.',
    remindersTitle: 'Reminders that go out once',
    remindersBody:
      'A confirmation when they book and a reminder before the day — and a restart in between does not send either of them twice.',
    brandTitle: 'Your page, your colours',
    brandBody:
      'A hex and a logo, and the booking page wears them. The text contrast is worked out from the colour you picked, so it stays readable whatever you choose.',
    calendarTitle: 'A calendar per person, or all of them',
    calendarBody:
      'A column each for the day, one person at a time for the week, and publicly-made bookings badged — they arrived while nobody was watching.',
    rolesTitle: 'Roles that fit a shop floor',
    rolesBody:
      'Owner, manager, front desk, staff. The front desk takes payments; the compliance file belongs to whoever signs the recibos.',
    ledgerTitle: 'The ledger shows what you actually get',
    ledgerBody:
      'Net of our commission, never gross. Reporting what a client paid as though it all reached you overstates what you are owed by exactly our fee.',
  },

  horizon: {
    eyebrow: 'Where this is going',
    title: 'Built in the order that helps first',
    lede: 'The calendar and the money first, because the rest is made out of them. What comes next is worth nothing if what sits underneath it is wrong.',
    nowLabel: 'Now',
    nowHeading: 'Bookings, payments, compliance',
    nowBody:
      'The public page, the calendar, deposits and balances, recibos and deadlines. This is what exists.',
    nextLabel: 'Next',
    nextHeading: 'The product in Portuguese',
    nextBody:
      'Left until last on purpose, so the strings are extracted once rather than three times. The site is done; the app follows.',
    spainLabel: 'After',
    spainHeading: 'España',
    spainBody: 'The same problems with a different tax code. Autónomos, not independentes.',
  },

  cta: {
    title: 'Have a look at it',
    body: 'If your shop has a wrinkle nothing here covers — and it probably does — that is the useful conversation.',
    primary: 'Open the app',
    secondary: 'Talk to us',
  },

  plans: {
    eyebrow: 'Plans',
    title: 'Pay for the size of your shop, not for what it turns over',
    lede: 'The commission on payments is the same on every plan. A plan changes what you can do, never what it costs you to get paid.',
    monthly: 'Monthly',
    annual: 'Yearly',
    annualSaving: '10% off',
    cycleLabel: 'How you want to pay',
    perMonth: '/month',
    annualBilled: (amount: string) => `Or ${amount} a year`,
    monthlyEquivalent: (amount: string) => `Works out at ${amount} a month`,
    start: 'Get started',
    startFree: 'Start for free',
    builtOn: (plan: string) => `Everything in ${plan}, plus:`,
    freeName: 'Free',
    freePrice: 'Free',
    freeWho: 'For working on your own, with the calendar in order.',
    freeOnePerson: 'One person',
    freeBookingPage: 'A public booking page, in your colour and your logo',
    freeClients: 'Bookings, clients and history',
    freeDeposits: 'Deposits and payments by MB Way',
    freeCompliance: 'Recibo verde drafts and IVA deadlines',
    freeEmail: 'Confirmations and reminders by email',
    soloName: 'Solo',
    soloWho: 'For when you have regulars.',
    soloRecurring: 'Repeating appointments — weekly, fortnightly or monthly',
    standardName: 'Team',
    standardWho: 'For a shop with more than one pair of hands.',
    standardPeople: 'People without a limit, each with their own hours',
    standardCalendar: 'A calendar with a column per person',
    standardSms: 'SMS reminders — 200 a month',
    proName: 'Complete',
    proWho: 'For when you turn bookings away for want of hours.',
    proWaitlist: 'A waitlist — when somebody cancels, the people who wanted it are told',
    proSms: 'SMS reminders — 1000 a month',
    feeNote:
      'A payment you take carries a 4% + €0.55 commission — with Stripe’s own cost inside it, not on top.',
    vatNote: 'Prices include IVA.',
    neverGated:
      'Your receipts, your compliance records and the export of your own data never depend on the plan. Not even on a cancelled account.',
    doubtTitle: 'Not sure which?',
    doubtBody:
      'Start on Free. Change plan when you need to, and changing never deletes anything already there.',
  },

  footer: {
    tagline: 'Operations for independent service providers. Portugal first.',
    elsewhere: 'Elsewhere',
    legal:
      'Compliance figures in the product are a planning aid, not tax advice — Upfront produces drafts and reminders and files nothing on your behalf.',
  },
};
