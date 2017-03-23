export interface Offer {
// offer basic
  title: string;
  type: string;
  main: number;
  brief: string;
  images: {
    main: string;
  };
  offerer: Object;
  price: Object;

// offer items
  accessorie?: Object;
  helmet?: Object;
  motorcycle?: Object;
  protection?: Object;
  service?: Object;
}
