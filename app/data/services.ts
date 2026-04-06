export type ServiceIconKey =
  | "globe"
  | "fileText"
  | "refreshCw"
  | "alertTriangle"
  | "building2";

export interface Service {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imagePosition?: "left" | "right";
  iconKey?: ServiceIconKey;
  icon?: string;
}

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Порядок має збігатися з `messages.*.services.items` */
export const serviceLayouts = [
  {
    image: unsplash("photo-1434030216411-0b793f4b4173"),
    imagePosition: "left" as const,
    iconKey: "globe" as const,
    icon: "🛂",
  },
  {
    image: unsplash("photo-1521737711867-e3b97375f902"),
    imagePosition: "left" as const,
    iconKey: "fileText" as const,
    icon: "💼",
  },
  {
    image:
      "https://i.pinimg.com/1200x/12/f7/88/12f7886fbea32e723975f380a3dbbd2d.jpg",
    imagePosition: "right" as const,
    iconKey: "fileText" as const,
    icon: "📋",
  },
  {
    image: unsplash("photo-1450101499163-c8848c66ca85"),
    imagePosition: "right" as const,
    iconKey: "refreshCw" as const,
    icon: "🔄",
  },
  {
    image: unsplash("photo-1454165804606-c3d57bc86b40"),
    imagePosition: "left" as const,
    iconKey: "alertTriangle" as const,
    icon: "⚖️",
  },
  {
    image: unsplash("photo-1486406146926-c627a92ad1ab"),
    imagePosition: "right" as const,
    iconKey: "building2" as const,
    icon: "🏢",
  },
];
