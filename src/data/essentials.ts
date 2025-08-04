import essentialsData from './essentials-data.json';

export interface EssentialCategory {
  name: string;
  items: string[];
}

export const essentialCategories: EssentialCategory[] = essentialsData.categories;
