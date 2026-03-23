import { FileText, Globe, RefreshCw, AlertTriangle } from 'lucide-react';

export interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition?: 'left' | 'right';
  Icon?: typeof FileText;
  icon?: string;
}

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const services: Service[] = [
  {
    title: 'Получение гражданства',
    subtitle: 'Консультации',
    description:
      'Разбор оснований, сроков и документов — без обещаний «гарантированного» результата, с реалистичной оценкой возможностей.',
    image: unsplash('photo-1434030216411-0b793f4b4173'),
    imagePosition: 'left',
    Icon: Globe,
    icon: '🛂',
  },
  {
    title: 'Легальное трудоустройство в Европе',
    subtitle: 'Консультации',
    description:
      'Варианты оформления работы, типовые требования работодателя и миграционных органов, на что обратить внимание до переезда.',
    image: unsplash('photo-1521737711867-e3b97375f902'),
    imagePosition: 'left',
    Icon: FileText,
    icon: '💼',
  },
  {
    title: 'ВНЖ, разрешения на работу, PESEL, номера, регистрации',
    subtitle: 'Консультации',
    description:
      'Поясняем назначение документов и статусов, типовые шаги и отличия между странами — в рамках информационной консультации.',
    image:
      'https://i.pinimg.com/1200x/12/f7/88/12f7886fbea32e723975f380a3dbbd2d.jpg',
    imagePosition: 'right',
    Icon: FileText,
    icon: '📋',
  },
  {
    title: 'Смена статуса пребывания',
    subtitle: 'Консультации',
    description:
      'Когда смена статуса реалистична, какие риски и сроки чаще встречаются, какие документы обычно запрашивают.',
    image: unsplash('photo-1450101499163-c8848c66ca85'),
    imagePosition: 'right',
    Icon: RefreshCw,
    icon: '🔄',
  },
  {
    title: 'Риски, сроки и варианты действий',
    subtitle: 'Консультации',
    description:
      'Честно обсуждаем ограничения, вероятные задержки и альтернативные сценарии — без иллюзий и лишних затрат.',
    image: unsplash('photo-1454165804606-c3d57bc86b40'),
    imagePosition: 'left',
    Icon: AlertTriangle,
    icon: '⚖️',
  },
];

export const heroServices = services;
