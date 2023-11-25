export interface Itinerary {
  id: any;
  itineraryName: any;
  itineraryDescription: any;
  dateCreated: any;
  dateUpdated: any;
  totalPrice: any;
  tourist_services: [
    {
      id: any;
      city: {
        id: any;
        cityName: any;
        country: {
          id: any;
          countryName: any;
        };
      };
      serviceName: any;
      serviceDescription: any;
      serviceCategory: any;
      serviceDate: any;
      serviceDeadline: any;
      price: any;
      capacity: any;
      content: any;
      images: any[];
      touristProvider: {
        id: any;
        organizationName: any;
        organizationDescription: any;
        websiteLink: any;
        user: {
          username: any;
          role: any;
          birthdate: any;
          email: any;
          profileLink: any;
        };
      };
    }
  ];
}
