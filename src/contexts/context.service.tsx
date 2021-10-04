import React, { useContext } from "react";
import BookmarkService from "../libs/service/service.bookmark";

type ServiceContextType = {
    bookmarkService: BookmarkService;
} | null;

const ServiceContext = React.createContext<ServiceContextType>(null);

type Props = {
    bookmarkService: BookmarkService;
};
const ServiceProvider: React.FC<Props> = ({ bookmarkService, children }) => {
    return <ServiceContext.Provider value={{ bookmarkService }}>{children}</ServiceContext.Provider>;
};

export function useService(): NonNullable<ServiceContextType> {
    const services = useContext(ServiceContext);
    if (!services) throw new Error("Service is not provided");
    return services;
}

export default ServiceProvider;
