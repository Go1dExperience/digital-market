export type ProductCategory = {
	label: string;
	value: "ui_kits" | "icons";
	feature: {
		name: string;
		href: string;
		imageSrc: string
	}[]
}