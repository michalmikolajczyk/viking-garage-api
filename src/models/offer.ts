interface Accessorie {
  travelBoxes: boolean;
  lock: boolean;
  camera: boolean;
  basicTools: boolean;
  firstAidKit: boolean;
}

interface Helmet {
  certificates: string;
  age: number;
  state: string;
  type: string;
  picture: string;
}

interface Motorcycle {
  year: number;
  type: string;
  termsOfUse: string;

// general
  roadLegal: boolean;
  engine: string;
  licenseType: string;
  capacity: number;
  minRentalPeriod: number;
  maxRentalPeriod: number;
  maxPower: number;
  weight: number;
  topSpeed: number;
  seatHeight: number;
  torque: number;
  maxRiders: number;
  acceleration: number;

// motorcycle
  cylinderCount: number;
  wheelSizes: string;
  boreStroke: number;
  tires: string;
  transmission: string;
  brakes: string;
  compressionRatio:string;
  suspension: string;
  ignitionType: string;
  frame: string;
  kickstand: boolean;
  wheelbase: number;
  lights: string;
  rakeTrail: string;
  storageSpace: boolean;

// mechanic
  generalState: string;
  motoHours: number;
  modifications: boolean;
  flaws: boolean;
  riderExperience: string;
  minimumDriverAge: number;
  maintenanceRequired: string;
  maintenanceHistory: string;

// invisble
  fuelCapacity: number;
}

interface Protection {
  hemlet: boolean;
  gloves: boolean;
  boots: boolean;
  jacket: boolean;
  vest: boolean;
  chestProtector: boolean;
  buzzer: boolean;
  pants: boolean;
  knees: boolean;
  elbows: boolean;
  goggles: boolean;
  neckBrace:boolean;
}

interface Service {
  parkingGarage: boolean;
  recommendedMechanic:boolean;
  transportTheMorocycle:boolean;
  transportToFromMotorcycle:boolean;
  photographer: boolean;
  mechanicalChangesOptions:boolean;
  guide: boolean;
  coach: boolean;
  group: boolean;
  club: boolean;
  nearbyCircuitTrail:boolean;
}

export interface Offer {
// offer basic
  title: string;
  type: string;
  main: number;
  brief: string;
  images: {
    main: string;
  };
  price: Object;

// offer items
  accessorie?: Accessorie;
  helmet?: Helmet;
  motorcycle?: Motorcycle;
  protection?: Protection;
  service?: Service;
}

export interface OfferPost {
  type: string;

// offer items
  accessorie?: Accessorie;
  helmet?: Helmet;
  motorcycle?: Motorcycle;
  protection?: Protection;
  service?: Service;
}
