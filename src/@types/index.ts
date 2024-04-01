export type ProductCategory = {
  label: string;
  value: "ui_kits" | "icons";
  feature: {
    name: string;
    href: string;
    imageSrc: string;
  }[];
};
export type FormatPriceOptions = {
  currency?: "USD" | "EUR" | "GBP" | "BDT";
  notation?: Intl.NumberFormatOptions["notation"];
};
