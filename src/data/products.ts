export interface CatalogProduct {
  name: string;
  slug: string;
  summary: string;
  imageUrl: string;
}

export interface ProductFamily {
  id: string;
  name: string;
  summary: string;
  imageUrl: string;
  products: CatalogProduct[];
}

export const productFamilies: ProductFamily[] = [
  {
    id: "worm-gearbox",
    name: "Worm Gearbox",
    summary: "Worm reduction gearboxes, including screw jacks and linear actuators.",
    imageUrl: "/products/Sv-series-gearbox.png",
    products: [
      {
        name: "SU Series Gearbox",
        slug: "sv-series-gearbox",
        summary: "SU series worm gearbox for industrial speed reduction.",
        imageUrl: "/products/Sv-series-gearbox.png",
      },
      {
        name: "FFMU / FFMV Series Gearbox",
        slug: "ffmu-ffmv-series-gearbox",
        summary: "FFMU and FFMV series worm gearboxes.",
        imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
      },
      {
        name: "Screw Jack / Linear Actuator",
        slug: "screw-jack-linear-actuator",
        summary: "Screw jacks and linear actuators for lifting and positioning.",
        imageUrl: "/products/screwjack-Linear-actuator.png",
      },
    ],
  },
  {
    id: "helical-gear-motor",
    name: "Helical Gear Motor / Gearbox",
    summary: "Helical geared motors and gearboxes in inline, parallel, mini, and screw conveyor arrangements.",
    imageUrl: "/products/Inline-helical-gearmoter_ gearbox.png",
    products: [
      {
        name: "Inline",
        slug: "helical-inline",
        summary: "Inline helical gear motor and gearbox.",
        imageUrl: "/products/Inline-helical-gearmoter_ gearbox.png",
      },
      {
        name: "Parallel",
        slug: "helical-parallel",
        summary: "Parallel helical gear motor and gearbox.",
        imageUrl: "/products/Parallel-helical-gearmoter-gearbox.png",
      },
      {
        name: "Mini Motor",
        slug: "mini-motor",
        summary: "Compact mini helical gear motor.",
        imageUrl: "/products/Mini-motor.png",
      },
      {
        name: "Screw Conveyor Gearbox",
        slug: "screw-conveyor-gearbox",
        summary: "Helical gearbox for screw conveyor drives.",
        imageUrl: "/products/Screw-conver-gearbox.png",
      },
    ],
  },
  {
    id: "parallel-shaft-helical",
    name: "Parallel Shaft Helical Gearbox",
    summary: "Parallel shaft helical gearboxes for extruder and crane duty.",
    imageUrl: "/products/Extruder-duty-gearbox.png",
    products: [
      {
        name: "Extruder Duty Gearbox",
        slug: "extruder-duty-gearbox",
        summary: "Parallel shaft helical gearbox built for extruder duty.",
        imageUrl: "/products/Extruder-duty-gearbox.png",
      },
      {
        name: "Helical Gearbox for Crane Duty",
        slug: "helical-gearbox-crane-duty",
        summary: "Parallel shaft helical gearbox for crane duty applications.",
        imageUrl: "/products/Helical-gearbox-for-crane-duity.png",
      },
    ],
  },
  {
    id: "planetary-gearbox",
    name: "Planetary Gearbox",
    summary: "Planetary gearboxes in inline and right-angle configurations.",
    imageUrl: "/products/Inline-plannatery-gearbox.png",
    products: [
      {
        name: "Inline",
        slug: "planetary-inline",
        summary: "Inline planetary gearbox.",
        imageUrl: "/products/Inline-plannatery-gearbox.png",
      },
      {
        name: "Right Angle",
        slug: "planetary-right-angle",
        summary: "Right-angle planetary gearbox.",
        imageUrl: "/products/Right-Angle-planetary-gearbox.png",
      },
    ],
  },
];

export interface CatalogItem extends CatalogProduct {
  familyId: string;
  familyName: string;
}

export const catalogProducts: CatalogItem[] = productFamilies.flatMap((family) =>
  family.products.map((product) => ({
    ...product,
    familyId: family.id,
    familyName: family.name,
  })),
);

export function getProductBySlug(slug: string): CatalogItem | undefined {
  return catalogProducts.find((product) => product.slug === slug);
}
