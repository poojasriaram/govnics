import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "@/pages/Index";
import IndustryDetailPage from "@/pages/IndustryDetailPage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";
import ResourceHubPage from "@/pages/ResourceHubPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import CookiePolicyPage from "@/pages/CookiePolicyPage";
import ManageStaffingPage from "@/pages/ManageStaffingPage";
import CyberSecurityPage from "@/pages/CyberSecurityPage";
import AboutPage from "@/pages/AboutPage";
import ESGPage from "@/pages/ESGPage";
import PartnersPage from "@/pages/PartnersPage";
import GrcPage from "@/pages/GrcPage";
import IndustriesPage from "@/pages/IndustriesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/grc" element={<GrcPage />} />
        <Route path="/cybersecurity" element={<CyberSecurityPage />} />
        <Route path="/esg" element={<ESGPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:clusterId" element={<IndustryDetailPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/resources" element={<ResourceHubPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/cookies" element={<CookiePolicyPage />} />
        <Route path="/staffing" element={<ManageStaffingPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
