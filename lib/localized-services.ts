import type { Service } from "../app/data/services";
import { serviceLayouts } from "../app/data/services";
import type { Messages } from "./messages/types";

export function buildServices(messages: Messages): Service[] {
  return serviceLayouts.map((layout, i) => {
    const item = messages.services.items[i];
    return {
      ...layout,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
    };
  });
}
