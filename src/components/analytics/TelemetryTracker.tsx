import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent, initializeTelemetry } from "@/utils/analytics";

export const TelemetryTracker = () => {
  const location = useLocation();

  useEffect(() => {
    initializeTelemetry();
  }, []);

  useEffect(() => {
    // Determine the page name based on route
    let pageName = "Unknown Page";
    let category = "General";

    const path = location.pathname;
    if (path === "/") {
      pageName = "Home Page";
    } else if (path === "/about") {
      pageName = "About Us";
    } else if (path === "/grc") {
      pageName = "GRC Solutions";
      category = "Labour Law";
    } else if (path === "/cybersecurity") {
      pageName = "Cybersecurity";
      category = "Cybersecurity";
    } else if (path === "/esg") {
      pageName = "ESG Advisory";
      category = "ESG";
    } else if (path === "/industries") {
      pageName = "Industries Overview";
    } else if (path.startsWith("/industries/")) {
      pageName = `Industry Detail - ${path.split("/").pop()}`;
    } else if (path.startsWith("/services/")) {
      pageName = `Service Detail - ${path.split("/").pop()}`;
      category = "Labour Law";
    } else if (path === "/sgrc/services") {
      pageName = "Statutory GRC Services";
      category = "Statutory GRC";
    } else if (path.startsWith("/sgrc/services/")) {
      pageName = `SGRC Service Detail - ${path.split("/").pop()}`;
      category = "Statutory GRC";
    } else if (path === "/sgrc/resources") {
      pageName = "SGRC Resources Hub";
      category = "Statutory GRC";
    } else if (path === "/sgrc/e-library") {
      pageName = "Statutory e-Library";
      category = "Statutory GRC";
    } else if (path === "/sgrc/estimator") {
      pageName = "Statutory GRC Estimator";
      category = "Statutory GRC";
    } else if (path === "/resources") {
      pageName = "GRC Knowledge Hub";
    } else if (path === "/contact") {
      pageName = "Contact Us";
    } else if (path === "/staffing") {
      pageName = "Manpower Staffing";
      category = "HR Policy";
    } else if (path === "/partners") {
      pageName = "Partners";
    } else if (path === "/analytics") {
      pageName = "GRC Analytics & Data Sheet";
    }

    trackEvent("page_view", category, { pageName });
  }, [location]);

  return null;
};
