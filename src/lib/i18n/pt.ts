/**
 * Português de Portugal, and the source of truth for every string on the site.
 *
 * **This file defines the shape.** `Dictionary` is `typeof pt`, so English has to match it
 * key for key or it does not compile — a missing translation is a build failure rather than
 * a paragraph that silently falls back to the wrong language.
 *
 * No arrays of translatable content anywhere, on purpose. A list of three features in one
 * language and two in another would typecheck perfectly and ship wrong, so the components
 * hold the structure and this file holds only the words.
 *
 * pt-PT, not pt-BR: *marcação* rather than *agendamento*, *sinal* rather than *depósito* —
 * a deposit against a booking has its own word here and using the bank one reads as
 * translated. *Telemóvel*, *fatura*, *recibo verde*.
 */
export const pt = {
  meta: {
    title: 'Upfront — marcações, pagamentos e obrigações fiscais',
    description:
      'A plataforma de operações para profissionais independentes: página de marcações, sinais por MB WAY, agenda com uma coluna por pessoa, e recibos verdes e prazos de IVA em ordem.',
    plansTitle: 'Planos e preços — Upfront',
    plansDescription:
      'Quatro planos para profissionais independentes e pequenos espaços em Portugal. A comissão sobre pagamentos é igual em todos; o plano muda o que pode fazer.',
    localeTag: 'pt-PT',
  },

  nav: {
    sections: 'Secções',
    bookings: 'Marcações',
    payments: 'Pagamentos',
    compliance: 'Fiscal',
    plans: 'Planos',
    openApp: 'Entrar',
    skipToContent: 'Saltar para o conteúdo',
    language: 'Idioma',
  },

  hero: {
    pill: 'Marcações, pagamentos e fiscal',
    headline: 'O seu espaço continua a trabalhar enquanto está com um cliente.',
    lede: 'A Upfront é uma plataforma de operações para profissionais independentes. Uma página onde os seus clientes marcam sozinhos, sinais que seguram o horário, uma agenda com uma coluna por pessoa, e os recibos verdes e as datas do IVA em ordem — em vez de quatro ferramentas que nunca ouviram falar umas das outras.',
    ctaPrimary: 'Ver o que faz',
    ctaSecondary: 'Entrar',
    note: 'Feito para Portugal, depois para Espanha. Não é um atendedor de chamadas com um painel ao lado.',
  },

  heroFigure: {
    thisWeek: 'Esta semana',
    timezone: 'Europe/Lisbon',
    bookedName: 'Marta Costa',
    bookedWhen: 'marcou quinta-feira às 14:30',
    bookedPaid: '· sinal pago',
    alt: 'Uma semana de agenda a encher-se de marcações.',
  },

  pains: {
    eyebrow: 'Porque é que isto existe',
    title: 'Três problemas que no fundo são um só',
    lede: 'No dia a dia não são ferramentas separadas. Uma chamada perdida é uma marcação perdida, uma marcação perdida é uma falha na faturação, e é da faturação que a papelada é feita.',
    phoneHeading: 'O telemóvel toca a meio de um atendimento',
    phoneBody:
      'Tem a tesoura na mão. A chamada vai para o voicemail, e a maioria dessas pessoas marca noutro sítio em vez de voltar a ligar.',
    trustHeading: 'O horário ficou preso por confiança',
    trustBody:
      'Quem não pagou nada para marcar não tem razão nenhuma para aparecer, e uma cadeira vazia ao sábado é a hora mais cara da semana.',
    paperHeading: 'A papelada é uma vida à parte',
    paperBody:
      'Recibos verdes num lado, o tecto do IVA na cabeça de ninguém, e datas da Segurança Social de que se lembra na semana seguinte.',
  },

  bookings: {
    eyebrow: 'Marcações',
    title: 'Marcadas enquanto trabalha, não depois de fechar',
    lede: 'Uma página pública por espaço, assente nas mesmas regras de disponibilidade que a aplicação já impõe — por isso um cliente nunca consegue marcar algo que a agenda recusaria.',
    pageHeading: 'Uma página que os seus clientes usam sozinhos',
    pageBody:
      'O seu endereço, as suas cores, o seu logótipo. Desligada até a publicar — a agenda é privada até dizer o contrário.',
    freeHeading: 'Horas que estão mesmo livres',
    freeBody:
      'A disponibilidade é o espaço estar aberto, a pessoa estar a trabalhar, e não estar ausente nem já marcada. Oferecer um horário que não pode cumprir é pior do que não oferecer nenhum.',
    manageHeading: 'Desmarcam e remarcam sem lhe ligar',
    manageBody:
      'Um link de gestão na confirmação, para que o horário volte à agenda no momento em que o largam, e não quando dá por isso.',
    teamHeading: 'A maioria dos espaços não é uma pessoa só',
    teamBodyOne:
      'Cada pessoa tem o seu horário, as suas ausências e a sua lista de serviços — com outro preço ou outra duração onde for preciso. O cliente escolhe alguém ou deixa ao seu critério, e uma visita pode passar por duas pessoas: um corte com a Ana e a barba com o Rui, numa só marcação.',
    teamBodyTwo:
      'Donos e gerentes veem o espaço todo. Quem atende vê o seu próprio dia. A receção cobra e marca sem conseguir abrir a parte fiscal.',
  },

  availabilityFigure: {
    shopHours: 'Horário do espaço',
    employeeHours: 'Horário da Ana',
    free: 'Sem marcação nem ausência',
    title: 'Como se calcula um horário disponível',
    alt: 'Três círculos sobrepostos — o horário do espaço, o horário de uma pessoa, e o tempo que não está marcado nem ausente. Um horário disponível é a pequena área onde os três se cruzam.',
  },

  teamFigure: {
    day: 'Quinta-feira',
    people: '4 pessoas',
  },

  payments: {
    eyebrow: 'Pagamentos',
    title: 'Dinheiro que chega com a marcação',
    lede: 'MB WAY e cartão ligados à marcação em vez de andarem ao lado dela, para que um sinal pago e um horário seguro sejam o mesmo facto.',
    modesHeading: 'Nada, um sinal, ou o preço todo',
    modesBody:
      'A escolha é sua, espaço a espaço. Um sinal é a defesa mais directa que há contra faltas, e é o que torna seguro dar um link público a um desconhecido.',
    counterHeading: 'Cobre o resto ao balcão',
    counterBody:
      'Quando o trabalho está feito, envia para o telemóvel do cliente um pedido do que falta — ou para outro número, dado ali mesmo. Substitui um terminal de pagamento que pode não ter.',
    settlementHeading: 'O dinheiro chega a si, não a nós',
    settlementBody:
      'Os fundos dos clientes são creditados na sua própria conta junto da instituição de pagamento e pagos a partir daí. A Upfront dá a instrução da divisão; nunca fica com o seu dinheiro.',
  },

  splitFigure: {
    service: 'Coloração',
    price: '65,00 €',
    keptAmount: '13,00',
    returnedAmount: '52,00',
    keptHeading: 'Fica consigo se desmarcarem',
    keptBody: 'A parte do sinal. O horário perdeu-se à custa do espaço.',
    returnedHeading: 'Devolvido',
    returnedBody: 'Com a antecedência que foi prometida ao cliente antes de pagar.',
  },

  compliance: {
    eyebrow: 'Fiscal',
    title: 'A papelada é feita de trabalho que já fez',
    lede: 'Cada atendimento que aconteceu é uma linha de um recibo e um número a contar para o tecto do IVA. A Upfront já sabe dos dois, por isso faz a conta por si.',
    recibosHeading: 'Recibos verdes, feitos a partir das marcações',
    recibosBody:
      'Escolhe os atendimentos e recebe um rascunho numerado com o IVA já calculado. Sequencial, e fixo depois de emitido.',
    ceilingHeading: 'O tecto da isenção, vigiado o ano todo',
    ceilingBody:
      'Avisa durante a subida, e não depois de o ter passado — que é quando deixa de ser uma escolha.',
    datesHeading: 'Datas de IVA e Segurança Social',
    datesBody: 'As que chegam trimestralmente e de que nos lembramos uma vez por ano.',
    disclaimerStrong: 'A Upfront não entrega nada.',
    disclaimerBody:
      ' Produz rascunhos, contas e avisos, e uma exportação com que a sua contabilidade possa trabalhar. O que vai para a Autoridade Tributária é enviado por uma pessoa que quis enviá-lo.',
  },

  ceilingFigure: {
    percent: '62%',
    caption: 'do tecto de isenção',
    article: 'art. 53.º',
    alt: 'Um mostrador semicircular pouco abaixo de dois terços, a mostrar a faturação face ao tecto de isenção de IVA.',
    title: 'Faturação face ao tecto de isenção de IVA',
  },

  capabilities: {
    eyebrow: 'Também vem incluído',
    title: 'A metade sem glamour',
    lede: 'Nada disto é uma funcionalidade de capa. Tudo isto é a diferença entre software que se continua a usar e software que se experimentou.',
    clientsTitle: 'Fichas de cliente que se constroem sozinhas',
    clientsBody:
      'Cada marcação encontra o cliente pelo número em vez de criar outro, por isso um habitual é um histórico e não nove registos quase iguais.',
    remindersTitle: 'Lembretes que saem uma vez',
    remindersBody:
      'Uma confirmação quando marcam e um lembrete antes do dia — e um reinício pelo meio não envia nenhum deles duas vezes.',
    brandTitle: 'A sua página, as suas cores',
    brandBody:
      'Um código de cor e um logótipo, e a página de marcações veste-os. O contraste do texto é calculado a partir da cor que escolheu, por isso continua legível seja qual for.',
    calendarTitle: 'Uma agenda por pessoa, ou todas',
    calendarBody:
      'Uma coluna para cada um no dia, uma pessoa de cada vez na semana, e as marcações feitas pela página assinaladas — chegaram sem ninguém estar a ver.',
    rolesTitle: 'Perfis à medida de um espaço',
    rolesBody:
      'Dono, gerente, receção, colaborador. A receção cobra; a parte fiscal é de quem assina os recibos.',
    ledgerTitle: 'A conta mostra o que recebe mesmo',
    ledgerBody:
      'Líquido da nossa comissão, nunca o bruto. Mostrar o que o cliente pagou como se lhe tivesse chegado tudo empola o que lhe é devido exactamente pela nossa comissão.',
  },

  horizon: {
    eyebrow: 'Para onde isto vai',
    title: 'Construído pela ordem que ajuda primeiro',
    lede: 'Primeiro a agenda e o dinheiro, porque é disso que se faz o resto. O que vem a seguir não vale nada se o que está por baixo estiver errado.',
    nowLabel: 'Agora',
    nowHeading: 'Marcações, pagamentos, fiscal',
    nowBody: 'A página pública, a agenda, sinais e saldos, recibos e prazos. É isto que existe.',
    nextLabel: 'A seguir',
    nextHeading: 'O produto em português',
    nextBody:
      'Deixado para o fim de propósito, para que os textos sejam extraídos uma vez e não três. O site já está; a aplicação vem a seguir.',
    spainLabel: 'Depois',
    spainHeading: 'España',
    spainBody: 'Os mesmos problemas com outro código fiscal. Autónomos, não independentes.',
  },

  cta: {
    title: 'Venha ver',
    body: 'Se o seu espaço tem uma particularidade que nada aqui cobre — e provavelmente tem — é essa a conversa que interessa.',
    primary: 'Entrar',
    secondary: 'Falar connosco',
  },

  /**
   * The plans page. **Only words here** — which tier carries which feature is structure and
   * lives in `Plans.tsx`, for the reason at the top of this file.
   *
   * Each tier says what it adds over the one below rather than repeating everything, which is
   * how the pricing decision is written down and what keeps four cards readable.
   */
  plans: {
    eyebrow: 'Planos',
    title: 'Pague pelo tamanho do seu espaço, não pelo que fatura',
    lede: 'A comissão sobre pagamentos é igual em todos os planos. O plano muda o que pode fazer, nunca quanto lhe custa receber.',
    monthly: 'Mensal',
    annual: 'Anual',
    annualSaving: 'Menos 10%',
    cycleLabel: 'Como quer pagar',
    perMonth: '/mês',
    annualBilled: (amount: string) => `Ou ${amount} por ano`,
    monthlyEquivalent: (amount: string) => `Equivale a ${amount} por mês`,
    start: 'Começar',
    startFree: 'Começar grátis',
    builtOn: (plan: string) => `Tudo o que está em ${plan}, mais:`,
    freeName: 'Grátis',
    freePrice: 'Grátis',
    freeWho: 'Para quem trabalha sozinho e quer a agenda em ordem.',
    freeOnePerson: 'Uma pessoa',
    freeBookingPage: 'Página de marcações pública, com a sua cor e o seu logótipo',
    freeClients: 'Marcações, clientes e histórico',
    freeDeposits: 'Sinais e pagamentos por MB WAY',
    freeCompliance: 'Rascunhos de recibos verdes e prazos de IVA',
    freeEmail: 'Confirmações e lembretes por email',
    soloName: 'Solo',
    soloWho: 'Para quem tem clientes habituais.',
    soloRecurring: 'Marcações repetidas — semanais, quinzenais ou mensais',
    standardName: 'Equipa',
    standardWho: 'Para um espaço com mais do que um par de mãos.',
    standardPeople: 'Pessoas sem limite, cada uma com o seu horário',
    standardCalendar: 'Agenda com uma coluna por pessoa',
    standardSms: 'Lembretes por SMS — 200 por mês',
    proName: 'Completo',
    proWho: 'Para quem recusa marcações por falta de horas.',
    proWaitlist: 'Lista de espera — quando alguém desmarca, avisamos quem esperava',
    proSms: 'Lembretes por SMS — 1000 por mês',
    feeNote:
      'Um pagamento recebido tem uma comissão de 4% + 0,55 € — já com o custo do Stripe lá dentro, não por cima.',
    vatNote: 'Preços com IVA incluído.',
    neverGated:
      'Os seus recibos, os seus registos fiscais e a exportação dos seus dados nunca dependem do plano. Nem numa conta cancelada.',
    doubtTitle: 'Não sabe qual?',
    doubtBody:
      'Comece no Grátis. Muda de plano quando precisar, e mudar nunca apaga nada do que já lá está.',
  },

  footer: {
    tagline: 'Operações para profissionais independentes. Portugal primeiro.',
    elsewhere: 'Noutros sítios',
    legal:
      'Os valores fiscais no produto são um auxiliar de planeamento, não aconselhamento fiscal — a Upfront produz rascunhos e avisos e não entrega nada em seu nome.',
  },
};

export type Dictionary = typeof pt;
