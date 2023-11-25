export interface ItineraryResponse {
    travelItinerary: {
        id: any;
        itineraryName: string;
        itineraryDescription: string;
        dateCreated: string;
        dateUpdated: string;
        totalPrice: any;
        tourist_services: {
          id: any;
          city: {
            id: any;
            cityName: string;
            country: {
              id: any;
              countryName: string;
            };
          };
          serviceName: string;
          serviceDescription: string;
          serviceCategory: string;
          serviceDate: string;
          serviceDeadline: string;
          price: any;
          capacity: any;
          content: string;
          images: string[];
          touristProvider: {
            id: any;
            organizationName: string;
            organizationDescription: string;
            websiteLink: string;
            user: {
              username: string;
              role: string;
              birthdate: string;
              email: string;
              profileLink: string;
            };
          };
        }[];
      };
    tourist: {
    id: any;
    firstName: string;
    lastName: string;
    nationality: string;
    gender: string;
    travelPoints: any;
    hasPremium: boolean;
    user: {
        username: string;
        role: string;
        birthdate: string;
        email: string;
        profileLink: string;
    };
    };
    operationDate: string;
    operationType: string;    
}
