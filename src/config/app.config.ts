interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Waiter', 'Chef'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant information', 'View menu', 'Make a reservation', 'Place an order'],
  ownerAbilities: [
    'Manage users',
    'Manage restaurants',
    'Manage menus',
    'Manage tables',
    'Manage reservations',
    'Manage orders',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/fa238179-c386-4350-a3d3-cb8575229e1b',
};
